import './App.css';
import Header from './components/common/Header/Header';
import SideBarMenu from './components/common/SideBarMenu/SideBarMenu';
import PrivacySecurity from './components/screens/Account/PrivacySecurity/PrivacySecurity';

function App() {
  return (

    <div className="app">
      {/* app__nav--active */}

      <Header />
      <SideBarMenu/>
      <PrivacySecurity />

    </div>

  );
}

export default App;
