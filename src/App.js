import './App.css';
import { Link } from 'react-router-dom';

export function Dennys(){
  return <>DENNY</> 
}

export function Albertos(){
  return <>ALBERTO</>
}

export function ChicFilA(){
  return <>CHIC-FIL-A</>
}

function App() {
  return (
    <div className="App">
     <h1>HOME</h1>
     <Link to="/dennys">Denny's</Link>
     <Link to="/alberto">Albertos</Link>
     <Link to="/chic-fil-a">Chic-Fil-a</Link>
    </div>
  );
}

export default App;
