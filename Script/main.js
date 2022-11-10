

const ContenidoCarrito = document.getElementById("ContenidoCarrito");

const verCarrito = document.getElementById("verCarrito");

const VentanaCarrito = document.getElementById("VentanaCarrito");

let ContenidoVentanaCarrito
const cantidadCarrito = document.getElementById("cantidadCarrito");

const VentanaFinalizarCompra = document.getElementById("Finalizar-Compra")



const comprafinal = document.querySelector("#compra-Final")

//ARRAY DE PRODUCTOS//
const Productos = [{
    id: 1,
    nombre: "cactus Grusonii",
    precio: 2500,
    tipo: "Exterior",
    img: "Imagenes/Plantas Carrito/cactus Grusonii.jpg",
    cantidad: 1,
},

{   
    id: 2,
    nombre: "Calathea Thalia",
    precio: 1800,
    tipo:  "Interior",
    img:"Imagenes/Plantas Carrito/Calathea Thalia.jpg",
    cantidad: 1,
},

{   
    id: 3,
    nombre: "Lavanda",
    precio: 1800,
    tipo:  "Exterior",
    img:"Imagenes/Plantas Carrito/Lavanda.jpg",
    cantidad: 1,
},

{   
    id: 4,
    nombre: "Potus",
    precio: 1800,
    tipo:  "Interior",
    img:"Imagenes/Plantas Carrito/Potus.jpg",
    cantidad: 1,
},

{   
    id: 5,
    nombre: "Malvon Italiano",
    precio: 1800,
    tipo:  "Exterior",
    img:"Imagenes/Plantas Carrito/malvón italiano.jpeg",
    cantidad: 1,
},

{   
    id: 6,
    nombre: "Sansevieria Trifasciata",
    precio: 1800,
    tipo:  "Exterior",
    img:"Imagenes/Plantas Carrito/Sansevieria Trifasciata.jpg",
    cantidad: 1,
},
{   
    id: 7,
    nombre: "Maceta de Plastico",
    precio: 1800,
    tipo:  "Maceta",
    img:"Imagenes/Macetas/Maceta1.png",
    cantidad: 1,
},
{   
    id: 8,
    nombre: "Maceta de ceramica",
    precio: 1800,
    tipo:  "Maceta",
    img:"Imagenes/Macetas/images.jpg",
    cantidad: 1,
},

{   
    id: 9,
    nombre: "Maceta de Barro",
    precio: 1800,
    tipo:  "Maceta",
    img:"Imagenes/Macetas/Macetas Barro.jpg",
    cantidad: 1,
},

{   
    id: 10,
    nombre: "Maceta de Cemento",
    precio: 1800,
    tipo:  "Maceta",
    img:"Imagenes/Macetas/Maceta Cemento.jpg",
    cantidad: 1,
},

{   
    id: 11,
    nombre: "Maceta de Cemento",
    precio: 1800,
    tipo:  "Maceta",
    img:"Imagenes/Macetas/maceta cemento cuadrada.jpg",
    cantidad: 1,
},

{   
    id: 12,
    nombre: "Portamacetas Colgante",
    precio: 1800,
    tipo:  "Decoraciones",
    img:"Imagenes/Portamacetas y colgantes para macetas/Planta colgante 3.jpg",
    cantidad: 1,
},

{   
    id: 13,
    nombre: "Portamacetas Estante",
    precio: 7200,
    tipo:  "Decoraciones",
    img:"Imagenes/Portamacetas y colgantes para macetas/Portamacetas1.jpg",
    cantidad: 1,
},

{   
    id: 14,
    nombre: "Portamacetas Colgante",
    precio: 3200,
    tipo:  "Decoraciones",
    img:"Imagenes/Portamacetas y colgantes para macetas/original.jpg",
    cantidad: 1,
},

{   
    id: 15,
    nombre: "Cactus",
    precio: 3200,
    tipo:  "Exterior",
    img:"Imagenes/Plantas Carrito/cactus1.jpg",
    cantidad: 1,
},

{   
    id: 16,
    nombre: "Aloe Vera",
    precio: 2200,
    tipo:  "Exterior",
    img:"Imagenes/Plantas Carrito/Aloe Vera.jpg",
    cantidad: 1,
},
];


//GET ITEM PARA GUARDAR EN EL LOCAL STORAGE//
let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];


//RECORRO TODOS LOS PRODUCTOS Y LOS MUESTRO EN EL HTML DANDOLE CLASES PARA ESTILOS//
const mostrarProductos =()=>{
Productos.forEach((plantas) => {
    let content = document.createElement("div");
    content.className = "CartadeCompra";
     content.innerHTML = `
     <img src="${plantas.img}" class="ImagenProductos">
     <h3>${plantas.nombre}</h3>
     <p class="Precio">Precio:${plantas.precio}$</p>
     `;
//APPEND PARA INYECTAR TODO EL CONTENIDO//
     ContenidoCarrito.append(content);



//CREO UN BOTON PARA AGREGAR EL PRODUCTO//
     let botonComprar = document.createElement("button")
     botonComprar.innerText = "Agregar al Carrito";
     botonComprar.className = "AgregarAlCarritoBTN";
     
     
    

     content.append(botonComprar);
//ADD EVEN LISTENER PARA CUANDO HAGA CLICK ME "PUSHEE" TODOS LOS PRODUCTOS DEL ARRAY A UN ARRAY VACIO (CARRITO)//
   
     botonComprar.addEventListener("click" , () =>{
       
       Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Tu producto ha sido agregado',
        background:"#03D503",
        color:"#ffff",
        widht:"20px",
        timerProgressBar: true,
        toast:true,
        backdrop:false,
        
        showConfirmButton: false,
        timer: 1000
      })

    const productoRepetido = carrito.some((buscarProductoRepetido) => buscarProductoRepetido.id === plantas.id);
    if(productoRepetido){
        
        carrito.map((obj) =>{
            if (obj.id === plantas.id){
                obj.cantidad++;
            }
        });
    }else{

        carrito.push({
            id : plantas.id,
            nombre : plantas.nombre,
            precio : plantas.precio,
            img : plantas.img,
            tipo : plantas.tipo,
            cantidad : plantas.cantidad,
        });
        
    }
   
        console.log(carrito);
       
//FUNCION PARA GUARDAR EN EL LOCALSTORAGE//        
        saveLocal();
        contadorCarrito();
       
     });
   
}); 

}
mostrarProductos()








