

//CREO LA FUNCION DE MOSTRAR EL CARRITO  //
    const mostrarCarrito = () => {
    VentanaCarrito.innerHTML = "";
    VentanaCarrito.style.display = "flex";
    

//CREO EL HEADER DE LA VENTANA CARRITO
    const ventanaCarritoHeader = document.createElement("div");
    ventanaCarritoHeader.className = "ventanaCarritoHeader";
    ventanaCarritoHeader.innerHTML =`
    <h1 class="TituloVentanaCarrito"> Carrito🌻 </h1>

    `;

    VentanaCarrito.append(ventanaCarritoHeader);
//CREO EL BOTON "CERRAR"//
    const botonVentana = document.createElement("h1");
    botonVentana.innerText = "Cerrar";
    botonVentana.className = "ventanaCarritoBoton";

    botonVentana.addEventListener("click", () => {
        VentanaCarrito.style.display = "none";
    });

    ventanaCarritoHeader.append(botonVentana);
//RECORO DE NUEVO EL CARRITO PERO ESTA VEZ PARA MANDAR TODO DENTRO DE LA VENTANA CARRITO//
    carrito.forEach((plantas) => {
        ContenidoVentanaCarrito = document.createElement("div");
        ContenidoVentanaCarrito.className = "ventanaCarritoContenido"
        ContenidoVentanaCarrito.innerHTML = `
        <img src="${plantas.img}" class="ImagenProductosCarrito">
        <h3 class="nombrePlantasCarrito">${plantas.nombre}</h3>
        <span class="borrarProducto">Eliminar 🗑 </span>
        <p class="PrecioVentana">Precio:${plantas.precio}$</p>
        <input type="button" value="+" class="BotonSumar">
        <p class="nombreCantidad">Cantidad:${plantas.cantidad}</p>
        <input type="button" value="-" class="BotonRestar">
        <p class="nombreCantidad">Total: $${plantas.cantidad * plantas.precio}</p>
        
        `;

        VentanaCarrito.append(ContenidoVentanaCarrito);
//FUNCION PARA RESTAR PRODUCTOS//
        let restarProductos = ContenidoVentanaCarrito.querySelector(".BotonRestar");

        restarProductos.addEventListener("click",() => {
            if(plantas.cantidad !== 1){
            plantas.cantidad --;
            };
            saveLocal();
            mostrarCarrito();
        });
//FUNCION PARA SUMAR PRODUCTOS
        let sumarProductos = ContenidoVentanaCarrito.querySelector(".BotonSumar");
         
        sumarProductos.addEventListener("click", () => {
            plantas.cantidad ++;
            saveLocal();
            mostrarCarrito();
        });

        let botonEliminarProducto = ContenidoVentanaCarrito.querySelector(".borrarProducto")

        botonEliminarProducto.addEventListener("click", () => {
             eliminarProducto(plantas.id);
             
        });
       

    });
//USO EL METODO REDUCE PARA ACUMULAR EL PRECIO DE LOS PRDUCTOS Y TENER UN TOTAL//
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0 );
    
    const compraTotal = document.createElement("div")
    
    compraTotal.innerHTML = `<h2 class="compraTotalVentana">Precio Final: ${total}$</h2>
    
    `;
    
    
    VentanaCarrito.append(compraTotal);


    const botonFinalizarCompra = document.createElement("button")
    botonFinalizarCompra.innerText = "finalizar compra"
    botonFinalizarCompra.className = "botonFinalizar"
    VentanaCarrito.append(botonFinalizarCompra)


     botonFinalizarCompra.addEventListener("click",()=>{
      if(carrito.length === 0){
        Swal.fire({
            icon: 'error',
            
            text: 'Agregue productos a su carrito',
            
          })

      }else{
        Swal.fire({
            icon: 'success',
            
            text: 'Gracias por comprar en nuestra tienda online!',
            
          })
      }
      
})

};



verCarrito.addEventListener("click", mostrarCarrito);

//FUNCION PARA ELIMINAR PRODUCTOS
const eliminarProducto = (id) =>{
    Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'Tu producto ha sido eliminado',
        background:"#C80404",
        showConfirmButton: false,
        backdrop:false,
        color:"#ffff",
        timerProgressBar: true,
        toast:true,
        timer: 900
      })
    const buscarId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId
    });
    contadorCarrito();
    saveLocal();
    mostrarCarrito();
};
//FUNCION DEL LOCAL STORAGE//
const saveLocal = () => {
    localStorage.setItem("Carrito", JSON.stringify(carrito));

};

//FUNCION PARA EL CONTADOR DEL CARRITO
const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";

    const carritoLocalS = carrito.length;
    localStorage.setItem("carritoLocalS" , JSON.stringify(carritoLocalS));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLocalS"));
};



contadorCarrito();

