
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../Components/Home';
import { Login } from '../Components/login';
import { Logo } from '../Styles/HomeStyles';


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
}


