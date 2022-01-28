import React from 'react';

export const Login = () => {


  
  return 
  (<div>

      <Logo>
          <h1>(..)</h1>
          <h3>Daily Bits.</h3>
      </Logo>

      <Iniciar-Sesion>
    <h1>Iniciar Sesión</h1>
          </Iniciar-Sesion>

          <Boton-Google>
          <Link to="#"><Button type='button'>Continuar con Google.</Button></Link> <br></br>
          </Boton-Google>

          <Ingrese-correo>
          <input type="email" pattern=".User@email.com"/>
          </Ingrese-correo>

          <Olvidar>
           <p>¿Olvidó su contraseña?</p><a href='#'alt="Ingrese aquí."/>
          </Olvidar>

          <Crear-Cuenta>
            <p>Aún no tienes cuenta</p><a href='#' alt="Inscribirse."></a>
          </Crear-Cuenta>

  </div>);



};