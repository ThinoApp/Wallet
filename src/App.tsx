import { Outlet } from "react-router-dom";
import "./App.scss";
import NavContainer from "./containers/NavContainer/NavContainer";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App">
        <NavContainer />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
