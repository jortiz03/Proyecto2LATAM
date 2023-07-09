/*El codigo de Js de esta parte esta aplicado a parte del menu y el menu amburguesa*/

(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{
               
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }
        });
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));

})();

/*El codigo Js aplicado aqui corresponde a la animacion de la Nieve*/
const body = document.querySelector('body')

    const crearNeive = () =>{
        let copo = document.createElement('i')
            let x = innerWidth*Math.random()
            let size = (Math.random() * 8) + 2
            let z = Math.round(Math.random())*100
            let delay = Math.random () * 5
            let animar = (Math.random() * 10) + 5

            copo.style.left = x + 'px'
            copo.style.width = size +'px'
            copo.style.height = size +'px'
            copo.style.zIndex = z
            copo.style.animationDelay = delay + 's'
            copo.style.animationDuration = animar + 's'

    body.appendChild(copo)

    setTimeout(() => {
        copo.remove()
    }, animar * 1000)

}

setInterval(crearNeive,100)

/*El codigo de JS esta applicado en el la parte del sitio web que dice:
        "W e l c o m e   t o   m y   W e b s i t e" */

        const letters = document.querySelectorAll(".bound")
        letters.forEach(letters => {
            letters.addEventListener("mouseenter", () => toggleRubberBand(letters))
        })
    
        function toggleRubberBand(letters){
            letters.classList.add("bounding")
            letters.addEventListener("animationend", () => {
                letters.classList.remove("bounding")
            })
        }
    
/*En esta parte del codigo js se aplico para el boton de "descargar CV"*/  
    
    let btn = document.querySelector('a.cv');
    btn.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX*3 - rect.left;
        btn.style.setProperty('--x', x + 'deg');
    });

/*Codigo Js de los iconos de HTML, CSS, Javascrit y office */

    let habilidades = [
        {
            nombre: 'Office',
            tipo: 'Nivel: Intermedio',
            img: 'img/office.jpg'
        },

        {
            nombre: 'HTML',
            tipo: 'Nivel: Junior',
            img: 'img/html.jpg'
        },
        
        {
            nombre: 'CSS',
            tipo: 'Nivel:Junior',
            img: 'img/css.jpg'
        },

        {
            nombre: 'Javascript',
            tipo: 'Nivel: Junior',
            img: 'img/js.jpg'
      },
   
    ];

    function crearHTMLHabilidad(habilidad) {
        let nombreHabilidad = document.createElement('h4');
        nombreHabilidad.innerText = habilidad.nombre;
      
        let imagenHabilidad = document.createElement('img');
        imagenHabilidad.src = habilidad.img;
        
        let tipoHabilidad = document.createElement('p');
        tipoHabilidad.innerText = habilidad.tipo;
        
        let listItem = document.createElement('li');
        listItem.appendChild(nombreHabilidad);
        listItem.appendChild(imagenHabilidad);
        listItem.appendChild(tipoHabilidad);
      
        return listItem;
      }

      const listaHabilidades = document.querySelector('#listh');

      habilidades.forEach(function(habilidad) {
        let habilidadListItem = crearHTMLHabilidad(habilidad)
      
        listaHabilidades.appendChild(habilidadListItem);
      });