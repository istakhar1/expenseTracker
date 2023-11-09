import { BrowserRouter as Router,  Link, Routes} from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Components/header";
import AddExpence from "./Pages/add-expense";

function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Header />
      <Routes path='/' element={Home} />

      <Routes path='/add-expense' element={AddExpence} />
      <div>footer</div>

    </Router>


  );
}

export default App;
