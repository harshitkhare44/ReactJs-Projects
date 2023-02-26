// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';

// let name="Harshit"
function App() {
  return (
    <>
  
<Navbar title="TextUtils" aboutText="About TextUtils" />
<div className='container'>
<TextForm heading="Enter the text to analyze"/>
{/* <About/> */}
</div>

    </>

  );
}

export default App;
