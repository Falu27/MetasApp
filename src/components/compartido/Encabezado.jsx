import logo from "../../assets/logo.png";


function Encabezado() {
  

  return (
    <>
    <div className='encabezado'>
        <div >
            <img src={logo} alt="logo" />
            <a href="/">Metas App</a>
        </div>
        <nav>
      <a href="/perfil">Perfil</a>
        </nav>
    </div>
    </>
  )
}

export default Encabezado;