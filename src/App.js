import './App.scss';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

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
            )}/>
    </BrowserRouter>
  );
}

export default App;
