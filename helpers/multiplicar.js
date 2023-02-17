const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 0, listar = false, hasta = 1) => {
  try {
    let salida = "";
    let nombreArchivo = `tabla-${base}.txt`;

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("==================".yellow);
      console.log(`== Tabla del: ${base} ==`.yellow);
      console.log("==================".yellow);
      console.log(salida.blue);
    }

    fs.writeFileSync(`./salida/${nombreArchivo}`, salida);

    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
