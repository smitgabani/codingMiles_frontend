import './styles/App.css';
import { Header, Account, Login, Register, UserProfile } from './components/layout';
import Home from "./pages/Home"
import {
  Routes,
  Route,
} from "react-router-dom";
import Verify from './components/layout/Verify';

function App() {

  return (
    <Account>
    <div className="App">
      <Header/>
      <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/verify" element={<Verify/>} />
            <Route path="/user/:id" element={<UserProfile/>}/>
      </Routes>
    </div>
    </Account>
  );
}

export default App;
