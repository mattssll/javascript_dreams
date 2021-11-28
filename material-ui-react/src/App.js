import SignIn from './Components/SignIn/SignIn'
import theme from './Components/theme'
import { blue, yellow, red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import background from "./resources/backgroundlight.jpg";
//import background from "./resources/background.jpg";
import './App.css';





function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <MuiThemeProvider theme={theme}>
    <div>
    <Typography component="h1" variant="h2" align="center" color="primary">
          Vectux Analytics </Typography> </div>
         
    <SignIn />
  
    </MuiThemeProvider>
    </div>
    
  );
}





export default App;



