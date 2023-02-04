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
    let mascotaJugadorObjeto
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
    let mapaFondo = new Image()
    mapaFondo.src = './img/mokemap.png' 

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 50
        this.alto = 50
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

    let hipodoge = new Mokepon('Hipodoge', './img/mokepons_mokepon_hipodoge_attack.png', 5, './img/hipodogeH.png')
    let capipepo = new Mokepon('Capipepo', './img/mokepons_mokepon_capipepo_attack.png', 5, './img/capipepoH.png')
    let ratigueya = new Mokepon('Ratigueya', './img/mokepons_mokepon_ratigueya_attack.png', 5, './img/ratigueyaH.png')
    let camaroncin = new Mokepon('Camaroncin', './img/Camaroncin.png', 5, './img/camaroncinH.png')
    let pydos = new Mokepon('Pydos', './img/Pydos.png', 5, './img/pydosH.png')
    let turran = new Mokepon('Turran', './img/Turran.png', 5, './img/turranH.png')

    let hipodogeEnemigo = new Mokepon('Hipodoge', './img/mokepons_mokepon_hipodoge_attack.png', 5, './img/hipodogeH.png', 70, 220)
    let capipepoEnemigo = new Mokepon('Capipepo', './img/mokepons_mokepon_capipepo_attack.png', 5, './img/capipepoH.png', 230, 10)
    let ratigueyaEnemigo = new Mokepon('Ratigueya', './img/mokepons_mokepon_ratigueya_attack.png', 5, './img/ratigueyaH.png', 10, 120)
    let camaroncinEnemigo = new Mokepon('Camaroncin', './img/Camaroncin.png', 5, './img/camaroncinH.png', 190, 200)
    let pydosEnemigo = new Mokepon('Pydos', './img/Pydos.png', 5, './img/pydosH.png', 300, 230)
    let turranEnemigo = new Mokepon('Turran', './img/Turran.png', 5, './img/turranH.png', 300, 80)



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
    //seccionAtaque.style.display = 'flex'
    
    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        insertarImgJugador.innerHTML = `<img src = ${hipodoge.foto}>`
        mascotaJugador = inputHipodoge.id
        seccionMascota.style.display = 'none'
        sectionMapa.style.display = 'flex'
        iniciarMapa()       
    }else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        insertarImgJugador.innerHTML = `<img src=${capipepo.foto}>`
        mascotaJugador = inputCapipepo.id
        seccionMascota.style.display = 'none'
        sectionMapa.style.display = 'flex'
        iniciarMapa()
    }else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        insertarImgJugador.innerHTML = `<img src = ${ratigueya.foto}>`
        mascotaJugador = inputRatigueya.id
        seccionMascota.style.display = 'none'
        sectionMapa.style.display = 'flex'
        iniciarMapa()
    }else if(inputCamaroncin.checked) {
        spanMascotaJugador.innerHTML = inputCamaroncin.id
        insertarImgJugador.innerHTML = `<img src = ${camaroncin.foto}>`
        mascotaJugador = inputCamaroncin.id
        seccionMascota.style.display = 'none'
        sectionMapa.style.display = 'flex'
        iniciarMapa()
    }else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        insertarImgJugador.innerHTML = `<img src = ${pydos.foto}>`
        mascotaJugador = inputPydos.id
        seccionMascota.style.display = 'none'
        sectionMapa.style.display = 'flex'
        iniciarMapa()
    }else if(inputTurran.checked) {
        spanMascotaJugador.innerHTML = inputTurran.id
        insertarImgJugador.innerHTML = `<img src = ${turran.foto}>`
        mascotaJugador = inputTurran.id
        seccionMascota.style.display = 'none'
        sectionMapa.style.display = 'flex'
        iniciarMapa()
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
function iniciarMapa() {

    mapa.width = 360
    mapa.height = 280
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', teclaPresionada)
    window.addEventListener('keyup', detenerMovimiento)
}
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}
function moverAbajo() {
    mascotaJugadorObjeto.velocidadY =  5
}
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}
function moverDerecha() {
    mascotaJugadorObjeto.velocidadX =  5
}
function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaFondo,
        0,
        0,
        mapa.width,
        mapa.height
        
    )
        mascotaJugadorObjeto.pintarMokepon()
        hipodogeEnemigo.pintarMokepon()
        capipepoEnemigo.pintarMokepon()
        ratigueyaEnemigo.pintarMokepon()
        camaroncinEnemigo.pintarMokepon()
        pydosEnemigo.pintarMokepon()
        turranEnemigo.pintarMokepon()       
}
function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}
function teclaPresionada(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}
function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}
window.addEventListener('load', iniciarJuego)