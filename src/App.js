import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import HomePage from './components/HomePage/HomePage';
import ContactForm from './components/ContactUs/ContactUs';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";




function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/random" component={RandomMeal} />
          <Route exact path="/contactus" component={ContactForm} />
        </Switch>  
      </Router>
      
      
      
      <Footer />
    </div>
  );
}
export default App;