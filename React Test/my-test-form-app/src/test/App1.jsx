// import { useEfect, useState } from 'react'

// function App() {

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [password2, setPassword2] = useState('')

//   const [nameDirety, setNameDirety] = useState(false)
//   const [emailDirety, setEmailDirety] = useState(false)
//   const [passwordDirety, setPasswordDirety] = useState(false)
//   const [password2Direty, setPassword2Direty] = useState(false)

//   const [nameError, setNameError] = useState('name not valid')
//   const [emailError, setEmailError] = useState('email not valid')
//   const [passwordError, setPasswordError] = useState('password not valid')
//   const [password2Error, setPassword2Error] = useState('password not valid')

//   const [formValid, setFormValid] = useState(false)

//   useEfect(() => { 
//     if (nameError || emailError || passwordError || password2Error) 
//       setFormValid(false)
//     else
//       setFormValid(true)
//   },)

//   const nameHandler = (e) => {
//     setName(e.target.value)
//     const re = /^[a-zA-Z]{5,15}$/;
//     if (re.test(e.target.value)) {
//       setNameError('')
//     } else {
//       setNameError('name not valid')
//     }
//   }

//   const emailHandler = (e) => {
//     setEmail(e.target.value)
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (re.test(e.target.value)) {
//       setEmailError('')
//     } else {
//       setEmailError('email not valid')
//     }
//   }

//   const passwordHandler = (e) => {
//     setPassword(e.target.value)
//     const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,15}$/
//     if (re.test(e.target.value)) {
//       setPasswordError('')
//     } else {
//       setPasswordError('password not valid')
//     }
//   }

//   const password2Handler = (e) => {
//     setPassword2(e.target.value)
//     if (e.target.value === password) {
//       setPassword2Error('')
//     } else {
//       setPassword2Error('password not valid')
//     }
//   }

//   const blurHandler = (e) => {
//     switch(e.target.name) {
//       case 'name':
//         setNameDirety(true)
//         break
//       case 'email':
//         setEmailDirety(true)
//         break
//       case 'password':
//         setPasswordDirety(true)
//         break
//       case 'password2':
//         setPassword2Direty(true)
//         break
//     }
//   }

//   return (
//     <div className="App">
//       <form className="container">
//         <h1>Test Registr</h1>
//         {(nameDirety && nameError) && <div className="error">{nameError}</div>}
//         <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name="name" type="text" placeholder="Your name..."/>
//         {(emailDirety && emailError) && <div className="error">{emailError}</div>}
//         <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="email" placeholder="Your email..."/>
//         {(passwordDirety && passwordError) && <div className="error">{passwordError}</div>}
//         <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Your password..."/>
//         {(password2Direty && password2Error) && <div className="error">{password2Error}</div>}
//         <input onChange={e => password2Handler(e)} value={password2} onBlur={e => blurHandler(e)} name='password2' type="password" placeholder="Your password..."/>
//         <button disabled={!formValid} type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
