import { Outlet } from "react-router-dom";
import "./App.scss";
import NavContainer from "./containers/NavContainer/NavContainer";

function App() {
  return (
    <div className="App">
      <NavContainer />
      <Outlet />
    </div>
  );
}

export default App;
