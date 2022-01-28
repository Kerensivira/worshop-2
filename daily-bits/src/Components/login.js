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

          <Crear-Cuenta>
          <label for="email" placeholder='Ingresa tu e-mail'></label>

       <input type="email" pattern=".User@email.com" size="30" required>

          </Crear-Cuenta>

  </div>);



};