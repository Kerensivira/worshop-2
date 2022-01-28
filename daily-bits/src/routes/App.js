
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../Components/Home';
import { Login } from '../Components/login';
import { Logo } from '../Styles/HomeStyles';


<<<<<<< HEAD
export const App = () => {
      return (
            <div className="App">
                  <BrowserRouter>
                        <Routes>
                              <Login />
                              <Home />
                              <Logo />
                        </Routes>
                  </BrowserRouter>
            </div>
      );
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


