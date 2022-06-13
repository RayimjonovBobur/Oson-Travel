import { Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Page/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

    </div>
  );
}

export default App;
