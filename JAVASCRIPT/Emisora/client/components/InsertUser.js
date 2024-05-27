import "../src/output.css";
import { ciudadesPrincipalesColombia } from "../Citys.js";
import Swal from "sweetalert2";

export function InsertUser(element) {
  const citysAll = ciudadesPrincipalesColombia.map((city) => {
    return `<option value="${city}">${city}</option>`;
  });

  if (!window.localStorage.getItem("users"))
    window.localStorage.setItem("users", "[]");

  let favoriteSongs = [];
  let fullUsers = {};

  element.innerHTML = `
      <section>
      <h1 class="font-bold text-3xl"> Add user Rifa </h1>
      <div class="">
      <input required type="text" id="name" placeholder="Nombre">
      <br/>
      <input required type="text" id="cc" placeholder="Numero de identificacion">
      <br/>
      <div>
      <p>Fecha de nacimiento</p>
      <input required type="date" name="" id="date" >
      </div>
      <br/>
      <input required type="mail" name="" id="mail" placeholder="Correo electronico">
      <br/>
      <select id="city">
        <option value="none">
          Selecciona una ciudad
        </option> 
        ${citysAll}
      </select>
    <div > 
    <button id="send">Send</button>
      </section>
      <section class="shadow-xl"> 
      <div>
      <h1 class="font-bold text-3xl"> Cancion favorita </h1>
      <div class="">
          <input required type="text" id="nameed" placeholder="Nombre de la cancion" class="placeholder:text-black" >
          <br/>
          <input required type="text" id="cantante" placeholder="Cantante" class="placeholder:text-black">
          <br/>
          <button id="go">Añadir cancion</button>
      <div>
      
      
  </div>
      </section>


    
  `;
  
    document.querySelector("#send").addEventListener("click", () => {
      if (
        document.querySelector("#name").value === "" ||
        document.querySelector("#mail").value === "" || 
        document.querySelector("#cc").value === "" ||
        document.querySelector("#date").value === "" ||
        document.querySelector("#city").value === "none" ||
        document.getElementById("nameed").value === "" ||
        document.getElementById("cantante").value === ""
      ) {
        return Swal.fire({
          title: "Ingresa texto o elige un valor las cacillas 😁",
          icon: "error",
          confirmButtonText: "OK",
        });
      } 

      let user = {
        name: document.querySelector("#name").value,
        mail: document.querySelector("#mail").value,
        id: document.querySelector("#cc").value,
        date: document.querySelector("#date").value,
        city: document.querySelector("#city").value,
      };
      let myUsers = window.localStorage.getItem("users");
      myUsers = JSON.parse(myUsers);
      console.log(myUsers);
      if (!favoriteSongs || favoriteSongs.length < 1)
        return Swal.fire({
          title: "Agrega canciones favoritas 🎵",
          icon: "error",
          confirmButtonText: "OK",
        });
      if (!user) return Swal.fire({
        title: "Sin usuario 🙁",
        icon: "error",
        confirmButtonText: "OK",
      });;
      const verifyUserExist = myUsers.find((userV) => userV.id === user.id);
      if (verifyUserExist) return Swal.fire({
        title: "Este usuario ya existe 🙁",
        icon: "error",
        confirmButtonText: "OK",
      });

      console.log(myUsers);
      if (myUsers.length > 5) return Swal.fire({
        title: "Muchos usuarios 😮‍💨",
        icon: "error",
        confirmButtonText: "OK",
      });

      if (myUsers.length === 0) {
        console.log(1);
        myUsers.push({ ...user, favoriteSongs: [...favoriteSongs] });
        window.localStorage.setItem("users", JSON.stringify(myUsers));
      } else if (myUsers.length > 0) {
        console.log(2);
        myUsers.push({ ...user, favoriteSongs: [...favoriteSongs] });
        window.localStorage.setItem("users", JSON.stringify(myUsers));
      }

      favoriteSongs = [];
      user = {};

      Swal.fire({
        title: "Usuario creado correctamente",
        icon: "success",
        confirmButtonText: "OK",
      }).then(cc => cc.isConfirmed ? window.location.reload() : window.location.reload() )

      
    });

    document.getElementById("go").addEventListener("click", () => {
      if (
        document.getElementById("nameed").value === "" ||
        document.getElementById("cantante").value === ""
      ) {
        return Swal.fire({
          title: "Ingresa texto o elige un valor las cacillas 😁",
          icon: "error",
          confirmButtonText: "OK",
        });
      } 
      const favoriteSong = {
        name: document.getElementById("nameed").value,
        cantante: document.getElementById("cantante").value,
      };
      if (favoriteSongs.length === 3) return Swal.fire({
        title: "Solo 3 canciones favoritas 😃",
        icon: "error",
        confirmButtonText: "OK",
      });
      favoriteSongs.push(favoriteSong);
      console.log(favoriteSongs);
    });

    return {
      fullUsers,
      favoriteSongs,
    };
  
}
