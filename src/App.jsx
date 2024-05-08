
import { ThemeProvider } from "./components/themesPages/themePage";
import { AppRoutes } from "./pages/routes/routes";
import { GlobalStyle } from './style/globalStyle';



function App() {
  return (
    
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
   

  );
}

export default App;
