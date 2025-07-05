import { Link } from 'react-router-dom'
const Profile = () => {
  const email="ejemplo.email@dominio.com"
  return (
    <main className="marco">
      <div className="cart">
        <h1>Profile</h1>
        <p>Email<br/>{email}</p>

        <div className='boton'>
          <Link to="/logout">Cerrar Sesion</Link>
        </div>
      </div>


    </main>
  )
}

export default Profile