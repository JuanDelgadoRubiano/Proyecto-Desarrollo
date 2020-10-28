CREATE TABLE usuario(id SERIAL PRIMARY KEY,
                     nombre VARCHAR(40),
                     nombrec VARCHAR,
                     correo TEXT,
                     contraseña VARCHAR(30),
                     rol VARCHAR(30));

-- Restricciones usuario
alter table usuario
 add constraint R_usuario_correo
 unique (correo);
                     
CREATE TABLE cliente(
                     nombre VARCHAR(40),
                     documento VARCHAR(100) PRIMARY KEY,
                     telefono decimal(10),
                     direccion VARCHAR(50),
                     dia VARCHAR(20),
                     fecha DATE);

-- Restricciones cliente
alter table cliente
 add constraint R_cliente_documento
 unique (documento);
                  
CREATE TABLE sede(id SERIAL PRIMARY KEY,
                   nombre VARCHAR(40),
                   nit VARCHAR(30),
                   direccion VARCHAR(50),
                   telefono decimal(10));


                   
create table categoria(nombre VARCHAR(40),
                       codigo SERIAL PRIMARY KEY,
                       descripcion VARCHAR(200));


                       
CREATE table producto(codigo SERIAL PRIMARY KEY,
		      categoria SERIAL,
                      nombre VARCHAR(40),
                      imagen VARCHAR(100),
                      descripcion VARCHAR(200),
                      descuentos decimal(3),
                      detalles VARCHAR(200),
                      precio decimal(10),
                      disponibilidad BOOLEAN,
                      iva decimal(3));

ALTER TABLE producto ADD CONSTRAINT producto_categorias FOREIGN KEY (categoria) REFERENCES categoria(codigo) ON UPDATE NO ACTION ON DELETE NO ACTION;

                      
create table factura(id SERIAL PRIMARY KEY,
                     fecha date,
                     hora time,
                     subtotal decimal(10),
                     total decimal(10));

--tablas relaciones



create table productos_factura(factura_id SERIAL,
			       producto_codigo SERIAL,
			       producto_cantidad decimal(3));

ALTER TABLE productos_factura ADD CONSTRAINT producto_referencia FOREIGN KEY (producto_codigo) REFERENCES producto(codigo) ON UPDATE NO ACTION ON DELETE NO ACTION; 

ALTER TABLE productos_factura ADD CONSTRAINT factura_referencia FOREIGN KEY (factura_id) REFERENCES factura(id) ON UPDATE NO ACTION ON DELETE NO ACTION; 

create table factura_generada(cliente_documento VARCHAR(100),
			      sede_id SERIAL,
			      factura_id SERIAL);

ALTER TABLE factura_generada ADD CONSTRAINT facturag_referencia FOREIGN KEY (factura_id) REFERENCES factura(id) ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE factura_generada ADD CONSTRAINT sedeg_referencia FOREIGN KEY (sede_id) REFERENCES sede(id) ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE factura_generada ADD CONSTRAINT clienteg_referencia FOREIGN KEY (cliente_documento) REFERENCES cliente(documento) ON UPDATE NO ACTION ON DELETE NO ACTION; 


