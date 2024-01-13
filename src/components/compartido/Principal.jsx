
function Principal({ Children }) {
  

    return (
      <>
        <sidenav>
            <a href="/lista">Lista</a>
            <a href="/crear">Crear</a>
        </sidenav>
        <main>
            {Children}
        </main>
      </>
    )
  }
  
  export default Principal;