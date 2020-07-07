const baseURL = "http://localhost:3000/users"

fetch(baseURL)
    .then(response => response.json())
    .then(showPenpals)

const penpals = document.querySelector('#penpals')
const penpalList = document.querySelector('#penpal-list')

function showPenpals(users){
    users[0].penpals.forEach(penpal => {
        const $li = document.createElement('li')

        $li.textContent = penpal.name

        penpalList.append($li)
        penpals.append(penpalList)
    })
}