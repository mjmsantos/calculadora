function somar() {
    var campo1 = document.getElementById('valor1')
    var campo2 = document.getElementById('valor2')
    var valor1 = parseInt(campo1.value)
    var valor2 = parseInt(campo2.value)
    var resultado = document.getElementById('resultado')

    if (campo1.value == "" || campo2.value == "") {
        alert("Os valores são obrigatorios")
        campo1.focus()
    } else {
        resultado.innerHTML = parseFloat(valor1 + valor2).toFixed(3)
        document.getElementById('multiplica').disabled = true
        document.getElementById('dividi').disabled = true
        document.getElementById('subtrai').disabled = true
    }
}

function dividir() {
    var campo1 = document.getElementById('valor1')
    var campo2 = document.getElementById('valor2')
    var valor1 = parseInt(campo1.value)
    var valor2 = parseInt(campo2.value)
    var resultado = document.getElementById('resultado')

    if (campo1.value == "" || campo2.value == "") {
        alert("Os valores são obrigatorios")
        campo1.focus()
    } else {
        resultado.innerHTML = parseFloat(valor1 / valor2).toFixed(2)
        document.getElementById('soma').disabled = true
        document.getElementById('multiplica').disabled = true
        document.getElementById('subtrai').disabled = true
    }
}

function multiplicar() {
    var campo1 = document.getElementById('valor1')
    var campo2 = document.getElementById('valor2')
    var valor1 = parseInt(campo1.value)
    var valor2 = parseInt(campo2.value)
    var resultado = document.getElementById('resultado')

    if (campo1.value == "" || campo2.value == "") {
        alert("Os valores são obrigatorios")
        campo1.focus()
    } else {
        resultado.innerHTML = parseFloat(valor1 * valor2).toFixed(2)
        document.getElementById('soma').disabled = true
        document.getElementById('dividi').disabled = true
        document.getElementById('subtrai').disabled = true
    }
}

function subtrair() {
    var campo1 = document.getElementById('valor1')
    var campo2 = document.getElementById('valor2')
    var valor1 = parseInt(campo1.value)
    var valor2 = parseInt(campo2.value)
    var resultado = document.getElementById('resultado')

    if (campo1.value == "" || campo2.value == "") {
        alert("Os valores são obrigatorios")
        campo1.focus()
    } else {
        resultado.innerHTML = parseFloat(valor1 - valor2).toFixed(2)
        document.getElementById('multiplica').disabled = true
        document.getElementById('dividi').disabled = true
        document.getElementById('soma').disabled = true
    }
}