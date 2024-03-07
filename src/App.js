import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
