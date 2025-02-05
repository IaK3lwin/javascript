
//DOM

let init = false
let btn_check = 0

function contar()
{
    
    alert(btn_check)
    let inicio = document.getElementById('inicio-num')
    let fim = document.getElementById('fim-num')
    let passos = document.getElementById('passos')
    let res = document.getElementById('res')
    let button = document.querySelector('button#btn')

    if (init == false)
    {
        res.innerHTML = "&#x1F3C1; "
        init = true
        alert("inicou")
        btn_check++
        alert(btn_check)
    }

    let contando
    //console.log(inicio.value, fim.value)
    if (passos.value == 1)
    {
        contando = Number.parseInt(inicio.value - 1)
    }
    else
    {
        contando = Number.parseInt(inicio.value)
    }
    console.log('contando....')
    for (let start = inicio.value; start <= fim.value; start++)
    {
        if (btn_check == 1)
        {
            res.innerHTML = "&#x1F3C1; "
        }
        
        contando += Number.parseInt(passos.value)
        console.log(`contando: ${contando}`)
        //console.log(start)
        res.innerHTML += ` &#x1F449; ${contando} `
           
    }
    res.innerHTML += '&#x1F6A9; FIM!'

}

