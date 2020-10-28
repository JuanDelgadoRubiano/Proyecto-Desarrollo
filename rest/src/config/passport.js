const { pool, bcrypt } = require('../controllers/bd.controller');
const  passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({
    usernameField: 'telefono',
    passwordField: 'pass'
}, async (telefono, pass, done) => {
    //Buscar telefono
    console.log('1-');
    const response1 = await pool.query('select * from cuenta where telefono = $1',[telefono]);
    console.log('2-');
    if (response1.rowCount){
        return done(null, false , {message: 'usuario no encontrado'});
    } else {
      //comprobar contraseña
      const password = response1.rows[0].password;
      const valor = await bcrypt.compare(pass, password);
      if(valor){
        return done(null,response1.rows[0]);
      } else {
        return done(null, false, {message: 'contraseña incorrecta'});
      }
    }
}));

passport.serializeUser((usuario, done) => {
   done(null, usuario.telefono);
});

passport.deserializeUser(async (telefono, done)=> {
  await pool.query('select * from cuenta where telefono = $1',[usuario]),(err,usuario) => {
    done(err,usuario[0]);
  }
});
