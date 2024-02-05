const http = require('http')

http.createServer((req, res)=>{
   //mostra hola mundo en el navegador
   
   res.write("hola mundo loco")

  res.end();
   
})
.listen(8080)

console.log('escuchando el puerto 8080');