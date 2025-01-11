const loginBtn = document.querySelector('.logBtn')
const regsiterBtn = document.querySelector('.regBtn')
const loginForm = document.querySelector('#login')
const registerForm = document.querySelector('#register')
const styleBtn = document.querySelector('#btn')

regsiterBtn.addEventListener('click', () => {
  loginForm.style.left = "-400px"
  registerForm.style.left = "50px"
  styleBtn.style.left = "100px"
})

loginBtn.addEventListener('click', () => {
  loginForm.style.left = "50px"
  registerForm.style.left = "-400px"
  styleBtn.style.left = 0
})