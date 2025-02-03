
//variáveis

const color_background_morning = 'linear-gradient(120deg, #abcbef, #f3b870)'
const color_background_aftnermoon = 'linear-gradient(120deg, #abcbef 68%,rgb(214, 139, 48))'
const color_background_evening = 'linear-gradient(120deg, #708ef3,rgb(17, 40, 116)  68%)'

const image_clock_morning = "url(img/morning.jpg)"
const image_clock_afternoon = 'url(img/avermoon.jpg)'
const image_clock_evening = 'url("img/evening.jpg")'

let agora = new Date()

let hours = agora.getHours()

const body = document.getElementsByTagName('body')[0]

const text_hours = document.querySelector('#container-clock>h2')

let element_clock = document.querySelector('div#clock')


text_hours.innerHTML = `Agora são <strong> ${hours} horas </strong>`

document.querySelector('h1').style.color = 'black'
document.querySelector('p').style.color = 'black'

if (hours >= 6 && hours < 12)
{
    //manhã
    body.style.backgroundImage = color_background_morning
    

    //mudar imagem de fundo
    element_clock.style.background = image_clock_morning
    
}
else if (hours >= 12 && hours < 18)
{
    //de tarde
    body.style.background = color_background_aftnermoon
    body.style.backgroundPosition = 'bottom center'
    element_clock.style.background = image_clock_afternoon

}
else if (hours >= 18 && hours <= 1)
{
    //noite
    body.style.backgroundImage = color_background_evening
    //mudar imagem de fundo
    element_clock.style.background = image_clock_evening
}


function chance_proprity(element, proprity, value)
{
    element.style.proprity = value
    document.querySelector('h1').style.color = 'white'
document.querySelector('p').style.color = 'white'
}