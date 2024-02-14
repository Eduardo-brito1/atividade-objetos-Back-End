const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const [...todos] = usuarios


for (let i = 0; i < todos.length; i++) {
    if (todos[i].pets.length <= 0) {
        console.log(`meu nome e ${todos[i].nome} e não tenho nenhum pet`)
    } else if (todos[i].pets.length <= 1) {
        console.log(`meu nome e ${todos[i].nome} e  tenho um ${todos[i].pets.length} pet`)
    } else {
        console.log(`meu nome e ${todos[i].nome} e  tenho  ${todos[i].pets.length} pets`)

    }
}