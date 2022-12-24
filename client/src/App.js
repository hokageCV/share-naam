import { ThemeProvider} from '@mui/material';
import {globalTheme} from './theme/globalTheme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home";
import Auth from './components/Auth/Auth';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  // const {user} = useAuthContext();
  
  return (
    <ThemeProvider theme={globalTheme} >
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/'
              element={<Navigate to='/posts' />}
            />
            <Route path='/posts' 
              element={<Home />}
            />
            <Route path='/auth' 
              element={<Auth /> }  
            />
            {/* <Route path='/posts' 
              element={user ? <Home /> : <Navigate to='/auth' />}
            />
            <Route path='/auth' 
              element={!user ? <Auth /> : <Navigate to='/' />}  
            /> */}
          </Routes>
        </div>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
