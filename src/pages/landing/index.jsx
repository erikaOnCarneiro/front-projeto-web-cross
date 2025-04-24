import './index.scss';
import React from 'react';

//imports das seções que estão contidas na página de landing
import Navbar from '../../components/landingComponents/navbar/index.jsx';
import Home from '../../components/landingComponents/home/index.jsx';
import About from '../../components/landingComponents/about/index.jsx';
import Modality from '../../components/landingComponents/modality/index.jsx';
import Schedule from '../../components/landingComponents/schedule/index.jsx';
import Coach from '../../components/landingComponents/coach/index.jsx';
//import Events from '../../components/landingComponents/events/index.jsx';
import Call from '../../components/landingComponents/call/index.jsx';
import Footer from '../../components/landingComponents/footer/index.jsx';


export default function Landing() {
    return (  
        <div>
            <Navbar />
            <Home />
            <About />
            <Modality />
            <Schedule />
            <Coach />
            <Call />
            <Footer />
        </div>  
    );
}