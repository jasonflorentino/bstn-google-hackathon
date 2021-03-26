import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";
import MobileDemo from "./pages/MobileDemo/MobileDemo";
import Nav from "./components/Nav/Nav";

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/landingPage" component={LandingPage} />
          <Route path="/mobileDemo" component={MobileDemo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
