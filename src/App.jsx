import { ThemeProvider } from "./components/themesPages/themePage";
import { AppRoutes } from "./pages/routes/routes";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
