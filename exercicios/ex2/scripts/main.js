
//oegando DOM

const ano_nasc = document.getElementById('inasc')
const sexoM = document.getElementById('imas')
const sexoF = document.getElementById('ife')
const btr_identificar = document.getElementById('btn-iden')
const title = document.getElementById('text-info-idade')
const image_avata = document.getElementById('imagem-pessoa')

const teste = document.getElementsByName('sexo')

let sexo = 0

let date = new Date()
let idade



let avatar_patch

let juventudidade
//chega o sexo
check_sexo()

//funçionalidades

//precionar o botão
btr_identificar.addEventListener('click', identificar_function)


//logia 
function identificar_function()
{
    //valida os dados
    rodar = validaton_data()

    if (rodar)
    {
        idade = date.getFullYear() - ano_nasc.value
        title.innerHTML = `Você tem <strong>${idade}</strong> e é um <strong>${sexo}</strong>`

        //checando se é adulto, cruança etc..
        check_oldage()
        switch(juventudidade)
        {
            case 'criança':
                if (sexo == 'feminino')
                {
                    avatar_patch = 'img/Fcriança.jfif'
                }
                else
                {
                    avatar_patch = 'img/Mcrianca.jfif'
                }
                break
            case 'adolecente':
                if (sexo == 'feminino')
                {
                    avatar_patch = 'img/Fadolecente.jfif'
                }
                else{
                    avatar_patch = 'img/Madolecente.jfif'
                }
                break
            case 'adulto':
                if (sexo == 'feminino')
                {
                    avatar_patch = 'img/Fadulto.jfif'
                }
                else
                {
                    avatar_patch = 'img/Madulto.jfif'
                }
                break
            case 'idoso':
                if (sexo == 'femino')
                {
                    avatar_patch = 'img/Fidoso.jfif'
                }
                else
                {
                    avatar_patch = 'img/Midoso.jfif'
                }
                break   

        }

        change_image()
    }
    
}




//chaca a juventude
function check_oldage()
{
    //muda a imagem
    if (idade <= 12)
    {
        juventudidade = 'criança'
    }
    else if (idade > 11 && idade <= 18)
    {
        juventudidade = 'adolecente'
    }
    else if (idade >= 19 && idade <= 55)
    {
        juventudidade = 'adulto'
    }
    else if (idade > 55)
    {
        juventudidade = 'idoso'
    }

}

function validaton_data()
{
    //código que quando precionar o botãoi
    var ready = false
    //validação de dados
    if (ano_nasc.value.toString().length < 4  || ano_nasc.value == '')
    {

        alert('verifique os dados e tente novamente!')
        return ready

    }

    if (sexo == 0)
    {
        alert('verifique os dados e tente novamente!')
        return ready
    }

    ready = true
    return ready
}

function check_sexo()
{
    sexoF.addEventListener('click', () =>{
        sexo = 'feminino'
    })

    sexoM.addEventListener('click', () => {
        sexo = 'masculino'
    })
}

function change_image()
{
    image_avata.style.backgroundImage = `url(${avatar_patch})`
}