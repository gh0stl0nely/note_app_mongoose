import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginPage, MainPage } from './page';
import WelcomeHeader from './components/WelcomeHeader.js';

function App() {
  return (
    <div className="App">
      <WelcomeHeader />
      <Router>
        <Switch>
          <Route path="/note">
            <MainPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
