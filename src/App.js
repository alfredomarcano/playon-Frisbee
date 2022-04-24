import "./App.css";
import { Teams } from "./Elements/Teams/Teams";
import { Competitions } from "./Elements/Competitions/Competitions";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Elements/Header";
import { Champions } from "./Elements/Champions/Champions";
import { Footer } from "./Elements/Footer";
import { NavBar } from './Elements/navBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container90">
        <Champions />
        <Header />
        <Teams />
        <Competitions />
        </div>
      <Footer />
    </>
  );
}

export default App;
