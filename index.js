// Desarrolla un módulo propio en Node.js que permita mostrar
// mensajes por consola utilizando diferentes niveles de registro
// (logging).
// INFO: mensajes informativos.
// WARN: mensajes de advertencia.
// ERROR: mensajes de error.
// DEBUG: mensajes de depuración.
// El módulo deberá proporcionar una función para cada nivel de
// registro. Cada función recibirá un mensaje como parámetro y lo
// mostrará por consola indicando el nivel correspondiente.

export const info = (mensaje) => {
  console.log(chalk.blue(`INFO: ${mensaje}`))
}

export const warn = (mensaje) => {
  console.warn(chalk.yellow(`WARN: ${mensaje}`))
}

export const error = (mensaje) => {
  console.error(chalk.red(`ERROR: ${mensaje}`))
}

export const debug = (mensaje) => {
  console.debug(chalk.green(`DEBUG: ${mensaje}`))
}

const date = () => {
  return new Date().toLocaleString('es-ES')
}

console.log(`INFO: ${date()}`)
