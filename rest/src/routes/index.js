require ('dotenv').config(); //Permite usar un env local, asi los datos sensibles como la info
                             //del login de la base de datos o las api no se muestran en el codigo
                             //fuente

const { Router } = require('express');
const router = Router();//crea rutas url y las vincula con las funciones ya creadas


//
const { getCategorias,
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
	postLogin,
	CreateRelacionCategoria,
	DeleteRelacionCategoria } = require('../controllers/index.controller')

router.get('/categorias', getCategorias);
router.get('/categorias/:id',getCategoriaByCod);
router.post('/categorias/update', UpdateCategoriaByCod);
router.post('/categorias', CreateCategoria);
router.delete('/categorias/:id', DeleteCategoriaByCod);
router.get('/productos/cat/:id', getproductosByCat);
router.get('/productos/cod/:id', getproductoByCod);
router.post('/productos/update', UpdateProductoByCod);
router.post('/productos', CreateProducto);
router.post('/productos/cat', CreateRelacionCategoria);
router.delete('/productos/cat', DeleteRelacionCategoria);
router.delete('/productos/:id', DeleteProductoByCod);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuarioBycor);
router.post('/usuarios/update', UpdateUsuario);
router.post('/usuarios', createUsuario);
router.delete('/usuarios/Cor/:id', DeleteUsuarioByCor);
router.delete('/usuarios/:id', DeleteUsuarioByID);
router.get('/clientes/:id',getClienteByDoc);
router.post('/clientes/update', UpdateCliente);
router.post('/clientes', CreateCliente);
router.delete('/clientes/:id', DeleteClienteByDoc);
router.get('/sedes', getSedes);
router.get('/sedes/:id',getSedesByID);
router.post('/sedes/update', UpdateSede);
router.post('/sedes', CreateSede);
router.delete('/sedes/:id', DeleteSedeByID);
router.post('/cuenta/login',postLogin);


module.exports = router;
