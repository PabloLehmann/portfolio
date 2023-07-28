// Mostrar fotos en galeria
let fotos = [
    {id:1, nombre: "¿Por que tanta pena?",    tipo: "Acrílico", img: "./asset/1.jpeg"},
    {id:2, nombre: "Pensando en ella",        tipo: "Acrílico", img: "./asset/2.jpeg"},
    {id:3, nombre: "Desnuda sobre la hierba", tipo: "Acrílico", img: "./asset/3.jpeg"},
    {id:4, nombre: "La chelista",             tipo: "Acrílico", img: "./asset/4.jpeg"},
    {id:5, nombre: "El caminante",            tipo: "Acrílico", img: "./asset/5.jpeg"},
    {id:6, nombre: "El chucaro",              tipo: "Acrílico", img: "./asset/6.jpeg"},
    
]




const galeriaFotos = document.getElementById('galeria')

const mostrarFotos = (array) =>{
    galeriaFotos.innerHTML= ''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <div class="  p-2 m-3 text-center containerCuadro border border-4 border-black">

                        <img src= ${producto.img} class="img-fluid imgCuadros" alt = "">
                        
                     </div>
                        <p> ${producto.tipo}</p>
                    
                        <h4 class="">${producto.nombre}</h4>
                        <hr>
                                    
                    `
                    galeriaFotos.appendChild(div)    
                            

                        
                       
        
        
    });
    
}
mostrarFotos(fotos)



let fotos2 = [
    {id:1, nombre: "La dulce espera",    tipo: "Acrílico", img: "./asset/horisontal-1.jpeg"},
    {id:2, nombre: "Escena de cafetín",        tipo: "Acrílico", img: "./asset/horisontal-2.jpeg"},
    {id:3, nombre: "Barquito de papel", tipo: "Acrílico", img: "./asset/horisontal-3.jpeg"},
    
]


const galeriaFotos2 = document.getElementById('galeria2')

const mostrarFotos2 = (array) =>{
    galeriaFotos2.innerHTML= ''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <div class="  p-2 m-3 text-center containerCuadro2 border border-4 border-black">

                        <img src= ${producto.img} class="img-fluid imgCuadros2" alt = "">
                        
                     </div>
                        <p> ${producto.tipo}</p>
                    
                        <h4 class="">${producto.nombre}</h4>
                        <hr>
                                    
                    `
                    galeriaFotos2.appendChild(div)    
                            

                        
                       
        
        
    });
    
}
mostrarFotos2(fotos2)

let dibujos = [
    {id:1, nombre: "Encierro",                     tipo: "Dibujo", img: "./asset/d1.jpeg"},
    {id:2, nombre: "Recuerdos de infancia",        tipo: "Dibujo", img: "./asset/d2.jpeg"},
    {id:3, nombre: "Compañeros",                   tipo: "Dibujo", img: "./asset/d3.jpeg"},
    {id:4, nombre: "Sueños delibertad",            tipo: "Dibujo", img: "./asset/d4.jpeg"},
    {id:5, nombre: "Observando la soledad",        tipo: "Dibujo", img: "./asset/d5.jpeg"},
    {id:6, nombre: "Encierro 2",                   tipo: "Dibujo", img: "./asset/d6.jpeg"},
    
]

const galeriaFotos3 = document.getElementById('dibujo')

const mostrarFotos3 = (array) =>{
    galeriaFotos3.innerHTML= ''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <div class="  p-2 m-3 text-center containerDibujo border border-4 border-black">

                        <img src= ${producto.img} class="img-fluid imgDibujo" alt = "">
                        
                     </div>
                        <p> ${producto.tipo}</p>
                    
                        <h4 class="">${producto.nombre}</h4>
                        <hr>
                                    
                    `
                    galeriaFotos3.appendChild(div)    
                            

                        
                       
        
        
    });
    
}
mostrarFotos3(dibujos)

//////////////////

let fotos5 = [
    {id:1, nombre: "Bajo el sol",       tipo: "Acrílico", img: "./asset/cuadros_2/1.png"},
    {id:2, nombre: "Madre e Hija",      tipo: "Acrílico", img: "./asset/cuadros_2/2.png"},
    {id:3, nombre: "Chusmeando",        tipo: "Acrílico", img: "./asset/cuadros_2/3.png"},
    {id:4, nombre: "El borracho",       tipo: "Acrílico", img: "./asset/cuadros_2/4.png"},
    {id:5, nombre: "Desde la ventana",  tipo: "Acrílico", img: "./asset/cuadros_2/5.png"},
    {id:6, nombre: "Trabajo duro",      tipo: "Acrílico", img: "./asset/cuadros_2/6.png"},
    {id:7, nombre: "Un paseo en globo", tipo: "Acrílico", img: "./asset/cuadros_2/7.png"},
    {id:8, nombre: "Pensando",          tipo: "Acrílico", img: "./asset/cuadros_2/8.png"},
    {id:9, nombre: "De cara al sol",    tipo: "Acrílico", img: "./asset/cuadros_2/9.png"},
    
]

const galeriaFotos5 = document.getElementById('galeria5')

const mostrarFotos5 = (array) =>{
    galeriaFotos5.innerHTML= ''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <div class="  p-2 m-3 text-center containerDibujo border border-4 border-black">

                        <img src= ${producto.img} class="img-fluid imgDibujo" alt = "">
                        
                     </div>
                        <p> ${producto.tipo}</p>
                    
                        <h4 class="">${producto.nombre}</h4>
                        <hr>
                                    
                    `
                    galeriaFotos5.appendChild(div)    
                            

                        
                       
        
        
    });
    
}
mostrarFotos5(fotos5)