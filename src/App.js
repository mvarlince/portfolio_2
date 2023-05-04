import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';


function App() {
  return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  );
}

export default App;
