import "../src/output.css";
import Swal from 'sweetalert2'

export function Rifa(element) {
  const users = JSON.parse(window.localStorage.getItem("users"));

    if(users.length > 1) {
        element.innerHTML = `
  
        <h1>
            <button id="rifar" class="btn-rifa">
                Rifar
            </button>
    
            
        </h1>
      `;

      document.getElementById("rifar").addEventListener("click", () => {
        const user = users[Math.floor(Math.random() * users.length)];
        Swal.fire({
            title: 'EL GANADOR DE LA RIFA',
            text: user.name,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
      })
    }

  


}
