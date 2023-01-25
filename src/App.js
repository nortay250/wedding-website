import Bridegroom from "./components/Bridegroom";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Organization from "./components/Organization";
import RSVP from "./components/RSVP";
import Sidebar from "./components/Sidebar";
import Story from "./components/Story";

function App() {
  return (
    <>
      <Sidebar />
      <div id="oliven-main">
        <Header />
        <Bridegroom />
        <Countdown />
        <Story />
        <Organization />
        <Gallery />
        <RSVP />
        <Footer />
      </div>
    </>
  );
}

export default App;
