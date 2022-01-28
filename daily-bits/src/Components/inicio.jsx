import React from 'react';
import { Link } from 'react-router-dom';

export const inicio = () => {
    
  return (
  <div>
    <h3>Practica tus conocimientos en la categoría que prefieras.</h3>
    <div> 
      <Link to='/HTML'>HTML<img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380129/workshop-2/HTMLLOGO_rjxhd3.png" alt=" " /></Link>
      <Link to='/CSS' >CSS<img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380233/workshop-2/CssLogo_vpj0p1.png" alt=" " /></Link>
      <Link to="/JS" >JS<img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380340/workshop-2/JsLogo_b5fjti.png" alt=" " /></Link>
    </div>
    
  </div>
  );
};

export default inicio;
