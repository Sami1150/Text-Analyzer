import './App.css';
import Navbar1 from './Components/Navbar1';
import TextForm from './Components/TextForm';

function NavScrollExample() {
  return (
    <>
    <Navbar1 title="Comp based TextUtils" AboutUs="I am About Us"/>
    <div className="container">

    <TextForm heading="Enter Text to analyze"/>

    </div>
    </>
  );
}

export default NavScrollExample;

