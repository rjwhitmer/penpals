const urlSearchParams = new URLSearchParams(window.location.search)
const userID = urlSearchParams.get("user")
const userURL = `http://localhost:3000/users/${userID}`
const penpalURL = 'http://localhost:3000/penpals/'
const penpalCards = document.querySelector('#penpals')
const logout = document.querySelector('#logout')

logout.addEventListener('click', userLogout)

fetch(userURL, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})
    .then(response => response.json())
    .then(renderUser)

function renderUser(data){
    showPenpals(data.user.penpals)
}

function showPenpals(data){
    data.forEach(penpal => {
        renderPenpals(
            penpal.name,
            penpal.address,
            penpal.age,
            penpal.image,
            penpal.letters_received,
            penpal.id)
    })
}

function renderPenpals(name, address, age, image, lettersReceived, id){
    const $div = document.createElement('div')
    const $penpalInfoDiv = document.createElement('div')
    const userAddress = document.createElement('p')
    const userAge = document.createElement('p')
    const userLettersReceived = document.createElement('p')
    const userImage = document.createElement('img')
    const sendLetter = document.createElement('button')
    const letterCount = document.createElement('p')

    $div.id = "penpal-card"
    $penpalInfoDiv.id = "penpal-info"
    $penpalInfoDiv.innerHTML = `<p id="penpal-name">${capitalizeName(name)}</p>`
    userAddress.textContent =`Address: ${address}` 
    userAge.textContent = `Age: ${age}`
    letterCount.textContent = lettersReceived
    letterCount.id = "letter-counter"
    userLettersReceived.textContent = `Letters Received: `
    userLettersReceived.append(letterCount)

    sendLetter.textContent = `Send a letter!`
    sendLetter.value = id
    sendLetter.addEventListener('click', sendALetter)

    $penpalInfoDiv.append(userAddress)
    $penpalInfoDiv.append(userAge)
    $penpalInfoDiv.append(userLettersReceived)
    $penpalInfoDiv.append(sendLetter)
    $div.append($penpalInfoDiv)
    penpalCards.append($div)
}

function capitalizeName(name){
    return name[0].toUpperCase() + name.slice(1);
}

function userLogout(event){
    event.preventDefault()
    window.localStorage.clear()
    window.location.href='http://localhost:3001/index.html'
}

function sendALetter(event){
    event.preventDefault()
    const letterCounterNode = event.currentTarget.parentNode
    const letterCounter = letterCounterNode.querySelector('#letter-counter')
    letterCounter.textContent = +(letterCounter.textContent) + 1
    fetch((penpalURL+event.target.value), {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            letters_received: letterCounter.textContent
        })
    })
}