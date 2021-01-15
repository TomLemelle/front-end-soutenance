function fetchQrApi(req, bgcolor = '', color = '') {
    let svg = document.getElementById('qr-generate-svg');
    if(svg.onclick) return fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${req}&amp;&format=svg&color=${bgcolor}&color=${color}`)
    else return fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${req}&amp;&format=jpg&color=${bgcolor}&color=${color}`)
}

function generate() {
    let link = document.getElementById('qr-link');
    let bgcolor = document.getElementById('qr-bgcolor');
    let color = document.getElementById('qr-color');
    let svg = document.getElementById('qr-generate-svg');
    let jpg = document.getElementById('qr-generate-jpg');
    let example = document.getElementById('qr-example');
    let exampleText = document.getElementById('example-text');

    if(svg.onclick) {
        png.addEventListener('click', () => {
            fetchQrApi(link.value, bgcolor.value, color.value)
                setTimeout(() => {
                    alert('Chargement de la page...')
                },1500)
                .then(response => {
                    console.log(response.url);
                    example.src = response.url;
                    exampleText.innerText = "Here is your new fresh QrCode !";
    
                }),
                (e) => console.log(e)
        })
    } else {
        jpg.addEventListener('click', () => {
            fetchQrApi(link.value, bgcolor.value, color.value)
                .then(response => {
                    console.log(response.url);
                    example.src = response.url;
                    exampleText.innerText = "Here is your new fresh QrCode !";
    
                })
        })
    }
    
}

generate();