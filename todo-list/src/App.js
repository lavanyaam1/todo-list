import './App.css';
import{BrowserRouter as Router} from "react-router-dom";
import AppRoute from "./routes/AppRoute"
function App() {
  return (
    <div className="App">
      <Router>
        <AppRoute/>
      </Router>
    </div>
  );
}

export default App;
