import React from 'react';

export const Login = () => {
  const [datos, setDatos] = useState()



  return 
  (<div>

      <Logo>
          <h1>(..)</h1>
          <h3>Daily Bits.</h3>
      </Logo>

      <Iniciar-Sesion>
    <h1>Iniciar Sesión</h1>
          </Iniciar-Sesion>

          <Ingrese-correo>
          <input type="text" pattern=".User@email.com"/>
          <input type="Password" pattern= {6.}/>
          </Ingrese-correo>

          <Olvidar>
           <p>¿Olvidó su contraseña?</p><a href='#'alt="Ingrese aquí."/>
          </Olvidar>

          <Crear-Cuenta>
            <p>Aún no tienes cuenta</p><a href='#' alt="Inscribirse."></a>
          </Crear-Cuenta>

  </div>);



};