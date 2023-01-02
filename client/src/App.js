import { ThemeProvider, Box} from '@mui/material';
import {globalTheme} from './theme/globalTheme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home";
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import Footer from './components/Footer/Footer';

function App() {
  const localuser = localStorage.getItem('user');
  
  return (
    <ThemeProvider theme={globalTheme} >
      <BrowserRouter>
        <div className="App">

          <Box className='notForFooter' sx={{minHeight: 'calc(100vh - 51px)'}}>
            <Navbar />
            <Routes>
              <Route path='/'
                element={<Navigate to='/posts' />}
              />
              <Route path='/posts' 
                element={<Home />}
              />
              <Route path='/posts/search' 
                element={<Home />}
              />
              <Route path='/posts/:id' 
                element={<PostDetails />}
              />
              <Route path='/auth' 
                element={!localuser ? <Auth /> : <Navigate to='/posts' />}  
              />
            </Routes>
          </Box>

          <Box className='forFooter' sx={{position:'relative', bottom:'0', left:'0'}}>
            <Footer />
          </Box>

        </div>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
