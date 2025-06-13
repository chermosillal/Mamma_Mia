import { useState } from "react"
import Swal from "sweetalert2"
import "../assets/css/login-register.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const validarDatos = (e) => {
    e.preventDefault()

    // Validaciones
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios.",
        confirmButtonText: "Aceptar",
        width: "350px"
      })
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Contraseña inválida",
        text: "La contraseña debe tener al menos 6 caracteres.",
        confirmButtonText: "Reintentar",
        width: "350px"
      })
      return;
    }

    // Éxito
    Swal.fire({
      icon: "success",
      title: "¡Inicio de sesión exitoso!",
      text: "Bienvenido a Pizzeria Mamma Mia 🍕",
      confirmButtonText: "Continuar",
      width: "350px", 
    })
  }

  return (
    <div className="marco">
      <div className="login">
        <h2>Login</h2>
        <form class="form" onSubmit={validarDatos}>
          <div class="input-container">
            <i class="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="input-container">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Login
