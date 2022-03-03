import "./styles/styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  AppHeader from './components/AppHeader';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Home/>
    </div>
  );
}

export default App;
