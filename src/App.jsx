import { useEffect, useState } from "react";
import { HashRouter,Route,Routes } from "react-router-dom";
// import componets
import Header from './assets/components/header/Header'
import Home from "./assets/pages/home";
import NoticesViews from "./assets/components/views/home/NoticesViews";
import EventsViews from "./assets/components/views/home/EventsViews";
import Footer from "./assets/components/footer/Footer";
import MundialViews from "./assets/components/views/home/MundialViews";
import Store from "./assets/pages/store";
import SingleProduct from "./assets/components/store/SingleProduct";
import RegistrationForm from "./assets/pages/RegistrationForm";
import About from "./assets/pages/about";
import Calendar from "./assets/pages/calendar/Calendar";
import Tournaments from "./assets/pages/tournaments";
import TournamentsViews from "./assets/components/views/home/TournamentsViews";
import TournamentsViews_masculine from "./assets/components/views/home/TournamentsViews_masculine";
import TournamentsViews_female from "./assets/components/views/home/TournamentsViews_female";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className=" ">
    <HashRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home mode="wait" />} />

      {/* ABOUT */}
      <Route path="/About" element={<About/>} />
      {/* CALENDAR */}
      <Route path="/Calendar" element={<Calendar/>} />
      {/* STORE */}
      <Route path="/Store" element={<Store/>} />
      <Route path="/Store/SingleProduct/:id" element={<SingleProduct/>} />

      {/* TOURNAMENT */}
      <Route path="/Tournaments" element={<Tournaments/>} />

      {/* VIEWS */}
      <Route path="/NoticesViews/:id" element={<NoticesViews/>} />
      <Route path="/EventsViews/:id" element={<EventsViews/>} />
      <Route path="/MundialViews/:id" element={<MundialViews/>} />
      <Route path="/TournamentsViews/:id" element={<TournamentsViews/>} />

      <Route path="/TournamentsViews_masculine" element={<TournamentsViews_masculine/>} />
      <Route path="/TournamentsViews_female" element={<TournamentsViews_female/>} />


    
      

      {/* Registration Form */}
      <Route path="/EventViews/:id/RegistrationForm" element={<RegistrationForm/>} />

      </Routes>
      <Footer/>
    </HashRouter>
  </div>;
}

export default App;
