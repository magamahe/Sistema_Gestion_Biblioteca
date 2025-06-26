const libros = [
    {
        id: 1,
        título: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        género: "Realismo mágico",
        disponible: true
    },
    {
        id: 2,
        título: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        año: 1605,
        género: "Novela de caballerías",
        disponible: true
    },
    {
        id: 3,
        título: "1984",
        autor: "George Orwell",
        año: 1949,
        género: "Ciencia ficción distópica",
        disponible: false
    },
    {
        id: 4,
        título: "El Señor de los Anillos",
        autor: "J.R.R. Tolkien",
        año: 1954,
        género: "Fantasía épica",
        disponible: true
    },
    {
        id: 5,
        título: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        año: 1997,
        género: "Fantasía",
        disponible: true
    },
    {
        id: 6,
        título: "Matar a un ruiseñor",
        autor: "Harper Lee",
        año: 1960,
        género: "Novela",
        disponible: false
    },
    {
        id: 7,
        título: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        año: 1925,
        género: "Novela",
        disponible: true
    },
    {
        id: 8,
        título: "Orgullo y prejuicio",
        autor: "Jane Austen",
        año: 1813,
        género: "Romance",
        disponible: true
    },
    {
        id: 9,
        título: "El hobbit",
        autor: "J.R.R. Tolkien",
        año: 1937,
        género: "Fantasía",
        disponible: true
    },
    {
        id: 10,
        título: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        año: 1981,
        género: "Novela",
        disponible: false
    },
    {
        id: 11,
        título: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        año: 2001,
        género: "Misterio",
        disponible: true
    }
];

//exportación con CommonJS - versión por defecto de js
if (require.main === module) {
    libros
}

module.exports = libros;
