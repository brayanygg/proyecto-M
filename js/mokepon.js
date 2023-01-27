    //hipodogue-->💧, Capipepo-->🌱, ratigueya-->🔥
    //camaroncin-->🔥💧, Pydos-->🌱🔥, turran-->💧🌱
    const seccionAtaque = document.getElementById('seleccionar-ataque')
    const seccionReinicio = document.getElementById('reinicio')
    seccionReinicio.style.display = 'none'
    const botonMascotaJugador = document.getElementById('boton-mascota')
    const botonReinicio = document.getElementById('boton-reinicio')
    
    const insertarImgJugador = document.getElementById('img-jugador')
    const insertarImgEnemigo = document.getElementById('img-enemigo')

    const seccionMascota = document.getElementById('seleccionar-mascota')
    const spanMascotaJugador = document.getElementById('mascota-jugador')

    const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    const spanVidasJugador = document.getElementById('vidas-jugador')
    const spanVidasEnemigo = document.getElementById('vidas-enemigo')

    const mensajeAtaque = document.getElementById('resultado')
    const ataquesDelJugador = document.getElementById('ataque-jugador')
    const ataquesDelEnemigo = document.getElementById('ataque-enemigo')
    const contenedorTarjetas = document.getElementById('contenedorTarjetas')
    const contenedorAtaques = document.getElementById('contenedorAtaques')

    const sectionMapa = document.getElementById('ver-mapa')
    const mapa = document.getElementById('mapa')

    let mokepones = []
    let ataqueJugador = []
    let ataqueEnemigo = []
    let opcionDeMokepones 
    let inputHipodoge
    let inputCapipepo
    let inputRatigueya
    let inputCamaroncin
    let inputPydos
    let inputTurran
    let mascotaJugador
    let opcionAtaques
    let ataquesMascotaEnemigo
    let botonFuego
    let botonAgua
    let botonTierra
    let botones = []
    let indexAtaqueJugador
    let indexAtaqueEnemigo
    let victoriasJugador = 0
    let victoriasEnemigo = 0
    let vidasEnemigo = 3
    let vidasJugador = 3
    let lienzo = mapa.getContext('2d')
    let intervalo

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }
}

let hipodoge = new Mokepon('Hipodoge', './img/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './img/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './img/mokepons_mokepon_ratigueya_attack.png', 5)

let camaroncin = new Mokepon('Camaroncin', './img/Camaroncin.png', 5)

let pydos = new Mokepon('Pydos', './img/Pydos.png', 5)

let turran = new Mokepon('Turran', './img/Turran.png', 5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },   
)
capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },   
)
ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },    
)
camaroncin.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)
pydos.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },  
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
     
)
turran.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' }, 
)


mokepones.push(hipodoge,capipepo,ratigueya,camaroncin,pydos,turran)

function iniciarJuego() {

    seccionAtaque.style.display = 'none'
    sectionMapa.style.display = 'none'

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones =  ` 
        <input type="radio" name="mascota" id= ${Mokepon.nombre}>
        <label class='buton-mokepon' for=${Mokepon.nombre}>
            <p>${Mokepon.nombre}</p> 
            <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
        </label> 
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputCamaroncin = document.getElementById('Camaroncin')
        inputPydos = document.getElementById('Pydos')
        inputTurran = document.getElementById('Turran')
    })
          
    botonMascotaJugador.addEventListener('click', seleccionMascotaJugador)

    botonReinicio.addEventListener('click', reinicio)
}

function seleccionMascotaJugador() {

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        insertarImgJugador.innerHTML = `<img src = ${hipodoge.foto}>`
        mascotaJugador = inputHipodoge.id
        //seccionAtaque.style.display = 'flex'
        sectionMapa.style.display = 'flex'
        intervalo = setInterval(pintarPersonaje, 50)
        seccionMascota.style.display = 'none'     
        
    }else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        insertarImgJugador.innerHTML = `<img src=${capipepo.foto}>`
        mascotaJugador = inputCapipepo.id
        //seccionAtaque.style.display = 'flex'
        sectionMapa.style.display = 'flex'
        intervalo = setInterval(pintarPersonaje, 50)
        seccionMascota.style.display = 'none'

    }else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        insertarImgJugador.innerHTML = `<img src = ${ratigueya.foto}>`
        mascotaJugador = inputRatigueya.id
        //seccionAtaque.style.display = 'flex'
        sectionMapa.style.display = 'flex'
        intervalo = setInterval(pintarPersonaje, 50)
        seccionMascota.style.display = 'none'
    }else if(inputCamaroncin.checked) {
        spanMascotaJugador.innerHTML = inputCamaroncin.id
        insertarImgJugador.innerHTML = `<img src = ${camaroncin.foto}>`
        mascotaJugador = inputCamaroncin.id
        //seccionAtaque.style.display = 'flex'
        sectionMapa.style.display = 'flex'
        intervalo = setInterval(pintarPersonaje, 50)
        seccionMascota.style.display = 'none'
    }else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        insertarImgJugador.innerHTML = `<img src = ${pydos.foto}>`
        mascotaJugador = inputPydos.id
        //seccionAtaque.style.display = 'flex'
        sectionMapa.style.display = 'flex'
        intervalo = setInterval(pintarPersonaje, 50)
        seccionMascota.style.display = 'none'
    }else if(inputTurran.checked) {
        spanMascotaJugador.innerHTML = inputTurran.id
        insertarImgJugador.innerHTML = `<img src = ${turran.foto}>`
        mascotaJugador = inputTurran.id
        //seccionAtaque.style.display = 'flex'
        sectionMapa.style.display = 'flex'
        intervalo = setInterval(pintarPersonaje, 50)
        seccionMascota.style.display = 'none'
    }else{
        alert('Debes seleccionar una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        opcionAtaques = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += opcionAtaques
    })
    
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
           if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#010524'
                boton.disabled = true
           } else if (e.target.textContent === '💧') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#010524'
                boton.disabled = true
           } else{
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.background = '#010524'
                boton.disabled = true
           }
           ataqueAleatorioEnemigo()
        })
    })
}
    
function seleccionMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)

    spanMascotaEnemigo.innerHTML  = mokepones[mascotaAleatoria].nombre
    insertarImgEnemigo.innerHTML = `<img src=${mokepones[mascotaAleatoria].foto}> `
    ataquesMascotaEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}   

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMascotaEnemigo.length -1)

    let EleccionEnemigo = ataquesMascotaEnemigo[ataqueAleatorio].nombre
    ataquesMascotaEnemigo.splice(ataqueAleatorio, 1)
    
    if(EleccionEnemigo === '🔥') {
        ataqueEnemigo.push('Fuego')
    }else if(EleccionEnemigo === '💧') {
        ataqueEnemigo.push('Agua')
    }else{
        ataqueEnemigo.push('Tierra')
    }
    console.log(ataqueEnemigo)
    console.log(ataquesMascotaEnemigo)
    iniciarPelea()
}   

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensajes('Empate')
        } else if (ataqueJugador[index] === "Fuego" && ataqueEnemigo[index] === "Tierra" || ataqueJugador[index] === "Agua" && ataqueEnemigo[index] === "Fuego" || ataqueJugador[index] === "Tierra" && ataqueEnemigo[index] === "Agua" ) {
            indexAmbosOponentes(index, index)
            crearMensajes('Ganaste')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensajes('Perdiste')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }   
    }
    comprobarVidas() 
}

function comprobarVidas() {
    if(victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('Empate 🏳️')
    } else if(victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('Ganaste 🎉')
    } else{
        crearMensajeFinal('Perdiste 😥')
    }

}
function crearMensajes(resultado) {   

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    mensajeAtaque.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {

    mensajeAtaque.innerHTML = resultadoFinal

    seccionReinicio.style.display = 'block'
}

function reinicio() {

    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function moverArriba() {
    velocidadY = - 5
}
function moverAbajo() {
    velocidadY = + 5
}
function moverIzquierda() {
    velocidadX = - 5
}
function moverDerecha() {
    velocidadX = + 5
}
function pintarPersonaje() {
    capipepo.x = capipepo.x + velocidadX
    capipepo.y = capipepo.y + velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        capipepo.mapaFoto,
        capipepo.x,
        capipepo.y,
        capipepo.ancho,
        capipepo.alto
    )
}
function detenerMovimiento() {
    velocidadX = 0
    velocidadY = 0
}
window.addEventListener('load', iniciarJuego)