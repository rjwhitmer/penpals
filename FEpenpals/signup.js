console.log("baller")

const penpalURL = "http://localhost:3000/penpals"
const userURL = "http://localhost:3000/users"

const penpalForm = document.querySelector('#penpal-form')

penpalForm.addEventListener('submit', createPenpal)

function createPenpal(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('name')
    const address = formData.get('address')
    const age = formData.get('age')
    const image = formData.get('image')
    const email = formData.get('email')
    const password = formData.get('password')
    event.target.reset()

    fetch(penpalURL, {
        method: 'POST', 
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            address: address,
            age: age,
            image: image
        })
    })

    fetch(userURL, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            address: address,
            age: age,
            image: image,
            email: email,
            password: password
        })
    })
}