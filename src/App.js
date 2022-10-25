import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Sponsor } from "./components/Sponsor";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { Location } from "./components/Location";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Sponsor />
      <ContactUs />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
