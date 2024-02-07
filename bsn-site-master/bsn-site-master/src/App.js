import './App.scss';
import Home from './sections/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import Footer from './homepage/footer/Footer';
import Wwd from './sections/whatwedo/Wwd';
import Aboutus from './sections/about/Aboutus';
import Www from './sections/wherewework/Www';
import Vacancy from './sections/vacancy/Vacancy';
import Navbar from './constants/Navbar/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/ABOUT US">
            <Aboutus />
          </Route>

          <Route path="/WHAT WE DO">
            <Wwd />
          </Route>

          <Route path="/WHERE WE WORK">
            <Www />
          </Route>

          <Route path="/VACANCY">
            <Vacancy />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
