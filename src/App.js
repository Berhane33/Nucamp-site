import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container, Navbar, NavbarBrand } from "reactstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
