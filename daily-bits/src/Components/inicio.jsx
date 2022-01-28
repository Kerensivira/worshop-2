import React from 'react';
import { Link } from 'react-router-dom';
import { Cont, IconoL } from '../Styles/StyledIncio';

export const inicio = () => {
    
  return (
  <Cont>
    <h3>Practica tus conocimientos en la categoría que prefieras.</h3>
    <Elegir> 
      <Link to='/HTML'>HTML<IconoL src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380129/workshop-2/HTMLLOGO_rjxhd3.png" alt=" " /></Link>
      <Link to='/CSS' >CSS<IconoL src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380233/workshop-2/CssLogo_vpj0p1.png" alt=" " /></Link>
      <Link to="/JS" >JS<IconoL src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380340/workshop-2/JsLogo_b5fjti.png" alt=" " /></Link>
    </Elegir>
    
  </Cont>
  );
};

export default inicio;
