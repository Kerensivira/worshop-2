
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterCont from '../Components/footer';
import { Home } from '../Components/Home';
import { Login } from '../Components/Login';
import { Logo } from '../Styles/HomeStyles';



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


