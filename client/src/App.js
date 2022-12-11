import { ThemeProvider} from '@mui/material';
import {globalTheme} from './theme/globalTheme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home";
import Auth from './components/Auth/Auth';

function App() {
  const user = 0;
  
  return (
    <ThemeProvider theme={globalTheme} >
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' 
              element={user ? <Home /> : <Navigate to='/auth' />}
            />
            <Route path='/auth' 
              element={!user ? <Auth /> : <Navigate to='/' />}  
            />
          </Routes>
        </div>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
