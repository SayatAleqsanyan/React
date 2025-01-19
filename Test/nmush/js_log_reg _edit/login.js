const loginForm = document.querySelector('.login')

const email = document.querySelector('.email')
const password = document.querySelector('.password')

let users = JSON.parse(localStorage.getItem('users')) || []

function login(){
    let user = users.find(u => u.email === email.value && u.password === password.value)

    if(user){
        localStorage.setItem('token', String(Math.random()))


    } else {
        alert('User is not found')
    }
}

loginForm.addEventListener('submit', e => {
    e.preventDefault()
    login()
})

