import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import "./index.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
