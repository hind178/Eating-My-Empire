import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; 
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import HomePage from './components/HomePage/HomePage';
import LoginButton from './components/Contact/LoginButton';
import LogoutButton from './components/Contact/LogoutButton';
import Profile from './components/Contact/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import  'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/random" component={RandomMeal}/>
        <Route exact path="/login" component={LoginButton}/>
       
  
      </Switch>
      <LogoutButton /> <Profile />
      </Router>
 
  <Footer />
    </div>
    
  );

}

export default App;
