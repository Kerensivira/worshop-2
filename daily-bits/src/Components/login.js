import React from "react";
import { Logo, Iniciar, Ingrese, Olvidar, CrearCuenta} from "../Styles/HomeStyles";

export const Login = () => {
  const [datos, setDatos] = useState()

<<<<<<< HEAD


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
=======
  return(
>>>>>>> 95acde89b509550516f89033189f97d73a20f7a4

    <Ingrese>
      <input type="email" pattern=".User@email.com" />
      <input type="Password" pattern={6} />
    </Ingrese>

    <Olvidar>
      <p>¿Olvidó su contraseña?</p>
      <a href="#" alt="Ingrese aquí." />
    </Olvidar>

    <CrearCuenta>
      <p>Aún no tienes cuenta</p>
      <a href="#" alt="Inscribirse."></a>
    </CrearCuenta>
  </div>
  
  )
  
};
