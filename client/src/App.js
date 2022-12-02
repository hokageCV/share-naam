import { ThemeProvider} from '@mui/material';
import {globalTheme2} from './theme/globalTheme';
import Navbar from './components/Navbar';
import Home from "./pages/Home";

function App() {
  
  return (
    <ThemeProvider theme={globalTheme2} > 
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
