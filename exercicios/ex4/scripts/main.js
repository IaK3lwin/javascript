
function contar()
{
    //variavbeos
    //vaor do inicio
    let inicio = Number.parseInt(document.getElementById('inicio-num').value)
    //valor de onde até a contagem termina
    let fim = Number.parseInt(document.getElementById('fim-num').value)
    //quantos passos de contagem
    let passo =Number.parseInt(document.getElementById('passos').value) 

    //ara de entrada
    let res = document.getElementById('res')

    //armazena a contagem
    let cont = inicio
    //caso a contagem começe com 0

    //validação dos dados
    let validation = validation_date(inicio, passo, fim)

    //inicia a coantagem com 1
    res.innerHTML = `   &#X1F3C1;  ${inicio} &#x1F449; `

    if (validation) {
        //percorre toda a distancia entre o inicio e o fim
        for (let start = inicio; start <= fim - 1; start += passo)
        {
            //cointando de acordo com os passos
            //mostra os passos 
            res.innerHTML += (`${start} &#x1F449;`)
        }
        //quando acabara contagem 
        res.innerHTML += "&#x1F6A9; FIM"
    } else {
        res.innerHTMl = "<h1>Digite as informações corretamentes para que a contagem dê certo!</h1>"
        window.alert('[ERROR] : verifique os dados e tente novamente')
    }

    
}



function validation_date(inicio, passos, fim)
{
    if (passos < 0 || passos == 0)
    {
        return false
    }
    else if (fim < inicio || inicio == fim) 
    {
        return false
    }
    return true
}
/*
////////////// ALGORITMO BASE /////////////////////

//variavbeos
let inicio = 1
let fim = 10
let passo = 1
let cont = 1
//inicia a coantagem com 1
console.log(` 🏁 ${inicio} -> `)
//percorre toda a distancia entre o inicio e o fim
for (let start = inicio; start <= fim - 1; start++)
{
    //cointando de acordo com os passos
    cont += passo
    //mostra os passos 
    console.log(`${cont} ->`)
}
//quando acabara contagem 
console.log(` 🚩 Fim   `)




*/