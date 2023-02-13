import HomePage from "./component/HomePage";
import "./App.css";
import MultipleCards from "./component/multipleCards";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "./component/aboutUs";
import { TablePagination } from "@mui/material";
import Tag from "./component/tag"
import Analytics from "./component/analytics";
import Tracking from "./component/tracking";

function App() {
  return (
    
    // <div className="App">
     
    //   <HomePage />
    // </div>
    <BrowserRouter>
      
       <main className="py-1">
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutUs  />} />
            <Route path="/cards" element={<MultipleCards  />} />
            <Route path="/tag" element={<Tag  />} />
            <Route path="/analytics" element={<Analytics  />} />
            <Route path="/tracking" element={<Tracking  />} />

        </Routes>
      
      </main>
    </BrowserRouter>
   
  );
}

export default App;
