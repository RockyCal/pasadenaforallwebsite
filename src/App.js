import logo from './images/p4a_logo1.png';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';
import TopNavBar from './components/TopNavBar';
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </Link>
        <TopNavBar />
        <ContentContainer />
      </Router>
    </div>
  );
}

export default App;
