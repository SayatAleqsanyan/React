const list = document.querySelector('.list')
let users = JSON.parse(localStorage.getItem('users')) || []
const editacc_back = document.querySelector('.editAcc_back')
const pass_inp = document.querySelector('.pass_inp')
const test_inp = document.querySelector('.name_user')
const pass_subm = document.querySelector('.pass_subm')
const wrongPass = document.querySelector('.wrongPass')
const edit_acc_front = document.querySelector('.edit_acc_front')
const new_username = document.querySelector('.new_username')
const new_email = document.querySelector('.new_email')
const new_password = document.querySelector('.new_password')
const save = document.querySelector('.save')
const close = document.querySelector('.close')
close.addEventListener('click', function () {
    edit_acc_front.classList.add('none')
    edit_acc_front.classList.remove('active')

})
let id = null

wrongPass.classList.add('none')
edit_acc_front.classList.add('none')

editacc_back.classList.add('none')


function get_users(){
    users.forEach(u => {
        const li = document.createElement('li')
        li.textContent = u.name
        list.append(li)


        li.addEventListener('click', function (event){

            id = u.id
            console.log(id)
            let user_index = users.indexOf(u)
            console.log(user_index)
            save.addEventListener('click', function (){

                let users_changed = users.find(el => el.id === id)
                users_changed.name = new_username.value
                users_changed.email = new_email.value
                users_changed.password = new_password.value
                console.log(users_changed)
                users[user_index] = users_changed
                localStorage.removeItem(users)
                localStorage.setItem('users', JSON.stringify(users) )
            })

                editacc_back.classList.remove('none')
                test_inp.textContent = u.name
                editacc_back.classList.add('active')
             pass_subm.addEventListener('click', function () {
                if (u.password === pass_inp.value){
                    editacc_back.classList.add('none')
                    editacc_back.classList.remove('active')
                    wrongPass.classList.add('none')
                    wrongPass.classList.remove('active')
                    edit_acc_front.classList.add('active')
                    edit_acc_front.classList.remove('none')

                    new_username.value = u.name
                    new_email.value = u.email
                    new_password.value = u.password

                }
                else {
                    wrongPass.classList.remove('none')
                    wrongPass.classList.add('active')

                }
             })

        })

    })
}
get_users()

