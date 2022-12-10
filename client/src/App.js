import { ThemeProvider} from '@mui/material';
import {globalTheme} from './theme/globalTheme';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home";

function App() {
  
  return (
    <ThemeProvider theme={globalTheme} > 
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
