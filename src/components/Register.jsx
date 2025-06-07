import { useState } from "react"
import Swal from "sweetalert2"
import "../assets/css/login-register.css"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones con alertas de SweetAlert2
    if (!email || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios.",
        confirmButtonText: "Aceptar"
      })
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Contraseña inválida",
        text: "La contraseña debe tener al menos 6 caracteres.",
        confirmButtonText: "Reintentar"
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden.",
        confirmButtonText: "Aceptar"
      })
      return;
    }

    // Éxito
    Swal.fire({
      icon: "success",
      title: "¡Registro exitoso!",
      text: "Bienvenido a Pizzeria Mamma Mia 🍕",
      confirmButtonText: "Continuar"
    })
  };

  return (
    <div class="register">
      <h2>Registro</h2>
      <form class="form" onSubmit={handleSubmit}>
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
        <div class="input-container">
          <i class="fas fa-lock"></i>
          <input 
            type="password" 
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Register