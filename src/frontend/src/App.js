import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

function App() {
  return (
    <div className="App">
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h5' >
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
