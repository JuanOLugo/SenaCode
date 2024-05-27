import "./src/output.css"
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { addUserOnList } from "./Adduser.js"
import { ciudadesPrincipalesColombia } from "./Citys.js"


const citysAll = ciudadesPrincipalesColombia.map(city => {
  return `<option value="${city}">${city}</option>`
})

const vector = []
const favoriteSongs = []

document.querySelector('#app').innerHTML = `
  <div>
    <h1> Add user Rifa </h1>
    <div class="flex">
    <input type="text" id="name" placeholder="Nombre">
    <br/>
    <input type="text" id="cc" placeholder="Numero de identificacion">
    <br/>
    <div>
    <p>Fecha de nacimiento</p>
    <input type="date" name="" id="date" >
    </div>
    <br/>
    <input type="email" name="" id="mail" placeholder="Correo electronico">
    <br/>
    <select id="city">
      <option value="none">
        Selecciona una ciudad
      </option> 
      ${citysAll}
    </select>
  <div> ${favoriteSongs.length > 1 ? `<button id="send">Send </button>` : "" } </div>
  </div>
`
const date = document.querySelector("#date")
const mail = document.querySelector("#mail")
const id = document.querySelector("#cc")
const name = document.querySelector("#name")
const city = document.querySelector("#city")
//const song = document.querySelector("#song")




document.querySelector("#send").addEventListener("click", () => {
  const user = {
    name: name.value,
    mail: mail.value,
    id: id.value,
    date: date.value,
    city: city.value,
  }

  addUserOnList(user, vector )
})
