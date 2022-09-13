import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Carlist from './components/Carlist'
import Login from './components/Login'

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
      <Login />
    </div>
  );
}

export default App;
