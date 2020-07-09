const urlSearchParams = new URLSearchParams(window.location.search)
const userID = urlSearchParams.get("user")
const penpalURL = "http://localhost:3000/penpals"
const userURL = `http://localhost:3000/users/${userID}`
const userPenpalURL = "http://localhost:3000/user_penpals"

fetch(penpalURL)
    .then(response => response.json())
    .then(showPenpals)

fetch(userURL, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})
    .then(response => response.json())
    .then(getUserID)

    
const penpalCards = document.querySelector('#penpals')

function getUserID(data){
    window.value = data.user.id.toString()
}

function showPenpals(data){
    data.forEach(penpal => {
        renderPenpals(
            penpal.name,
            penpal.address,
            penpal.age,
            penpal.image,
            penpal.letters_sent,
            penpal.letters_received,
            penpal.id)
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

function renderPenpals(name, address, age, image, lettersSent, lettersReceived, id){
    const $div = document.createElement('div')
    const userAddress = document.createElement('p')
    const userAge = document.createElement('p')
    const userLettersSent = document.createElement('p')
    const userLettersReceived = document.createElement('p')
    const userImage = document.createElement('img')
    const addPenpal = document.createElement('button')

    $div.id = "penpal-card"
    $div.innerHTML = `<a>${capitalizeName(name)}</a>`
    userAddress.textContent =`Address: ${address}` 
    userAge.textContent = `Age: ${age}`
    userLettersSent.textContent = `Letters Sent: ${lettersSent}`
    userLettersReceived.textContent = `Letters Received: ${lettersReceived}`
    userImage.src = image

    addPenpal.textContent = `Add This Penpal!`
    addPenpal.value = id

    addPenpal.addEventListener("click", (event => {
        const penpalID = event.target.value
        fetch(userPenpalURL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: window.value,
                penpal_id: penpalID
            })
        })
    }))

    $div.append(userAddress)
    $div.append(userAge)
    $div.append(userLettersSent)
    $div.append(userLettersReceived)
    $div.append(addPenpal)
    penpalCards.append($div)
}

function capitalizeName(name){
    return name[0].toUpperCase() + name.slice(1);
}