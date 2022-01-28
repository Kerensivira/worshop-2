
<<<<<<< HEAD
import { BrowserRouter, Routes } from 'react-router-dom';
=======
import { BrowserRouter, Route } from 'react-router-dom';
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
>>>>>>> 27351bd1962eb2c41ecd76eb6490a7e00450d6ec
}

>>>>>>> f9114be8a3fb0397c3d637ca09d8fce85215175b

}