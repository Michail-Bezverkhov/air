import './App.css';
import profileIcon from './assets/img/profile_icon.svg';
import burgerIcon from './assets/img/burger_icon.svg';
import PrivacySecurity from './components/screens/Account/PrivacySecurity/PrivacySecurity';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <a className="app__header-logo" href="/">
          <img src='logo.svg' alt='logo'/>
        </a>

        <div className="app__nav">
          <button className="app__nav-profile">
            <img src={profileIcon} alt="profile"/>
          </button>
          <button className="app__nav-profile">
            <img src={burgerIcon} alt="burger menu"/>
          </button>
        </div>
      </header>

     <PrivacySecurity/>

    </div>
  );
}

export default App;
