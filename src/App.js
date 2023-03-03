import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import {Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div>
      <Link to="/Page1">Page 1 </Link> 
      <Link to="/Page2">Page 2 </Link>  

{/* 1) to route between page we need to add browse router in index.js */}
{/* 2) Define Routes and Route below or above the code which indicate that to where you have to go with that page tag */}
{/* 3) use link to tag to travel to next page */}

        <Routes>
          <Route exact path='/Page1' element={<Page1/>}></Route>
          <Route exact path='/Page2' element={<Page2/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
