function objetoConClousure() {
  let valor = 0

  const obj = {
    incremento: function() {
      valor++
    },
    incrementoPor10: function() {
      valor += 10
    },
    pedirValor: function() {
      return valor
    },
    cambiarValor: function(nuevoValor) {
      valor = nuevoValor
    }
  };

  return obj;
}

function ListaDeFuncionesInvitados (arr, cod) {
  const arrFunciones = []

  for (let nombre of arr) {
    arrFunciones.push(function (intentoCod) {
      if (intentoCod == cod) {
        return nombre;
      }
      return 'código secreto: invalido'
    })
  }

  return arrFunciones
}
