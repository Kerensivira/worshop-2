
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter, Routes } from 'react-router-dom';
=======
import { BrowserRouter, Route } from 'react-router-dom';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> b00231973c70fff050a3718407a21cd7d367958b
import FooterCont from '../Components/footer';
>>>>>>> f9114be8a3fb0397c3d637ca09d8fce85215175b
import { Home } from '../Components/Home';
import { Login } from '../Components/Login';
import { Logo } from '../Styles/HomeStyles';

<<<<<<< HEAD
=======


>>>>>>> f9114be8a3fb0397c3d637ca09d8fce85215175b
export const App = () => {
      return (
            <div className="App">
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" />
                              <Login />
                              <Home />
                              <Logo />
                        </Routes>
                        <FooterCont />
                  </BrowserRouter>
            </div>
      );
<<<<<<< HEAD
=======

function App() {
  return (
    <div className="App">
      <Login />
      <Home />
      <Logo/>
    </div>
  );

<<<<<<< HEAD
}

}
=======
>>>>>>> f9114be8a3fb0397c3d637ca09d8fce85215175b

}
>>>>>>> 95acde89b509550516f89033189f97d73a20f7a4
