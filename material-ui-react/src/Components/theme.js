import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, yellow, red, green, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        /* background: {
            default: "#D9DDDC"
          }, */
        //["initial","inherit","primary","secondary","textPrimary","textSecondary","error"]
      primary: {
        main: yellow[800],
      },
      secondary: {
        main: blue[500],
      },
      error: {
        main: orange[500],
      },
      warning: {
        main: red[500],
      },
    },
  });
  
export default theme;