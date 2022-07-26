import logo from './logo.svg';
import './App.css';
import Counts from './components/Counts';

function App() {
  return (
    <div className="App">
      <h3>Welcome to Redux</h3>
      <Counts></Counts>
    </div>
  );
}

export default App;

/* 
1. install packages
2. constants define
3. async action creator 
4. reducer
5. Create store
6. provide store
7. use store
8. adding css
*/