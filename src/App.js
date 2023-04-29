import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return(
  <div className="flex flex-col gap-5">
    <Navbar />
    <Layout />
    <Footer />
  </div>)
}

export default App;
