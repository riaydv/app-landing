import React from 'react';
import Header from './Component/Header';
import Feature from './Component/Feature';
import About from './Component/About';
import Presentation from './Component/Presentation';
import aboutimage from'./images/Frame 19.png';
import aboutimage1 from'./images/download.png';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
     <Header/> 
     <Feature/>
     <About image={aboutimage} title='comes with all you need for daily life' button='get the app' />
     <Presentation/>
     <About image={aboutimage1} title='Download And Get The App Now' button='Download' />
     <Contact/>
    </div>
  );
}

export default App;