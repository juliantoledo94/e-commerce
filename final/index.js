

let producto_1;
let producto_2;
let producto_3;
let producto_4;
let producto_5;
let producto_6;



class Producto{
    #id;
    #nombre;
    #descripcion;
    #precio;
    #imagen;
    #categoria;
    #cantidad;
    

        constructor(id, nombre,descripcion,precio,imagen,categoria,cantidad){
            this.#id =id;
            this.#nombre = nombre;
            this.#descripcion = descripcion;
            this.#precio = precio;
            this.#imagen = imagen;
            this.#categoria = categoria;
            this.#cantidad =cantidad;
        }

        set setId(id){
            this.#id =id;
        }

        set setNombre(nombre){
            this.#nombre = nombre;
        }

        set setDescripcion(descripcion){
            this.#descripcion = descripcion;
        }

        set setPrecio(precio){
            this.#precio = precio;
        }

        set setImagen(imagen){
            this.#imagen= imagen;
        }

        set setCategoria(categoria){
            this.#categoria = categoria;
        }

        set setCantidad(cantidad){
            this.#cantidad = cantidad;
        }

        get getId(){
            return this.#id;
        }

        get getNombre(){
            return this.#nombre;
        }

        get getDescripcion(){
            return this.#descripcion;
        }

        get getPrecio(){
            return this.#precio;
        }

        get getImagen(){
            return this.#imagen;
        }

        get getCategoria(){
            return this.#categoria;
        }

        get getCantidad(){
            return this.#cantidad;
        }

        crearHTML(){
            // esta funcion por cada producto que tenga en el array me arma un div y me lo devuelve.
           
        }

        toJSON(){

            return {
            "getId" : this.#id,
            "getNombre" : this.#nombre,
            "getDescripcion" : this.#descripcion,
            "getPrecio" : this.#precio,
            "getImagen" : this.#imagen,
            "getCategoria" : this.#categoria,
            "getCantidad" : this.#cantidad

            }
            

        }
}


producto_1= new Producto(1,"Iphone 13","Nuestro sistema de dos cámaras más avanzado y un chip superrápido que deja atrás a la competencia.",529.991,"imagenes/iphone13.png",["Iphone","todas"],1);
producto_2= new Producto(2,"Iphone 13 pro","Un sistema de cámaras mucho más poderoso. Una pantalla con respuesta inmediata en cada interacción. El chip de smartphone más rápido del mundo. Un diseño increíblemente resistente. Y un gran salto en duración de batería.",659.989,"imagenes/iPhone_13_Pro.png",["Iphone","todas"],1);
producto_3= new Producto(3,"AirPods (3ra Generación)","Nuevo diseño con audio espacial para un sonido envolvente y ecualización adaptativa que ajusta la música a tus oídos.",53.999,"imagenes/airpods.jpg",["Audio","todas"],1);
producto_4= new Producto(4,"AirPods Max","Presentamos los AirPods Max. El equilibrio perfecto entre un audio de alta fidelidad increíble y la mágica facilidad de uso de los AirPods. Tus próximos audífonos ya están aquí para brindarte una experiencia de audio inigualable.",184.799,"imagenes/Airpods_Max.jpg",["Audio","todas"],1);
producto_5= new Producto(5,"iPad Air 10.9″ Wi-Fi (5ta Generación)","El iPad es versátil y está listo para todo. Es una forma divertida y poderosa de trabajar, estudiar, jugar y hacer lo que te imagines.",219.999,"imagenes/iPad_Air.jpg",["iPad","todas"],1)
producto_6= new Producto(6,"iPad mini Wi-Fi","Por qué el iPad. Hace de todo. Y un poco más.El iPad es versátil y está listo para todo. Es una forma divertida y poderosa de trabajar, estudiar, jugar y hacer lo que te imagines. Estas son algunas de las miles de cosas que puedes hacer con él.",519.999,"imagenes/iPad_mini.jpg",["iPad","todas"],1);


let productos = [producto_1,producto_2,producto_3,producto_4,producto_5,producto_6];


let carrito = [];

document.addEventListener("DOMContentLoaded",()=>{
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    mostrarCarrito();
});

const carritoContenedor = document.querySelector("#contador_carrito");


const vaciarCarrito = document.querySelector("#vaciar_carrito");

const precioTotal = document.querySelector("#precioTotal");

const continuar_compra = document.querySelector("#continuar_compra");

const total_proceso = document.querySelector("#totalProceso");

const lista_compra = document.querySelector("#lista-compra");

const total = document.querySelector("#total");

const form = document.querySelector("#form"); // lo selecciono para crear el formulario con dom

const finalizar_compra = document.querySelector("#finalizar_compra");

const formulario = document.querySelector("#form_compra") // es el section que contienen todo el formulario

const banner = document.querySelector("#banner");


let sec_compra = document.querySelector("#form");

let principal=document.querySelector("#productos");

let divG = document.createElement("div");
divG.classList.add("card-group");
principal.appendChild(divG);



formulario.addEventListener("submit",enviarPedido);


productos.forEach((producto)=>{

// hasta aca va original
    let div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("style","width: 18rem;");
    divG.appendChild(div); 

    let imagen = document.createElement("img");
    imagen.classList.add("card-img-top")
    imagen.src= producto.getImagen;
    div.appendChild(imagen);

    let div2= document.createElement("div");
    div2.classList.add("card-body");
    div.appendChild(div2);

    let h5= document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerText = producto.getNombre;
    div2.appendChild(h5);

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.innerText = producto.getDescripcion;
    div2.appendChild(p);

    let ul= document.createElement("ul");
    ul.classList.add("list-group","list-group-flush");
            

    let li= document.createElement("li");
    li.classList.add("list-group-item")
    li.innerText ="Precio: " + producto.getPrecio;
    ul.appendChild(li);

    let li2= document.createElement("li");
    li2.classList.add("list-group-item");

    li2.innerText =producto.getId;
    ul.appendChild(li2);

    let li3= document.createElement("li");
    li3.classList.add("list-group-item")
    li3.innerText ="Categoria: " + producto.getCategoria[0];
    ul.appendChild(li3);

    div.appendChild(ul);



    let btn = document.createElement("button");

    btn.classList.add("btn", "btn-primary");
    btn.innerText = "Agregar al carrito";
    btn.setAttribute("name","boton");



    div.appendChild(btn);

    btn.addEventListener("click",()=>{
        
        agregarProducto(producto.getId);

        

    });

});

// Cuando le damos al boton de continuar compra nos crea la estructrura y nos envia los objetos del carrito
continuar_compra.addEventListener("click", () =>{

    if(carrito.length == 0){
        alert("carrito esta vacio")
    }
    else{
        window.location.href="#form_compra";
        
        estructura_pedido();
        procesarPedido();

       
    }

});

vaciarCarrito.addEventListener("click",()=>{

    carrito.length =[];
    mostrarCarrito();

});

function agregarProducto(id){

    carrito = JSON.parse(localStorage.getItem("carrito"));

    let existe = carrito.some(producto => producto.getId === id);

    if(existe){
        let producto = carrito.map(producto =>{
            if(producto.getId == id){
                producto.getCantidad++
                console.log(producto.getId,producto.getCantidad);
            };
        });
    }else{
        let item = productos.find((producto)=> producto.getId == id);
        carrito.push(item);
        guardarStorage()
        
    };
    mostrarCarrito();
    
    

};


function mostrarCarrito() {
    const modalBody = document.querySelector(".modal  .modal-body");

    modalBody.innerHTML ="";
    
    carrito.forEach((producto)=>{
        
        //Creo un div contenedor para contener div -> imagen y el div -> contenido

        let div_contenedor = document.createElement("div");
        div_contenedor.classList.add("modal-contenedor");

        //Creo un div que contenga la imgagen y lo appendeo al div contenedor
        let div_img = document.createElement("div");
        div_contenedor.appendChild(div_img)

        let img = document.createElement("img");
        img.classList.add("img-fluid","img-carrito");
        img.src = producto.getImagen;
        div_img.appendChild(img);


        //Creo un div que contenga el contenido y lo appendeo al div contenedor

        let div_contenido = document.createElement("div");
        div_contenedor.appendChild(div_contenido);

        let nombre = document.createElement("P");
        nombre.innerText =`producto: ${producto.getNombre}`;
        div_contenido.appendChild(nombre);

        let precio = document.createElement("p");
        precio.innerText = `precio: ${producto.getPrecio}`;
        div_contenido.appendChild(precio);

        let cantidad = document.createElement("p");
        cantidad.innerText = `cantidad: ${producto.getCantidad}`;
        div_contenido.appendChild(cantidad);

        let btn = document.createElement("button");
        btn.classList.add("btn","btn-danger");
        btn.innerText ="Eliminar producto";
        div_contenido.appendChild(btn);

        btn.addEventListener("click",()=>{

            eliminarProducto(producto.getId);

        });

        modalBody.appendChild(div_contenedor);
    })

    //Con el If  estamos verificando si hay algo o no dentro del carrito

    if(carrito.length == 0){ 
        
        let noHay = document.createElement("p");
        noHay.classList.add("text-center","text-primary","parrafo");
        noHay.innerText = "¡Aun no agregaste nada!";
        modalBody.appendChild(noHay);

    }
    


    carritoContenedor.textContent = carrito.length;

    precioTotal.innerText = carrito.reduce((acc,producto) => acc+producto.getCantidad * producto.getPrecio, 0);

    guardarStorage();
}


function eliminarProducto(id){

   const productoId = id;

   /*Nos traemos todos los productos menos al que sea distinto al juego id */
   carrito = carrito.filter((producto)=> producto.getId != productoId);

  
    /*Como mostrar carrito es que esta pintando dentro del carrito siempre hay que llamarlo para que nos muestre los cambios, en este caso cuando lo llamamos nos elimina el item del carrito */
   mostrarCarrito();

}


function guardarStorage(){
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function procesarPedido(){

    carrito = JSON.parse(localStorage.getItem("carrito"))

    carrito.forEach((producto) =>{

        let listaCompra = document.querySelector("#lista-compra tbody");

        let row = document.createElement("tr");

        let td = document.createElement("td");
        row.appendChild(td);
        
        let img = document.createElement("img");
        img.classList.add("img-fluid","img-carrito")
        img.src = producto.getImagen;
        td.appendChild(img);

        let nombre = document.createElement("td");
        nombre.innerText = producto.getNombre;
        row.appendChild(nombre);

        let precio = document.createElement("td");
        precio.innerText = producto.getPrecio;
        row.appendChild(precio);

        let cantidad = document.createElement("td");
        cantidad.innerText = producto.getCantidad;
        row.appendChild(cantidad);

        let subTotal = document.createElement("td");
        subTotal.innerText= producto.getPrecio * producto.getCantidad;
        row.appendChild(subTotal);

        listaCompra.appendChild(row);

        
    });

    

    total_proceso.innerText = carrito.reduce((acc,producto) => acc+producto.getCantidad * producto.getPrecio, 0);

   
 
}

function estructura_pedido(){

    crearFormulario();
    
    let thead = document.createElement("thead");
    lista_compra.appendChild(thead);

    let tr = document.createElement("tr");
    thead.appendChild(tr);

    imagen = document.createElement("th");
    imagen.setAttribute("scope","col");
    imagen.innerText = "Imagen";
    tr.appendChild(imagen);

    nombre = document.createElement("th");
    nombre.setAttribute("scope","col");
    nombre.innerText="Nombre";
    tr.appendChild(nombre);

    precio = document.createElement("th");
    precio.setAttribute("scope","col");
    precio.innerText="Precio";
    tr.appendChild(precio);

    cantidad = document.createElement("th");
    cantidad.setAttribute("scope","col");
    cantidad.innerText="Cantidad";
    tr.appendChild(cantidad);

    subTotal = document.createElement("th");
    subTotal.setAttribute("scope","col");
    subTotal.innerText="Sub Total";
    tr.appendChild(subTotal);

    

}


function crearFormulario(){

    /*(nombre, teléfono, email, lugar y fecha de entrega) y del pago (método de pago, cuotas –si corresponde–). */

    //Nombre del cliente
    let div1 = document.createElement("div");
    div1.classList.add("form-group","row");
    form.appendChild(div1);

    let label1=document.createElement("label");
    label1.setAttribute("for","cliente");
    label1.classList.add("col-2","col-md-2","col-form-label","h2");
    label1.innerText = "Cliente: "
    div1.appendChild(label1);

    let div1_interno = document.createElement("div");
    div1_interno.classList.add("col-12","col-md-10");
    div1.appendChild(div1_interno);

    let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.classList.add("form-control");
    input1.setAttribute("id","cliente");
    input1.setAttribute("placeholder","ingresa nombre cliente");
    input1.setAttribute("name","persona");
    div1_interno.appendChild(input1);


    //teléfono
 
    let div2 = document.createElement("div");
    div2.classList.add("form-group","row");
    form.appendChild(div2);

    let label2=document.createElement("label");
    label2.setAttribute("for","telefono");
    label2.classList.add("col-2","col-md-2","col-form-label","h2");
    label2.innerText = "Telefono: ";
    div2.appendChild(label2);

    let div2_interno = document.createElement("div");
    div2_interno.classList.add("col-12","col-md-10");
    div2.appendChild(div2_interno);

    let input2 = document.createElement("input");
    input2.setAttribute("type","number");
    input2.classList.add("form-control");
    input2.setAttribute("id","telefono");
    input2.setAttribute("placeholder","ingresa número de teléfono");
    input2.setAttribute("name","telefono");
    div2_interno.appendChild(input2);


    //email

    let div3 = document.createElement("div");
    div3.classList.add("form-group","row");
    form.appendChild(div3);

    let label3=document.createElement("label");
    label3.setAttribute("for","email");
    label3.classList.add("col-2","col-md-2","col-form-label","h2");
    label3.innerText = "Email: ";
    div3.appendChild(label3);

    let div3_interno = document.createElement("div");
    div3_interno.classList.add("col-12","col-md-10");
    div3.appendChild(div3_interno);

    let input3 = document.createElement("input");
    input3.setAttribute("type","email");
    input3.classList.add("form-control");
    input3.setAttribute("id","email");
    input3.setAttribute("placeholder","ingresa email");
    input3.setAttribute("name","email");
    div3_interno.appendChild(input3);

    //lugar

    let div4 = document.createElement("div");
    div4.classList.add("form-group","row");
    form.appendChild(div4);

    let label4=document.createElement("label");
    label4.setAttribute("for","lugar");
    label4.classList.add("col-2","col-md-2","col-form-label","h2");
    label4.innerText = "Direccion: ";
    div4.appendChild(label4);
    
    let div4_interno = document.createElement("div");
    div4_interno.classList.add("col-12","col-md-10");
    div4.appendChild(div4_interno);

    let input4 = document.createElement("input");
    input4.setAttribute("type","text");
    input4.classList.add("form-control");
    input4.setAttribute("id","lugar");
    input4.setAttribute("placeholder","ingresa dirección");
    input4.setAttribute("name","lugar");
    div4_interno.appendChild(input4);

    //fecha de entrega

    let div5 = document.createElement("div");
    div5.classList.add("form-group","row");
    form.appendChild(div5);

    let label5=document.createElement("label");
    label5.setAttribute("for","fecha");
    label5.classList.add("col-2","col-md-2","col-form-label","h2");
    label5.innerText = "Fecha: ";
    div5.appendChild(label5);

    let div5_interno = document.createElement("div");
    div5_interno.classList.add("col-12","col-md-10");
    div5.appendChild(div5_interno);

    let input5 = document.createElement("input");
    input5.setAttribute("type","date");
    input5.classList.add("form-control");
    input5.setAttribute("id","fecha");
    input5.setAttribute("placeholder","ingresa fecha");
    input5.setAttribute("name","fecha");
    div5_interno.appendChild(input5);

    //Forma de pago

    let label6=document.createElement("label");
    label6.setAttribute("for","pago");
    label6.classList.add("col-2","col-md-2","col-form-label","h2");
    label6.innerText = "forma de pago: ";
    form.appendChild(label6);
    
    let select1 = document.createElement("select");
    select1.classList.add("col-2","col-md-2","col-form-label","h2");
    select1.setAttribute("aria-label",".form-select-lg example");
    select1.setAttribute("id","select1");
    form.appendChild(select1);
   
    let option_selected1 = document.createElement("option");
    option_selected1.setAttribute("boolean","selected")
    option_selected1.innerText= "Elija forma de pago"
    select1.appendChild(option_selected1);

    let option1 = document.createElement("option");
    option1.setAttribute("id","efectivo");
    option1.value = "Efectivo";
    option1.innerText="Efectivo";
    select1.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = "Credito";
    option2.innerText="Credito";
    select1.appendChild(option2);

    let option3 = document.createElement("option");
    option3.value = "Debito";
    option3.innerText="Debito";
    select1.appendChild(option3);

    let div6 = document.createElement("div");
    div6.classList.add("col-xs-12","col-md-4");
    div6.setAttribute("id","finalizar_compra");
    form.appendChild(div6);



    let btn = document.createElement("button");
    btn.setAttribute("type","submit");
    btn.classList.add("btn","btn-success","btn-block");
    btn.setAttribute("id","finalizar");
    btn.innerText="Finalizar Compra";

    div6.appendChild(btn);

};



function enviarPedido(e){

    e.preventDefault();
   
    const cliente =document.querySelector("#cliente").value;
    const telefono =document.querySelector("#telefono").value;
    const email =document.querySelector("#email").value;
    const lugar =document.querySelector("#lugar").value;
    const fecha=document.querySelector("#fecha").value;
    
    //|| telefono ==="" || email === "" || lugar === ""
    if(cliente ==="" || telefono ==="" || email === "" || lugar === "" || fecha===""){
        
        alert("Los campos no pueden estr vacios")
    }
    
    
    else{
        console.log("paso bien")

        carrito.length=[];
        mostrarCarrito()
        
        form.reset();
        location.reload();

    }
}

                                                                    /*CARGAMOS LAS CATEGORIAS */

document.querySelector("select").addEventListener("change",(e) =>{

    

    let categoria= e.target.value;

    

    let filtrado = productos.filter((producto) =>{
        // preguntar si el producto es todos, entonces return true; va a ser el array entero.


        let categorias= producto.getCategoria;
        

    return categorias.includes((categoria));
    });

    console.log(filtrado);

    let divs= filtrado.crearHTML();

    document.querySelector("#productos").replaceChildren(...divs);

  
    

});




Array.prototype.crearHTML = function(){

    divG.innerHTML = "";
    
    return this.map((producto) =>{

        let div = document.createElement("div");
        div.classList.add("card");
        div.setAttribute("style","width: 18rem;");
        divG.appendChild(div);
        
        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top")
        imagen.src= producto.getImagen;
        div.append(imagen);

        let div2= document.createElement("div");
        div2.classList.add("card-body");
        div.append(div2)
        

        let h5= document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = producto.getNombre;
        div2.append(h5);

        let p = document.createElement("p");
        p.classList.add("card-text");
        p.innerText = producto.getDescripcion;
        div2.append(p);

        let ul= document.createElement("ul");
        ul.classList.add("list-group","list-group-flush");
        

        let li= document.createElement("li");
        li.classList.add("list-group-item")
        li.innerText ="Precio: " + producto.getPrecio;
        ul.append(li);

        let li2= document.createElement("li");
        li2.classList.add("list-group-item")
        li2.innerText ="ID: " + producto.getId;
        ul.append(li2);

        let li3= document.createElement("li");
        li3.classList.add("list-group-item")
        li3.innerText ="Categoria: " + producto.getCategoria;
        ul.append(li3);

        div.append(ul);



        let btn = document.createElement("button");

        btn.classList.add("btn", "btn-primary");
        btn.innerText = "Agregar al carrito";
        btn.setAttribute("name","boton");

        div.appendChild(btn);
  

        btn.addEventListener("click",() =>{
        //console.log(producto.getId);
        agregarProducto(producto.getId);


        
        
        
    });

    continuar_compra.addEventListener("click", () =>{

        if(carrito.length == 0){
            alert("carrito esta vacio")
        }
        else{
            //location.reload();
            window.location.href="#form_compra";
            
            //estructura_pedido();
            //procesarPedido();
    
           
        }
    
    });
    
    vaciarCarrito.addEventListener("click",()=>{
    
        carrito.length =[];
        mostrarCarrito();
    
    });

    function agregarProducto(id){

        carrito = JSON.parse(localStorage.getItem("carrito"));
    
        let existe = carrito.some(producto => producto.getId === id);
    
        if(existe){
            let producto = carrito.map(producto =>{
                if(producto.getId == id){
                    producto.getCantidad++
                    console.log(producto.getId,producto.getCantidad);
                };
            });
        }else{
            let item = productos.find((producto)=> producto.getId == id);
            carrito.push(item);
            guardarStorage()
            
        };
        mostrarCarrito();
        
        
    
    };

    function mostrarCarrito() {
        const modalBody = document.querySelector(".modal  .modal-body");
    
        modalBody.innerHTML ="";
        
        carrito.forEach((producto)=>{
            
            //Creo un div contenedor para contener div -> imagen y el div -> contenido
    
            let div_contenedor = document.createElement("div");
            div_contenedor.classList.add("modal-contenedor");
    
            //Creo un div que contenga la imgagen y lo appendeo al div contenedor
            let div_img = document.createElement("div");
            div_contenedor.appendChild(div_img)
    
            let img = document.createElement("img");
            img.classList.add("img-fluid","img-carrito");
            img.src = producto.getImagen;
            div_img.appendChild(img);
    
    
            //Creo un div que contenga el contenido y lo appendeo al div contenedor
    
            let div_contenido = document.createElement("div");
            div_contenedor.appendChild(div_contenido);
    
            let nombre = document.createElement("P");
            nombre.innerText =`producto: ${producto.getNombre}`;
            div_contenido.appendChild(nombre);
    
            let precio = document.createElement("p");
            precio.innerText = `precio: ${producto.getPrecio}`;
            div_contenido.appendChild(precio);
    
            let cantidad = document.createElement("p");
            cantidad.innerText = `cantidad: ${producto.getCantidad}`;
            div_contenido.appendChild(cantidad);
    
            let btn = document.createElement("button");
            btn.classList.add("btn","btn-danger");
            btn.innerText ="Eliminar producto";
            div_contenido.appendChild(btn);
    
            btn.addEventListener("click",()=>{
    
                eliminarProducto(producto.getId);
    
            });
    
            modalBody.appendChild(div_contenedor);
        })
    
        //Con el If  estamos verificando si hay algo o no dentro del carrito
    
        if(carrito.length == 0){ 
            
            let noHay = document.createElement("p");
            noHay.classList.add("text-center","text-primary","parrafo");
            noHay.innerText = "¡Aun no agregaste nada!";
            modalBody.appendChild(noHay);
    
        }
        
    
    
        carritoContenedor.textContent = carrito.length;
    
        precioTotal.innerText = carrito.reduce((acc,producto) => acc+producto.getCantidad * producto.getPrecio, 0);
    
        guardarStorage();
    }
    
    
    function eliminarProducto(id){
    
       const productoId = id;
    
       /*Nos traemos todos los productos menos al que sea distinto al juego id */
       carrito = carrito.filter((producto)=> producto.getId != productoId);
    
      
        /*Como mostrar carrito es que esta pintando dentro del carrito siempre hay que llamarlo para que nos muestre los cambios, en este caso cuando lo llamamos nos elimina el item del carrito */
       mostrarCarrito();
    
    }
    
    
    function guardarStorage(){
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    
    function procesarPedido(){
    
        carrito = JSON.parse(localStorage.getItem("carrito"))
    
        carrito.forEach((producto) =>{
    
            let listaCompra = document.querySelector("#lista-compra tbody");
    
            let row = document.createElement("tr");
    
            let td = document.createElement("td");
            row.appendChild(td);
            
            let img = document.createElement("img");
            img.classList.add("img-fluid","img-carrito")
            img.src = producto.getImagen;
            td.appendChild(img);
    
            let nombre = document.createElement("td");
            nombre.innerText = producto.getNombre;
            row.appendChild(nombre);
    
            let precio = document.createElement("td");
            precio.innerText = producto.getPrecio;
            row.appendChild(precio);
    
            let cantidad = document.createElement("td");
            cantidad.innerText = producto.getCantidad;
            row.appendChild(cantidad);
    
            let subTotal = document.createElement("td");
            subTotal.innerText= producto.getPrecio * producto.getCantidad;
            row.appendChild(subTotal);
    
            listaCompra.appendChild(row);
    
            
        });
    
        
    
        total_proceso.innerText = carrito.reduce((acc,producto) => acc+producto.getCantidad * producto.getPrecio, 0);
    
       
     
    }
    
    function estructura_pedido(){
    
        crearFormulario();
        
        let thead = document.createElement("thead");
        lista_compra.appendChild(thead);
    
        let tr = document.createElement("tr");
        thead.appendChild(tr);
    
        imagen = document.createElement("th");
        imagen.setAttribute("scope","col");
        imagen.innerText = "Imagen";
        tr.appendChild(imagen);
    
        nombre = document.createElement("th");
        nombre.setAttribute("scope","col");
        nombre.innerText="Nombre";
        tr.appendChild(nombre);
    
        precio = document.createElement("th");
        precio.setAttribute("scope","col");
        precio.innerText="Precio";
        tr.appendChild(precio);
    
        cantidad = document.createElement("th");
        cantidad.setAttribute("scope","col");
        cantidad.innerText="Cantidad";
        tr.appendChild(cantidad);
    
        subTotal = document.createElement("th");
        subTotal.setAttribute("scope","col");
        subTotal.innerText="Sub Total";
        tr.appendChild(subTotal);
    
        
    
    }
    
    
    function crearFormulario(){
    
        /*(nombre, teléfono, email, lugar y fecha de entrega) y del pago (método de pago, cuotas –si corresponde–). */
    
        //Nombre del cliente
        let div1 = document.createElement("div");
        div1.classList.add("form-group","row");
        form.appendChild(div1);
    
        let label1=document.createElement("label");
        label1.setAttribute("for","cliente");
        label1.classList.add("col-2","col-md-2","col-form-label","h2");
        label1.innerText = "Cliente: "
        div1.appendChild(label1);
    
        let div1_interno = document.createElement("div");
        div1_interno.classList.add("col-12","col-md-10");
        div1.appendChild(div1_interno);
    
        let input1 = document.createElement("input");
        input1.setAttribute("type","text");
        input1.classList.add("form-control");
        input1.setAttribute("id","cliente");
        input1.setAttribute("placeholder","ingresa nombre cliente");
        input1.setAttribute("name","persona");
        div1_interno.appendChild(input1);
    
    
        //teléfono
     
        let div2 = document.createElement("div");
        div2.classList.add("form-group","row");
        form.appendChild(div2);
    
        let label2=document.createElement("label");
        label2.setAttribute("for","telefono");
        label2.classList.add("col-2","col-md-2","col-form-label","h2");
        label2.innerText = "Telefono: ";
        div2.appendChild(label2);
    
        let div2_interno = document.createElement("div");
        div2_interno.classList.add("col-12","col-md-10");
        div2.appendChild(div2_interno);
    
        let input2 = document.createElement("input");
        input2.setAttribute("type","number");
        input2.classList.add("form-control");
        input2.setAttribute("id","telefono");
        input2.setAttribute("placeholder","ingresa número de teléfono");
        input2.setAttribute("name","telefono");
        div2_interno.appendChild(input2);
    
    
        //email
    
        let div3 = document.createElement("div");
        div3.classList.add("form-group","row");
        form.appendChild(div3);
    
        let label3=document.createElement("label");
        label3.setAttribute("for","email");
        label3.classList.add("col-2","col-md-2","col-form-label","h2");
        label3.innerText = "Email: ";
        div3.appendChild(label3);
    
        let div3_interno = document.createElement("div");
        div3_interno.classList.add("col-12","col-md-10");
        div3.appendChild(div3_interno);
    
        let input3 = document.createElement("input");
        input3.setAttribute("type","email");
        input3.classList.add("form-control");
        input3.setAttribute("id","email");
        input3.setAttribute("placeholder","ingresa email");
        input3.setAttribute("name","email");
        div3_interno.appendChild(input3);
    
        //lugar
    
        let div4 = document.createElement("div");
        div4.classList.add("form-group","row");
        form.appendChild(div4);
    
        let label4=document.createElement("label");
        label4.setAttribute("for","lugar");
        label4.classList.add("col-2","col-md-2","col-form-label","h2");
        label4.innerText = "Direccion: ";
        div4.appendChild(label4);
        
        let div4_interno = document.createElement("div");
        div4_interno.classList.add("col-12","col-md-10");
        div4.appendChild(div4_interno);
    
        let input4 = document.createElement("input");
        input4.setAttribute("type","text");
        input4.classList.add("form-control");
        input4.setAttribute("id","lugar");
        input4.setAttribute("placeholder","ingresa dirección");
        input4.setAttribute("name","lugar");
        div4_interno.appendChild(input4);
    
        //fecha de entrega
    
        let div5 = document.createElement("div");
        div5.classList.add("form-group","row");
        form.appendChild(div5);
    
        let label5=document.createElement("label");
        label5.setAttribute("for","fecha");
        label5.classList.add("col-2","col-md-2","col-form-label","h2");
        label5.innerText = "Fecha: ";
        div5.appendChild(label5);
    
        let div5_interno = document.createElement("div");
        div5_interno.classList.add("col-12","col-md-10");
        div5.appendChild(div5_interno);
    
        let input5 = document.createElement("input");
        input5.setAttribute("type","date");
        input5.classList.add("form-control");
        input5.setAttribute("id","fecha");
        input5.setAttribute("placeholder","ingresa fecha");
        input5.setAttribute("name","fecha");
        div5_interno.appendChild(input5);
    
        //Forma de pago
    
        let label6=document.createElement("label");
        label6.setAttribute("for","pago");
        label6.classList.add("col-2","col-md-2","col-form-label","h2");
        label6.innerText = "forma de pago: ";
        form.appendChild(label6);
        
        let select1 = document.createElement("select");
        select1.classList.add("col-2","col-md-2","col-form-label","h2");
        select1.setAttribute("aria-label",".form-select-lg example");
        select1.setAttribute("id","select1");
        form.appendChild(select1);
       
        let option_selected1 = document.createElement("option");
        option_selected1.setAttribute("boolean","selected")
        option_selected1.innerText= "Elija forma de pago"
        select1.appendChild(option_selected1);
    
        let option1 = document.createElement("option");
        option1.setAttribute("id","efectivo");
        option1.value = "Efectivo";
        option1.innerText="Efectivo";
        select1.appendChild(option1);
    
        let option2 = document.createElement("option");
        option2.value = "Credito";
        option2.innerText="Credito";
        select1.appendChild(option2);
    
        let option3 = document.createElement("option");
        option3.value = "Debito";
        option3.innerText="Debito";
        select1.appendChild(option3);
    
        div6 = document.createElement("div");
        div6.classList.add("col-xs-12","col-md-4");
        div6.setAttribute("id","finalizar_compra");
        form.appendChild(div6);
    
    
    
        let btn = document.createElement("button");
        btn.setAttribute("type","submit");
        btn.classList.add("btn","btn-success","btn-block");
        btn.setAttribute("id","finalizar");
        btn.innerText="Finalizar Compra";
    
        div6.appendChild(btn);
      
    
    };

       
            
            return divG;

        });

  

        

        
    }






/*
https://www.youtube.com/watch?v=wXeVIchxiL0&t=762s
min 42:17
*/

// clase form https://drive.google.com/file/d/1V6eE-6XvYYX2FKJC9A6R3G-EfrW_bGZV/view 50:18