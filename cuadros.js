// Mostrar fotos en galeria
let fotos = [
    {id:1, nombre: "foto 1", tipo: "foto", img: "./asset/1.jpeg"},
    {id:2, nombre: "foto 2", tipo: "foto", img: "./asset/2.jpeg"},
    {id:3, nombre: "foto 3", tipo: "foto", img: "./asset/3.jpeg"},
    {id:4, nombre: "foto 4", tipo: "foto", img: "./asset/4.jpeg"},
    {id:5, nombre: "foto 5", tipo: "foto", img: "./asset/5.jpeg"},
    {id:6, nombre: "foto 6", tipo: "foto", img: "./asset/6.jpeg"},
    
]

const galeriaFotos = document.getElementById('galeria')

const mostrarFotos = (array) =>{
    galeriaFotos.innerHTML= ''

    array.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <div class="  p-2 m-3 text-center containerCuadro border border-black">

                        <img src= ${producto.img} class="img-fluid" alt = "">
                        
                        </div>
                        <h4 class="">${producto.nombre}</h4>
                                    
                    `
                    galeriaFotos.appendChild(div)    
                            

                        
                       
        
        
    });
    
}
mostrarFotos(fotos)

