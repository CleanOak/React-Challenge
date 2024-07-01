import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import StatefulGreeting from './components/StatefulGreeting';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunction from './components/ConditionalRenderingFunction';

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar/>
      <NavBarSimple/> */}
      {/* <StatefulGreeting/> */}
        <ConditionalRenderingClass/>
        <ConditionalRenderingFunction connected={false}/>
    </div>
  );
}

export default App;