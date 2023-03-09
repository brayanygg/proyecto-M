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

    let jugadorId = null
    let enemigoId = null
    let mokepones = []
    let mokeponesEnemigos = []
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
    let alturaDeseada
    let anchoDelMapa = window.innerWidth -20
    const anchoMaximoMapa = 500

    if(anchoDelMapa > anchoMaximoMapa) {
        anchoDelMapa = anchoMaximoMapa -20
    }
    alturaDeseada = anchoDelMapa * 600 / 800

    mapa.width = anchoDelMapa
    mapa.height = alturaDeseada
class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 50
        this.alto = 50
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
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

    
const HIPODOGE_ATAQUES = [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
]
hipodoge.ataques.push(...HIPODOGE_ATAQUES)

const CAPIPEPO_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
]
capipepo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

const CAMARONCIN_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
]
camaroncin.ataques.push(...CAMARONCIN_ATAQUES)

const PYDOS_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },  
    { nombre: '🔥', id: 'boton-fuego' }, 
    { nombre: '💧', id: 'boton-agua' },
]
pydos.ataques.push(...PYDOS_ATAQUES)

const TURRAN_ATAQUES = [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' }, 
]
turran.ataques.push(...TURRAN_ATAQUES)

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

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://192.168.100.168:8080/unirse")
        .then( function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        }) 
}

function seleccionMascotaJugador() {
    
    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        insertarImgJugador.innerHTML = `<img src = ${hipodoge.foto}>`
        mascotaJugador = inputHipodoge.id       
    }else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        insertarImgJugador.innerHTML = `<img src=${capipepo.foto}>`
        mascotaJugador = inputCapipepo.id
    }else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        insertarImgJugador.innerHTML = `<img src = ${ratigueya.foto}>`
        mascotaJugador = inputRatigueya.id
    }else if(inputCamaroncin.checked) {
        spanMascotaJugador.innerHTML = inputCamaroncin.id
        insertarImgJugador.innerHTML = `<img src = ${camaroncin.foto}>`
        mascotaJugador = inputCamaroncin.id
    }else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        insertarImgJugador.innerHTML = `<img src = ${pydos.foto}>`
        mascotaJugador = inputPydos.id
    }else if(inputTurran.checked) {
        spanMascotaJugador.innerHTML = inputTurran.id
        insertarImgJugador.innerHTML = `<img src = ${turran.foto}>`
        mascotaJugador = inputTurran.id
    }else{
        alert('Debes seleccionar una mascota')
        return
    }
    seccionMascota.style.display = 'none'

    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionMapa.style.display = 'flex'
    iniciarMapa()
}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://192.168.100.168:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })  
    })
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
           if(ataqueJugador.length === 5) {
            enviarAtaques()
           }
        })
    })
}

function enviarAtaques() {
    fetch(`http://192.168.100.168:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://192.168.100.168:8080/mokepon/${enemigoId}/ataques`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ ataques }) {
                        if (ataques.length === 5) {
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}
    
function seleccionMascotaEnemigo(enemigo) {

    spanMascotaEnemigo.innerHTML  = enemigo.nombre
    insertarImgEnemigo.innerHTML = `<img src=${enemigo.foto}> `
    ataquesMascotaEnemigo = enemigo.ataques
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
    clearInterval(intervalo)

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

        enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

        mokeponesEnemigos.forEach(function(mokepon){
            if(mokepon === undefined) {
                return
            }
            mokepon.pintarMokepon()
            comprobarColision(mokepon)
        })           
}
function enviarPosicion(x, y) {
    fetch(`http://192.168.100.168:8080/mokepon/${jugadorId}/position`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res) {
        if (res.ok) {
            res.json()
                .then(function({ enemigos }){
                    console.log(enemigos);
                    mokeponesEnemigos = enemigos.map(function (enemigo) {
                        let mokeponEnemigo = null
                        if (enemigo.mokepon === undefined) {
                            return
                        }
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if(mokeponNombre === "Hipodoge") {
                            mokeponEnemigo = new Mokepon('Hipodoge', './img/mokepons_mokepon_hipodoge_attack.png', 5, './img/hipodogeH.png', enemigo.id)
                        }else if(mokeponNombre === "Capipepo") {
                            mokeponEnemigo = new Mokepon('Capipepo', './img/mokepons_mokepon_capipepo_attack.png', 5, './img/capipepoH.png', enemigo.id)
                        }else if(mokeponNombre === "Ratigueya") {
                            mokeponEnemigo = new Mokepon('Ratigueya', './img/mokepons_mokepon_ratigueya_attack.png', 5, './img/ratigueyaH.png', enemigo.id)
                        }else if(mokeponNombre === "Camaroncin") {
                            mokeponEnemigo = new Mokepon('Camaroncin', './img/Camaroncin.png', 5, './img/camaroncinH.png', enemigo.id)
                        }else if(mokeponNombre === "Pydos") {
                            mokeponEnemigo = new Mokepon('Pydos', './img/Pydos.png', 5, './img/pydosH.png', enemigo.id)
                        }else if(mokeponNombre === "Turran") {
                            mokeponEnemigo = new Mokepon('Turran', './img/Turran.png', 5, './img/turranH.png', enemigo.id)
                        }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y
                        
                        return mokeponEnemigo

                    })     
                })
        }
    })
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
function comprobarColision(enemigo) {

        if(enemigo.x == undefined || enemigo.y == undefined){
            return
        }
    
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x 
    const derechaEnemigo = enemigo.x + enemigo.ancho
        
    const arribaJugador = 
        mascotaJugadorObjeto.y
    const abajoJugador = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const izquierdaJugador = 
        mascotaJugadorObjeto.x 
    const derechaJugador = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    if(
        abajoJugador < arribaEnemigo ||        
        arribaJugador > abajoEnemigo ||
        derechaJugador < izquierdaEnemigo ||
        izquierdaJugador > derechaEnemigo 
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('se detecto una colision');

    enemigoId = enemigo.id
    seccionAtaque.style.display = 'flex'  
    sectionMapa.style.display = 'none'
    seleccionMascotaEnemigo(enemigo)
}
window.addEventListener('load', iniciarJuego)