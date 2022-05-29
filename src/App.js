import '../node_modules/swiper/swiper.min.css'
import './assets/boxicons-2.1.2/css/boxicons.min.css'
import './App.scss'

import {BrowserRouter, Route } from "react-router-dom";

import Header from './componenets/header/Header';
import Footer from './componenets/footer/Footer';

import Routes from './config/Routes';


function App() {
  return (
    <BrowserRouter>
      <Route render={props => (
        <>
          <Header {...props}/>
          <Routes/>
          <Footer/>
        </>
      )}></Route>
    </BrowserRouter>
  );
}

export default App;