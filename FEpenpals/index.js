const loginURL = "http://localhost:3000/login"

const loginForm = document.querySelector("#login-form")

loginForm.addEventListener("submit", userLogin)

function userLogin(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')

    fetch(loginURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(response => response.json())
    .then(storeToken)
}

function storeToken(data){
    window.localStorage.setItem('access_token', data.token)
    console.log(window.localStorage)
}