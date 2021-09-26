import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Countrypage from "./pages/Countrypage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Route path="/" component={Homepage} exact />
      <Route path="/country/:id" component={Countrypage} />
      <Footer />
    </Router>
  );
}

export default App;
