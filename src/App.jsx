import './index.css';
import CoinTable from "./components/CoinTable/CoinTable.jsx";
import NavBar from './components/NavBar/Navbar.jsx';
import Banner from './components/Banner/Banner.jsx';
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <CoinTable />
    </>

  );
}
export default App;