// PRODUCTOS
const productos = [
    // Zapatillas
    {
        id: "zapato-01",
        titulo: "Zapatillas Versacce Blancas",
        imagen: "./img/zapatos/zapato1.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
    },
    {
        id: "zapato-02",
        titulo: "Zapatillas Calvin Klein Negras",
        imagen: "./img/zapatos/zapato2.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-03",
        titulo: "Zapatillas Gucci Blancas",
        imagen: "./img/zapatos/zapato3.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-04",
        titulo: "Zapatillas Versacce Negras",
        imagen: "./img/zapatos/zapato4.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-05",
        titulo: "Zapatillas Lecoq",
        imagen: "./img/zapatos/zapato5.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-06",
        titulo: "Zapatillas Casuales Negras",
        imagen: "./img/zapatos/zapato6.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-07",
        titulo: "Zapatillas Lacoste Blancas",
        imagen: "./img/zapatos/zapato7.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-08",
        titulo: "Zapatillas Dolce Gabbana Negros",
        imagen: "./img/zapatos/zapato8.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-09",
        titulo: "Zapatillas Nike grises",
        imagen: "./img/zapatos/zapato9.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-10",
        titulo: "Zapatillas Lacoste Negras",
        imagen: "./img/zapatos/zapato10.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-11",
        titulo: "Zapatillas Casuales Negras",
        imagen: "./img/zapatos/zapato11.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-12",
        titulo: "Zapatillas Deportivas Negras",
        imagen: "./img/zapatos/zapato12.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-13",
        titulo: "Zapatillas Philiff Flein",
        imagen: "./img/zapatos/zapato13.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-14",
        titulo: "Zapatillas Gucci Negras",
        imagen: "./img/zapatos/zapato14.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-15",
        titulo: "Zapatillas botin botton",
        imagen: "./img/zapatos/zapato15.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    {
        id: "zapato-16",
        titulo: "Zapatillas Versacce Negras",
        imagen: "./img/zapatos/zapato16.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "Zapatillas"
        },
        precio: 1000
    },
    // Sandalias
    {
        id: "sandalia-01",
        titulo: "Sandalia 01",
        imagen: "./img/sandalias/sandalia1.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-02",
        titulo: "Sandalia 02",
        imagen: "./img/sandalias/sandalia2.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-03",
        titulo: "Sandalia 03",
        imagen: "./img/sandalias/sandalia3.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-04",
        titulo: "Sandalia 04",
        imagen: "./img/sandalias/sandalia4.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-05",
        titulo: "Sandalia 05",
        imagen: "./img/sandalias/sandalia5.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-06",
        titulo: "Sandalia 06",
        imagen: "./img/sandalias/sandalia6.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-07",
        titulo: "Sandalia 07",
        imagen: "./img/sandalias/sandalia7.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-08",
        titulo: "Sandalia 08",
        imagen: "./img/sandalias/sandalia8.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    // Relojes
    {
        id: "reloj-01",
        titulo: "Estilo 01",
        imagen: "./img/relojes/reloj1.jpeg",
        categoria: {
            nombre: "Relojes",
            id: "relojes"
        },
        precio: 1000
    },
    {
        id: "reloj-02",
        titulo: "Estilo 02",
        imagen: "./img/relojes/reloj2.jpeg",
        categoria: {
            nombre: "Relojes",
            id: "relojes"
        },
        precio: 1000
    },
    {
        id: "reloj-03",
        titulo: "Estilo 03",
        imagen: "./img/relojes/reloj3.jpeg",
        categoria: {
            nombre: "Relojes",
            id: "relojes"
        },
        precio: 1000
    },
    {
        id: "reloj-04",
        titulo: "Estilo 04",
        imagen: "./img/relojes/reloj4.jpeg",
        categoria: {
            nombre: "Relojes",
            id: "relojes"
        },
        precio: 1000
    },
    {
        id: "reloj-05",
        titulo: "Estilo 05",
        imagen: "./img/relojes/reloj5.jpeg",
        categoria: {
            nombre: "Relojes",
            id: "relojes"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector(".titulo-principal")



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML= "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        `
        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)            
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;           
        
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
   })

})


