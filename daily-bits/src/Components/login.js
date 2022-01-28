import React from "react";
import { Logo, Iniciar, Ingrese, Olvidar, CrearCuenta} from "../Styles/HomeStyles";

export const Login = () => {
  const [datos, setDatos] = useState()

  return(

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
