const root = document.getElementById("root")

function TodoForm (add) {
    const container = document.createElement("form")

    container.innerHTML = `
        <input type="text" />
        <button>Add Todo</button>
    `

    container.addEventListener("submit", event => {
        event.preventDefault()
        const value = container.querySelector("input").value
        
        add(value)
    })
    
    return container
}

function ListItem (todo, onChange) {
    const container = document.createElement("div")


    container.innerHTML = `
        <label>
            <input type="checkbox" ${todo.completed ? "checked" : ""} />
            ${todo.label}
        </label>
    `

    const input = container.querySelector("input")
    input.addEventListener("change", event => { 
        onChange(event.target.checked)
    })
    
    return container
}

function List (todos, onChange) {
    const container = document.createElement("div")

    todos.map(todo => {
        return ListItem(todo, change => {
            todo.completed = change
            onChange()
        })
    }).forEach(element => {
        container.appendChild(element)
    })

    return container
}

function TodoFooter(todos, onChange) {
    const container = document.createElement("div")
    const completed = todos.filter(todo => todo.completed).length

    container.innerHTML = `
        <span> ${completed} / ${todos.length} Comleted</span>
        <button>Clear Completed</button>
    `
    const btn = container.querySelector("button")
    btn.addEventListener("click", event => {
        onChange(todos.filter(todo => !todo.completed))
    })

    return container
}

function App() {

    let todos = [
        {label: "Hello label 1", completed: false},
        {label: "Hello label 2", completed: false},
        {label: "Hello label 2", completed: false},
    ]
    
    const container = document.createElement("div")

    function render() {
        container.innerHTML = ""

        container.appendChild(TodoForm((newText)=>{
            todos.push({label: newText, completed: false})
            render()
        }))
        
        container.appendChild(List(todos, () => {
            render()
        }))

        container.appendChild(TodoFooter(todos, (newTodos) => {
            todos = newTodos
            render()
        }))
    }

    render()
    return container
}

root.append(App())

