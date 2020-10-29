const express = require('express');
const session = require('express-session');
const cors = require('cors');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/public')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })




require ('dotenv').config();//Permite usar un env local, asi los datos sensibles como la info
                            //del login de la base de datos o las api no se muestran en el codigo
                            //fuente


const app = express();
const { passport } = require('./config/passport');
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//app.use(passport.initialize());
//app.use(passport.session());


app.use((req,res,next) => {
   res.locals.user = req.user || null;
   next();
});
//rutas
app.use(require('./routes/index'));

app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log("hola");
  console.log(__dirname);
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)

});

app.listen(4000);

console.log('Server on port 4000');