import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import RoutesComponent from "./Routes.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesComponent />
    </BrowserRouter>
  );
};

export default App;
