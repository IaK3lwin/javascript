agora = new Date()

diaSem = agora.getDay()

/*

0 - Domingo
1 -segunda
2 - terça
3 - guarta
4 - quinta
5 - sexta
6 - sabado

*/
//diaSem = 7

switch (diaSem)
{
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
    default:
        console.log('[ERROR] dia inválido')
        break
}