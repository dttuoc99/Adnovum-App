import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import NavBar from "./components/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <h1>React bootstrap test</h1>
      <AboutPage></AboutPage>
    </div>
  )
}

export default App;