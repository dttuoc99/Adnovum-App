import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <UserProfile />
    </div>
  )
}

export default App;