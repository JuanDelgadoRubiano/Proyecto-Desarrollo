CREATE EXTENSION postgis;



CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40),
	email TEXT);

insert into users (name, email) values ('juan', 'juan@putito.com'),('foxzi', 'foxzi@fox.com');


--
-- TABLE: Cuenta
-- 
-- 

CREATE TABLE Cuenta (
telefono decimal(10) NOT NULL ,
password TEXT NOT NULL ,
tipo varchar(50) NOT NULL,
email varchar(100) NOT NULL 
);

-- 
ALTER TABLE Cuenta ADD CONSTRAINT cuentaPK PRIMARY KEY (telefono);

--
-- TABLE: Tipo_labor
-- 
-- 
CREATE TABLE Tipo_labor (
id_tipo decimal(3) NOT NULL ,
nombre_tipo varchar(100) NOT NULL ,
descripcion varchar(190) NOT NULL 
);

ALTER TABLE Tipo_labor ADD CONSTRAINT tipo_PK PRIMARY KEY (id_tipo);

--
-- TABLE: Labor
-- 
-- 

CREATE TABLE Labor (
id_labor decimal(3) NOT NULL ,
nombre_labor varchar(100) NOT NULL ,
id_tipo decimal(3) NOT NULL 
);

-- 
ALTER TABLE Labor ADD CONSTRAINT Taxi_PK PRIMARY KEY (id_labor);

CREATE INDEX Labor_id_labor_index ON Labor(id_labor);

ALTER TABLE Labor ADD CONSTRAINT labor_vinculo FOREIGN KEY (id_tipo) REFERENCES Tipo_labor(id_tipo) ON UPDATE NO ACTION ON DELETE NO ACTION;

--
-- TABLE: Usuario
-- 
-- 

CREATE TABLE Usuario (
nombre varchar(100) NOT NULL ,
telefono decimal(10) NOT NULL ,
medio_pago varchar(12) NOT NULL ,
direccion geometry(POINT,4326) NOT NULL ,
foto_recibos_servicios varchar(100) NOT NULL 
);

-- 
ALTER TABLE Usuario ADD CONSTRAINT usuario_PK PRIMARY KEY (telefono);

CREATE INDEX Usuario_telefono_index ON Usuario(telefono);

--
-- TABLE: Trabajador
-- 
-- 

CREATE TABLE Trabajador (
CC decimal(15) NOT NULL ,
nombre varchar(100) NOT NULL ,
Estrellas decimal(2,1) NOT NULL DEFAULT 5,
Disponibilidad bool NOT NULL ,
Telefono decimal(10) NOT NULL ,
direccion geometry(POINT,4326) NOT NULL ,
foto_perfil varchar(100) NOT NULL ,
foto_documento varchar(100) NOT NULL 
);

-- 
ALTER TABLE Trabajador ADD CONSTRAINT TrabajadorPK PRIMARY KEY (Telefono);

CREATE INDEX Trabajador_CC_index ON Trabajador(CC);

--
-- TABLE: Trabajador_Labor
-- 
-- 

CREATE TABLE Trabajador_Labor (
trabajador_telefono decimal(10) NOT NULL ,
id_labor decimal(3) NOT NULL ,
unidad_labor decimal(10) NOT NULL,
descripcion varchar(500)  
);

-- 
ALTER TABLE Trabajador_Labor ADD CONSTRAINT trabajador_realiza FOREIGN KEY (trabajador_telefono) REFERENCES Trabajador(Telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Trabajador_Labor ADD CONSTRAINT labor_especializada FOREIGN KEY (id_labor) REFERENCES Labor(id_labor) ON UPDATE NO ACTION ON DELETE NO ACTION;



--
-- TABLE: Usuario_Labor
-- 
-- 

CREATE TABLE Usuario_Labor (
usuario_telefono decimal(10) NOT NULL ,
id_labor decimal(3) NOT NULL ,
trabajador_telefono decimal(10) NOT NULL ,
precio decimal(15) NOT NULL ,
califica decimal(2,1)
);

-- 
ALTER TABLE Usuario_Labor ADD CONSTRAINT usuario_solicitante FOREIGN KEY (usuario_telefono) REFERENCES Usuario(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Usuario_Labor ADD CONSTRAINT trabajador_responsable FOREIGN KEY (trabajador_telefono) REFERENCES Trabajador(Telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Usuario_Labor ADD CONSTRAINT labor_realizada FOREIGN KEY (id_labor) REFERENCES Labor(id_labor) ON UPDATE NO ACTION ON DELETE NO ACTION;

--
-- TABLE: Cuenta_Trabajador
-- 
-- 

CREATE TABLE Cuenta_Trabajador (
cuenta_telefono decimal(10) NOT NULL ,
trabajador_telefono decimal(10) NOT NULL 
);

-- 
ALTER TABLE Cuenta_Trabajador ADD CONSTRAINT datos_cuenta_t FOREIGN KEY (cuenta_telefono) REFERENCES Cuenta(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Cuenta_Trabajador ADD CONSTRAINT datos_trabajador_t FOREIGN KEY (trabajador_telefono) REFERENCES Trabajador(Telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

--
-- TABLE: Cuenta_Usuario
-- 
-- 

CREATE TABLE Cuenta_Usuario (
usuario_telefono decimal(10) NOT NULL ,
cuenta_telefono decimal(10) NOT NULL 
);

-- 
ALTER TABLE Cuenta_Usuario ADD CONSTRAINT datos_cuenta_u FOREIGN KEY (cuenta_telefono) REFERENCES Cuenta(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Cuenta_Usuario ADD CONSTRAINT datos_usuario_u FOREIGN KEY (usuario_telefono) REFERENCES Usuario(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;




