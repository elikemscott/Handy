import './Css/main.css'
import './App.css';
import Carousel from './component/Carousel';
import Navbar from './component/Navbar';
import Body from './component/Body';
import Parallax from './component/Parallax';
import Footer from './component/Footer';


function App() {
  
  
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Body/>
      <Parallax/>
      <Footer/>

    </div>
  );
}




export default App;
