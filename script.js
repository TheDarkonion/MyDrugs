const name = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('Log In', (e) => { 
    let messages = []
    if (email.value === ''  || email.value == null) {
        messages.push('email is required')
    }

    if (email.value.length <= 12) {
        messages.push('Email must be longer than 12 charachters.')
    }
    if (email.value.length >= 26) {
        messages.push('Email must be less than 26 charachters.')
    }

    if (password.value.length <= 10) {
        messages.push('Password must be longer than 10 charachters.')
    }

    if (password.value.length >= 35) {
        messages.push('Password must be less than 35 charachters.')
    }

    if (messages.length > 0) {
        e.preventDefault()
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
 }
})
