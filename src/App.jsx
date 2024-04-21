import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import Companies from './components/Companies/Companies'
import Popular from './components/Popular/Popular';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import Getstart from './components/GetStart/Getstart';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className='App'>
      <div>
      <Header />
      <Hero />
      </div>
      <Companies/>
<Popular/>
<Value/>
<Contact/>
 <Getstart/>   
   <Footer/>
    </div>
  );
}

export default App;
