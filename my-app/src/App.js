import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      <Sidebar/>
      <NavBarSimple/>
     
      {/* <StatefulGreeting/> */}
    </div>
  );
}

export default App;