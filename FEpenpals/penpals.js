const penpalURL = "http://localhost:3000/penpals"

fetch(penpalURL)
    .then(response => response.json())
    .then(showPenpals)

const penpalCards = document.querySelector('#penpals')

function showPenpals(data){
    data.forEach(penpal => {
        renderPenpals(
            penpal.name,
            penpal.address,
            penpal.age,
            penpal.image,
            penpal.letters_sent,
            penpal.letters_received)
    })
}

function renderImage(event){
    if (event.target.files) {
        console.log(event.target.files)
        let src = URL.createObjectURL(event.target.files[0])
        let srcURL = HTMLMediaElement.src
        let preview = document.querySelector("#file-input-preview")
        preview.src = src
    }
    renderRemoveImageButton()
}

function renderRemoveImageButton(){
    const deleteButton = document.createElement('button')
    const imageDiv = document.querySelector('#preview')

    deleteButton.textContent = "Remove Image"

    imageDiv.appendChild(deleteButton)
    deleteButton.addEventListener('click', () => {
        event.target.parentNode.remove()
    })
}

function renderPenpals(name, address, age, image, lettersSent, lettersReceived){
    const $div = document.createElement('div')
    const userAddress = document.createElement('p')
    const userAge = document.createElement('p')
    const userLettersSent = document.createElement('p')
    const userLettersReceived = document.createElement('p')
    const userImage = document.createElement('img')

    $div.id = "penpal-card"
    $div.innerHTML = `<a>${capitalizeName(name)}</a>`
    userAddress.textContent =`Address: ${address}` 
    userAge.textContent = `Age: ${age}`
    userLettersSent.textContent = `Letters Sent: ${lettersSent}`
    userLettersReceived.textContent = `Letters Received: ${lettersReceived}`
    userImage.src = image

    $div.append(userAddress)
    $div.append(userAge)
    $div.append(userLettersSent)
    $div.append(userLettersReceived)
    penpalCards.append($div)
}

function capitalizeName(name){
    return name[0].toUpperCase() + name.slice(1);
}