let num = [4, 5, 6, 7, 8, {'key' : 5}, 9]


/*
for (let pos = 0; pos < num.length; pos++)
{
    console.log(` no array ${num} na posição ${pos} está o elemento ${num[pos]}  `)
}
    */

for (let pos in num)
{
    console.log(` no array ${num} na posição ${pos} está o elemento ${num[pos]}  `)
}