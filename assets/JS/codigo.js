let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src = "./assets/img/gimnasta-min.png">',
        '<img src = "./assets/img/malabarista-min.png">',
        '<img src = "./assets/img/monociclo-min.png">',
        '<img src = "./assets/img/sombrero-de-mago-min.png">',
        '<img src = "./assets/img/tienda-de-circo-min.png">',
        '<img src = "./assets/img/trapecista-min.png">',
        '<img src = "./assets/img/acrobatico-min.png">',
        '<img src = "./assets/img/hula-hoop-min.png">',
        '<img src = "./assets/img/malabares-min.png">',
        '<img src = "./assets/img/payaso-min.png">',
        '<img src = "./assets/img/perro-globo-min.png">',
        '<img src = "./assets/img/zancos-min.png">'
    ]
}

function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <img src = "./assets/img/logoCirco-min.png">
                </div>
            </div>
        </div>`)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 1000);
}
