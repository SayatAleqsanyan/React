const registerForm = document.querySelector(".register");

const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    if (username.value && email.value && password.value) {
        let newUser = {
            id: Math.random(),
            name: username.value,
            email: email.value,
            password: password.value,
        };

        users = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(users));
    }
    username.value = "";
    email.value = "";
    password.value = "";
}

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    register();
});
