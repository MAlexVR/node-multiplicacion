const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) =>
    console.log("Archivo".green, nombreArchivo.red, "creado".green)
  )
  .catch((err) => console.log(err));

// console.log(argv);
// console.log("base: yargs", argv.b);

// const [, , arg3 = "--base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// console.log(base);
