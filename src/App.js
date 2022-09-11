import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainPage } from './mainPage/MainPage';
import { Market } from './market/Market';
import { Nav } from './util/Nav'
import { Footer } from './util/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainPage />
      {/* <Market /> */}
      <Footer />
    </div>
  );
}

export default App;
