import './App.css';
import Home from './Components/Pages/Homes/Home';
import Header from './Components/Pages/Reusables/Header/Header';
import Footer from './Components/Pages/Reusables/Footer/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

function App() {
  return ((
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  ))
}

export default App;
