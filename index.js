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
  console.log(`INFO: ${mensaje}`)
}

export const warn = (mensaje) => {
  console.warn(`WARN: ${mensaje}`)
}

export const error = (mensaje) => {
  console.error(`ERROR: ${mensaje}`)
}

export const debug = (mensaje) => {
  console.debug(`DEBUG: ${mensaje}`)
}
