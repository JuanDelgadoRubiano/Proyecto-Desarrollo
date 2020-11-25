const axios = require("axios");

test('crear sede exitosa ', async () => {

  const res = await axios.post('http://localhost:4000/sedes',
  {"nombre": 'santa monica',
  "nit":"154.5578.545.5",
  "direccion": 'lala',
  "telefono": 3212334})

  //const res1 = res.data[0];
  //console.log(res);
  expect(res.data).not.toBe('fracaso');
});


test('crear sede rechazo cadena vacia ', async () => {

  const res = await axios.post('http://localhost:4000/sedes',
  {"nombre": '',
  "nit":"154.5578.545.5",
  "direccion": 'lala',
  "telefono": 3212334})

  //const res1 = res.data[0];
  //console.log(res);
  expect(res.data).toBe('fracaso');
});

test('crear sede rechazo cadena + 40 caracteres ', async () => {

  const res = await axios.post('http://localhost:4000/sedes',
  {"nombre": 'soyunacadenademasde40caracterescreanmeporfavor',
  "nit":"154.5578.545.5",
  "direccion": 'lala',
  "telefono": 3212334})

  //const res1 = res.data[0];
  //console.log(res);
  expect(res.data).not.toBe('fracaso');
});

test('crear categorias exitoso', async () => {

  const res = await axios.post('http://localhost:4000/categorias',
  {"nombre": 'soyunacategorianueva',
  "descripcion": 'pruebas'})

  //const res1 = res.data[0];
  //console.log(res);
  expect(res.data).toBeDefined();
});


test('crear categorias rechazo cadena vacia ', async () => {

  const res = await axios.post('http://localhost:4000/categorias',
  {"nombre": '',
  "descripcion": 'pruebas'})

  //const res1 = res.data[0];
  ////console.log(res);
  expect(res.data).toBe('fracaso');
});

test('crear categorias rechazo cadena + 40 caracteres', async () => {

  const res = await axios.post('http://localhost:4000/categorias',
  {"nombre": 'soyunacadenademasde40caracterescreanmeporfavor',
  "descripcion": 'pruebas'})

  //const res1 = res.data[0];
  ////console.log(res);
  expect(res.data).toBe('fracaso');
});




test('crear productos rechazo cadena vacia', async () => {

  const res = await axios.post('http://localhost:4000/productos', {"categoria": 1,
   "nombre": '',
   "imagen": "Olis",
  "descripcion": 'pruebas',
   "descuentos": 0,
   "detalles" : "nanananan Batmaaaann",
   "precio" : 1000,
  "disponibilidad": true,
  "iva": 16})

  //const res1 = res.data[0];
  ////console.log(res);
  expect(res.data).not.toBe('fracaso');
});

test('crear productos rechazo cadena + 40 caracteres', async () => {

  const res = await axios.post('http://localhost:4000/productos', {"categoria": 1,
   "nombre": 'soyunacadenademasde40caracterescreanmeporfavor',
   "imagen": "Olis",
  "descripcion": 'pruebas',
   "descuentos": 0,
   "detalles" : "nanananan Batmaaaann",
   "precio" : 1000,
  "disponibilidad": true,
  "iva": 16})
  //const res1 = res.data[0];
  ////console.log(res);
  expect(res.data).toBe('fracaso');
});

test('crear Usuario rechazo cadena vacia', async () => {

  const res = await axios.post('http://localhost:4000/usuarios', {"nombre": '',
  "nombrec": 'pruebita',
  "correo": 'pruebita@gmail.com',
  "contraseña": 'pruebita123',
  "rol" : 'admin'});
  //const res1 = res.data[0];
  console.log(res);
  expect(res.data).toBe('fracaso');
});

test('crear Usuario rechazo cadena +40 caracteres', async () => {

  const res = await axios.post('http://localhost:4000/usuarios', {"nombre": 'soyunacadenademasde40caracterescreanmeporfavor',
  "nombrec": 'pruebita',
  "correo": 'pruebita@gmail.com',
  "contraseña": 'pruebita123',
  "rol" : 'admin'})
  //const res1 = res.data[0];
  console.log(res);
  expect(res.data).toBe('fracaso');
});
