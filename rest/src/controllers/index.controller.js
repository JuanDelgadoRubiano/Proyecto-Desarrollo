const { pool, bcrypt } = require('./bd.controller');

//categoria

///gets
const getCategorias = async (req,res) => {
    const response = await pool.query('select * from categoria');
    res.status(200).json(response.rows);
    console.log(response.rows);
};

const getCategoriaByCod = async (req,res) => {
    const response = await pool.query('select * from categoria where codigo = $1',[req.params.id]);
    res.status(200).json(response.rows);
    console.log(response.rows);
};
///post
const UpdateCategoriaByCod= async (req,res) => {
	const { nombre, descripcion, codigo } = req.body;
	const response = await pool.query('update categoria set nombre= $1, descripcion = $2 where codigo = $3',[nombre, descripcion, codigo]);
	    res.json({
      message: 'Categoria modificada',
      body: {
          Categoria: {nombre, descripcion }
      }
  });
	    
};

const CreateCategoria= async (req,res) => {
	const { nombre, descripcion } = req.body;
	const response = await pool.query('insert into categoria (nombre, descripcion) values ($1, $2)',[nombre, descripcion]);
	    res.json({
      message: 'Categoria agregada',
      body: {
          Categoria: {nombre, descripcion }
      }
  });
};


///delete
const DeleteCategoriaByCod = async (req,res) => {
    const response = await pool.query('delete from categoria where codigo = $1',[req.params.id]);
    res.json({
      message: 'Categoria Eliminada',
      body: {
          Categoria:  'sucess' 
      }
  });
};

//productos
//Gets
const getproductosByCat = async (req,res) => {
    const response = await pool.query('select * from producto where categoria = $1',[req.params.id]);
    res.status(200).json(response.rows);
    console.log(response.rows);
};

const getproductoByCod = async (req,res) => {
    const response = await pool.query('select * from producto where codigo = $1',[req.params.id]);
    res.status(200).json(response.rows);
    console.log(response.rows);
};
///Post
const UpdateProductoByCod= async (req,res) => {
	const { categoria, nombre, imagen , descripcion , descuentos ,
		 detalles , precio , disponibilidad , iva, codigo } = req.body;
	const response = await pool.query('update producto set categoria= $1, nombre= $2, imagen = $3, descripcion = $4, descuentos = $5, detalles = $6, precio = $7, disponibilidad = $8, iva = $9 where codigo = $10',	[categoria, nombre, imagen , descripcion , descuentos ,
		 detalles , precio , disponibilidad , iva, codigo]);
	    res.json({
      message: 'Producto actualizado',
      body: {
          Producto: {nombre, descripcion }
      }
  });
};

const CreateProducto= async (req,res) => {
	const { categoria, nombre, imagen , descripcion , descuentos ,
		 detalles , precio , disponibilidad , iva } = req.body;
	const response = await pool.query('insert into producto (categoria, nombre, imagen , descripcion , descuentos , detalles , precio , disponibilidad , iva) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)',[categoria, nombre, imagen , descripcion , descuentos , 		detalles , precio , disponibilidad , iva]);
	    res.json({
      message: 'Producto agregado',
      body: {
          Producto: {nombre, descripcion }
      }
  });
};
///Delete 
const DeleteProductoByCod = async (req,res) => {
    const response = await pool.query('delete from Producto where codigo = $1',[req.params.id]);
    res.json({
      message: 'Producto eliminado',
      body: {
          Producto: 'sucess'
      }
  });
};



//usuarios
///Gets
const getUsuarios = async (req,res) => {
    const response = await pool.query('select * from usuario');
    res.status(200).json(response.rows);

};


const getUsuarioBycor = async (req,res) => {
    const response = await pool.query('select * from usuario where correo = $1',[req.params.id]);
    res.status(200).json(response.rows);

};
///Post

const createUsuario= async (req,res) => {
  const { nombre, nombrec, correo, contraseña, rol } = req.body;

  const response = await pool.query('insert into usuario (nombre ,nombrec ,correo ,contraseña, rol) values ($1, $2, $3, $4, $5)',
	[nombre, nombrec, correo, contraseña, rol ]);
  console.log(response);
  res.json({
      message: 'usuario agregado',
      body: {
          user: {nombre, nombrec, correo, rol }
      }
  })

};

const UpdateUsuario= async (req,res) => {
	const { nombre, nombrec, correo, contraseña, rol, id } = req.body;
	const response = await pool.query('update usuario set nombre = $1, nombrec = $2, correo = $3, contraseña = $4, rol = $5 where id = $6',[nombre, nombrec, correo, contraseña, rol, id]);
	res.json({
      message: 'usuario modificado',
      body: {
          user: {nombre, nombrec, correo, rol }
      }
  });
	    
};

///Delete
const DeleteUsuarioByCor = async (req,res) => {
    const response = await pool.query('delete from Usuario where correo = $1',[req.params.id]);
    res.json({
      message: 'usuario eliminado',
      body: {
          user: 'sucess'
      }
  });
};

const DeleteUsuarioByID = async (req,res) => {
    const response = await pool.query('delete from Usuario where id = $1',[req.params.id]);
    res.json({
      message: 'usuario eliminado',
      body: {
          user: 'sucess'
      }
  });
};


//clientes
///Gets
const getClienteByDoc = async (req,res) => {
    const response = await pool.query('select * from cliente where documento = $1',[req.params.id]);
    res.status(200).json(response.rows);
    console.log(response.rows);
};
///Posts

const UpdateCliente= async (req,res) => {
	const { nombre , telefono, direccion, dia, fecha, documento } = req.body;
	const response = await pool.query('update Cliente set nombre = $1, telefono = $2, direccion = $3, dia = $4, fecha = $5 where documento = $6',[nombre , telefono, direccion, dia, fecha, documento]);
	res.json({
      message: 'Cliente modificado',
      body: {
          user: {nombre , telefono, direccion, dia, fecha, documento }
      }
  });
	    
};

const CreateCliente= async (req,res) => {
	const { nombre , documento, telefono, direccion, dia, fecha } = req.body;
	const response = await pool.query('insert into Cliente (nombre , documento, telefono, direccion, dia, fecha) values ($1, $2, $3, $4, $5, $6)',[nombre , documento, telefono, direccion, dia, fecha]);
	res.json({
      message: 'Cliente Creado',
      body: {
          user: {nombre , telefono, direccion, dia, fecha, documento }
      }
  });
	    
};

///Delete

const DeleteClienteByDoc = async (req,res) => {
    const response = await pool.query('delete from Cliente where documento = $1',[req.params.id]);
    res.json({
      message: 'Cliente eliminado',
      body: {
          user: 'sucess'
      }
  });
};

//sedes
///Gets
const getSedes = async (req,res) => {
    const response = await pool.query('select * from sede');
    res.status(200).json(response.rows);
    console.log(response.rows);
};

const getSedesByID = async (req,res) => {
    const response = await pool.query('select * from sede where id = $1',[req.params.id]);
    res.status(200).json(response.rows);
    console.log(response.rows);
};
///Post

const CreateSede= async (req,res) => {
	const { nombre , nit, direccion, telefono } = req.body;
	const response = await pool.query('insert into sede (nombre , nit, direccion, telefono) values ($1, $2, $3, $4)',[nombre , nit, direccion, telefono]);
	res.json({
      message: 'Sede Creada',
      body: {
          user: {nombre , nit, direccion, telefono }
      }
  });
	    
};

const UpdateSede= async (req,res) => {
	const { nombre , nit, direccion, telefono } = req.body;
	const response = await pool.query('update Sede set nombre = $1, nit = $2, direccion = $3, telefono = $4, where id = $6',[nombre , nit, direccion, telefono, id]);
	res.json({
      message: 'Sede Actualizada',
      body: {
          user: {nombre , nit, direccion, telefono }
      }
  });
	    
};
///Delete
const DeleteSedeByID = async (req,res) => {
    const response = await pool.query('delete from sede where id = $1',[req.params.id]);
    res.json({
      message: 'sede eliminada',
      body: {
          user: 'sucess'
      }
  });
};


const postLogin= async (req,res) => {
  const { user, pass } =req.body;

  if(Number.isInteger(user)){
    const response1 = await pool.query('select * from cuenta where telefono = $1',[user]);
    if(response1.rowCount){
      const password = response1.rows[0].password;
      const valor = await bcrypt.compare(pass, password);
      console.log(pass);
      console.log(password);
      console.log(valor);
      if(valor){
        res.send('exito');
      }
      else{
        res.send('fracaso')
      }
    }
    else{
      res.send('no existe ese tel')
    }

  }

  else{
    const response1 = await pool.query('select * from cuenta where email = $1',[user]);
    if(response1.rowCount){
      const password = response1.rows[0].password;
      const valor = await bcrypt.compare(pass, password);
      console.log(pass);
      console.log(password);
      console.log(valor);
      if(valor){
        res.send('exito');
      }
      else{
        res.send('fracaso')
      }
    }
    else{
      res.send('no existe ese email')
    }

  }

};







module.exports = {
	getCategorias,
	getCategoriaByCod,
	UpdateCategoriaByCod,
	CreateCategoria,
	DeleteCategoriaByCod,
	getproductosByCat,
	getproductoByCod,
	UpdateProductoByCod,
	CreateProducto,
	DeleteProductoByCod,
	getUsuarios,
	getUsuarioBycor,
	createUsuario,
	UpdateUsuario,
	DeleteUsuarioByCor,
	DeleteUsuarioByID,
	getClienteByDoc,
	UpdateCliente,
	CreateCliente,
	DeleteClienteByDoc,
	getSedes,
	getSedesByID,
	CreateSede,
	UpdateSede,
	DeleteSedeByID,
	postLogin
}
