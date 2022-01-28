import React from "react";
import { Logo, Iniciar, Ingrese, Olvidar, CrearCuenta} from "../Styles/HomeStyles";

export const Login = () => {
<<<<<<< HEAD
  return(

<div>
    <Logo>
      <h1>(..)</h1>
      <h3>Daily Bits.</h3>
    </Logo>
=======
  const [datos, setDatos] = useState()
>>>>>>> f9114be8a3fb0397c3d637ca09d8fce85215175b

    <Iniciar>
      <h1>Iniciar Sesión</h1>
    </Iniciar>

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
