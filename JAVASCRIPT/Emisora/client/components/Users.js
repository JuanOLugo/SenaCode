import "../src/output.css";
import Swal from 'sweetalert2'
export function Users(element) {

  const users = JSON.parse(window.localStorage.getItem("users")).map(e => {
    return (
      `
    <div class="myuser">
    <h2>Usuario: ${e.id}</h2>
      <h1>Nombre: ${e.name}</h1>
      <h1>ciudad: ${e.city}</h1>
      <div class="songs">
      ${e.favoriteSongs.map(i => {
        return (
            `
            <h1>Cancion: ${i.name}</h1>
            <h1>Artista: ${i.cantante}</h1>
            `
          )
        })
      }
      </div>
      <button id="${e.id}" class="b" >Eliminar usuario</button>
    </div>
  `
    )
  })
  
  element.innerHTML = users

  
  JSON.parse(window.localStorage.getItem("users")).map(e => {
    document.getElementById(`${e.id}`).addEventListener("click", (event) => {
      const Myusers =  JSON.parse(window.localStorage.getItem("users"))
      const deleteUser = Myusers.filter(e => e.id != event.target.id)
      window.localStorage.setItem("users", JSON.stringify(deleteUser))
      Swal.fire({
        title: 'USUARIO ELIMINADO',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((oc) => {
        if(oc.isConfirmed){
          window.location.reload()
        }
      })
      
    })
  })


  
}
