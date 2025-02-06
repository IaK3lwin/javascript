

function tabuada()
{
    //dom
    let num = document.getElementById('num').value
    

    if (num == "")
    {
        alert('Por favor insira um valor!')
    }
    else
    {
        num = Number.parseInt(num)
        let conta
        let tabuada = document.getElementById('tabuada')
        let options = tabuada.getElementsByTagName('option')
   
        
        tabuada.innerHTML = ''

        document.getElementById('dica').style.display = 'none'
        

        for (let start = 1; start <= 10; start++)
        {
            conta = ` ${num} x ${start} == ${num * start} `
            var option = document.createElement('option')
            option.innerText = conta 
            tabuada.appendChild(option)
            
        }

        console.log(tabuada.getElementsByTagName('option').length)
    }
}


/*

////////////    ALGORITMO BASE   /////////////////////

let num = 2

if (true)
{
    for (let start = 0; start <= 10; start++)
    {
        console.log(` ${num} x ${start} == ${num * start} `)
    }
}


*/