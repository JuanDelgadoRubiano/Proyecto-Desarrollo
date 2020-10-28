
CREATE EXTENSION postgis;



CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40),
	email TEXT);

insert into users (name, email) values ('juan', 'juan@putito.com'),('foxzi', 'foxzi@fox.com');



{
	"telefono": 3106330913,
	"pass": "loco",
	"email": "lobo@animal.com",
	"tipo": "t",
	"cc": 29133575,
	"name": "jonh",
	"estrellas" : 4.9,
	"disponible" : true,
	"perfil": "/casita",
	"documento": "/casita2",
	"direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"

}

{
	"telefono": 3106430913,
	"pass": "loco",
	"email": "lobo@animal.com",
	"tipo": "t",
	"name": "jonh",
	"mpago" : "credito",
	"recibo" : "/lalalae",
	"direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"

}
{
	"telefono": 3106330913,
	"labor": 1,
	"unidad": 300000,
	"descripcion": "Lo hare bn deveras"
}
