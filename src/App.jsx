import React, { useEffect, lazy, Suspense } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./assets/components/LoadingScreen";
import Results from "./assets/components/Results";
import Rules from "./assets/pages/rules";

// Importa componentes de forma diferida
const Header = lazy(() => import('./assets/components/header/Header'));
const Home = lazy(() => import("./assets/pages/home"));
const NoticesViews = lazy(() => import("./assets/components/views/home/NoticesViews"));
const Footer = lazy(() => import('./assets/components/footer/Footer'));
const MundialViews = lazy(() => import("./assets/components/views/home/MundialViews"));
const Store = lazy(() => import("./assets/pages/store"));
const SingleProduct = lazy(() => import("./assets/components/store/SingleProduct"));
const RegistrationForm = lazy(() => import("./assets/pages/RegistrationForm"));
const About = lazy(() => import("./assets/pages/about"));
const Calendar = lazy(() => import("./assets/pages/calendar/Calendar"));
const Tournaments = lazy(() => import("./assets/pages/tournaments"));
const TournamentsViews = lazy(() => import("./assets/components/views/home/TournamentsViews"));
const TournamentsViews_masculine = lazy(() => import("./assets/components/views/home/TournamentsViews_masculine"));
const TournamentsViews_female = lazy(() => import("./assets/components/views/home/TournamentsViews_female"));
const TournamentsForm = lazy(() => import("./assets/components/TournamentsForm"));

// Definición de variantes y transición
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeInOut" } }
};

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper component={<Home />} />} />
        <Route path="/About" element={<PageWrapper component={<About />} />} />
        <Route path="/Calendar" element={<PageWrapper component={<Calendar />} />} />
        <Route path="/Store" element={<PageWrapper component={<Store />} />} />
        <Route path="/Store/SingleProduct/:id" element={<PageWrapper component={<SingleProduct />} />} />
        <Route path="/Tournaments" element={<PageWrapper component={<Tournaments />} />} />
        <Route path="/NoticesViews/:id" element={<PageWrapper component={<NoticesViews />} />} />
        <Route path="/MundialViews/:id" element={<PageWrapper component={<MundialViews />} />} />
        <Route path="/TournamentsViews/:id" element={<PageWrapper component={<TournamentsViews />} />} />
        <Route path="/TournamentsViews_masculine" element={<PageWrapper component={<TournamentsViews_masculine />} />} />
        <Route path="/TournamentsViews_female" element={<PageWrapper component={<TournamentsViews_female />} />} />
        <Route path="/TournamentsForm" element={<PageWrapper component={<TournamentsForm />} />} />
        <Route path="/Results" element={<PageWrapper component={<Results />} />} />
        <Route path="/Rules" element={<PageWrapper component={<Rules />} />} />
        <Route path="/RegistrationForm" element={<PageWrapper component={<RegistrationForm />} />} />

      </Routes>
    </AnimatePresence>
  );
};

// Componente envoltorio para aplicar animaciones
const PageWrapper = ({ component }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
    {component}
  </motion.div>
);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="App">
        <HashRouter>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </HashRouter>
      </div>
    </Suspense>
  );
}

export default App;
