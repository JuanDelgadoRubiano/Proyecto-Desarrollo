CREATE TABLE usuario(id SERIAL PRIMARY KEY,
                     nombre VARCHAR(40) NOT NULL CHECK (nombre <> ''),
                     nombrec VARCHAR NOT NULL CHECK (nombrec <> ''),
                     correo TEXT NOT NULL CHECK (correo <> ''),
                     contraseña VARCHAR(30) NOT NULL CHECK (contraseña <> ''),
                     rol VARCHAR(30) NOT NULL CHECK (rol <> '')) ;

-- Restricciones usuario
alter table usuario
 add constraint R_usuario_correo
 unique (correo);

CREATE TABLE cliente(
                     nombre VARCHAR(40) NOT NULL CHECK (nombre <> ''),
                     documento VARCHAR(100) PRIMARY KEY CHECK (documento <> ''),
                     telefono decimal(10) NOT NULL CHECK (telefono > 0),
                     direccion VARCHAR(50) NOT NULL CHECK (direccion <> ''),
                     dia VARCHAR(20) NOT NULL CHECK (dia <> ''),
                     fecha DATE NOT NULL ) ;

-- Restricciones cliente
alter table cliente
 add constraint R_cliente_documento
 unique (documento);

CREATE TABLE sede(id SERIAL PRIMARY KEY,
                   nombre VARCHAR(40) NOT NULL CHECK (nombre <> ''),
                   nit VARCHAR(30) NOT NULL CHECK (nit <> ''),
                   direccion VARCHAR(50) NOT NULL CHECK (direccion <> ''),
                   telefono decimal(10) NOT NULL CHECK (telefono > 0)) ;



create table categoria(nombre VARCHAR(40) NOT NULL CHECK (nombre <> ''),
                       codigo SERIAL PRIMARY KEY,
                       descripcion VARCHAR(200) NOT NULL CHECK (descripcion <> '')) ;



CREATE table producto(codigo SERIAL PRIMARY KEY,
                      nombre VARCHAR(40) NOT NULL CHECK (nombre <> ''),
                      imagen VARCHAR(100) NOT NULL CHECK (imagen <> ''),
                      descripcion VARCHAR(200) NOT NULL CHECK (descripcion <> ''),
                      descuentos decimal(3) NOT NULL,
                      detalles VARCHAR(200) NOT NULL CHECK (detalles <> ''),
                      precio decimal(10) NOT NULL CHECK (precio > 0),
                      disponibilidad BOOLEAN NOT NULL,
                      iva decimal(3) NOT NULL) ;

CREATE table categoria_producto(categoria_cod SERIAL NOT NULL,
				producto_cod SERIAL NOT NULL
				);
ALTER TABLE categoria_producto ADD CONSTRAINT categoria_categoria FOREIGN KEY (categoria_cod) REFERENCES categoria(codigo) ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE categoria_producto ADD CONSTRAINT producto_P_categoria FOREIGN KEY (producto_cod) REFERENCES producto(codigo) ON UPDATE NO ACTION ON DELETE NO ACTION;



create table factura(id SERIAL PRIMARY KEY,
                     fecha date NOT NULL ,
                     hora time NOT NULL,
                     subtotal decimal(10) NOT NULL CHECK (subtotal > 0),
                     total decimal(10) NOT NULL CHECK (total > 0)) ;

--tablas relaciones



create table productos_factura(factura_id SERIAL NOT NULL,
			       producto_codigo SERIAL NOT NULL,
			       producto_cantidad decimal(3) NOT NULL CHECK (producto_cantidad > 0));

ALTER TABLE productos_factura ADD CONSTRAINT producto_referencia FOREIGN KEY (producto_codigo) REFERENCES producto(codigo) ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE productos_factura ADD CONSTRAINT factura_referencia FOREIGN KEY (factura_id) REFERENCES factura(id) ON UPDATE NO ACTION ON DELETE NO ACTION;

create table factura_generada(cliente_documento VARCHAR(100) NOT NULL,
			      sede_id SERIAL NOT NULL,
			      factura_id SERIAL NOT NULL) ;

ALTER TABLE factura_generada ADD CONSTRAINT facturag_referencia FOREIGN KEY (factura_id) REFERENCES factura(id) ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE factura_generada ADD CONSTRAINT sedeg_referencia FOREIGN KEY (sede_id) REFERENCES sede(id) ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE factura_generada ADD CONSTRAINT clienteg_referencia FOREIGN KEY (cliente_documento) REFERENCES cliente(documento) ON UPDATE NO ACTION ON DELETE NO ACTION;
