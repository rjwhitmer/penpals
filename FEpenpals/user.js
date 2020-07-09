const urlSearchParams = new URLSearchParams(window.location.search)
const userID = urlSearchParams.get("user")
const userURL = `http://localhost:3000/users/${userID}`
const penpalURL = 'http://localhost:3000/penpals'
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
    const userAddress = document.createElement('p')
    const userAge = document.createElement('p')
    const userLettersReceived = document.createElement('p')
    const userImage = document.createElement('img')
    const addPenpal = document.createElement('button')

    $div.id = "penpal-card"
    $div.innerHTML = `<a>${capitalizeName(name)}</a>`
    userAddress.textContent =`Address: ${address}` 
    userAge.textContent = `Age: ${age}`
    userLettersReceived.textContent = `Letters Received: ${lettersReceived}`

    addPenpal.textContent = `Send a letter!`
    addPenpal.value = id
    addPenpal.addEventListener('click', sendALetter)

    $div.append(userAddress)
    $div.append(userAge)
    $div.append(userLettersReceived)
    $div.append(addPenpal)
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
    console.log(event.target.value)
}