const usuarios = [
    {
        nome: "João",
        idade: 25,
        maior_idade: ''
    },
    {
        nome: "Ana",
        idade: 18,
        maior_idade: ''
    },
    {
        nome: "Beatriz",
        idade: 15,
        maior_idade: ''
    },
    {
        nome: "Carlos",
        idade: 16,
        maior_idade: ''
    },
    {
        nome: "Antonio",
        idade: 32,
        maior_idade: ''
    },
]




for (let idade_usuarios of usuarios) {
    if (idade_usuarios.idade < 18) {
        idade_usuarios.maior_idade = false
    } else {
        idade_usuarios.maior_idade = true
    }
}


console.log(usuarios)