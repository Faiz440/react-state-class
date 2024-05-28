import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import WebPage from "./Webpage";
// import Caret from "./Caret";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
// import Example from "./Example";
// import Ticket from "./Ticket";
// import Lottery from "./Lottery";
// import TicketNum ?from "./TicketNum";
// import Test from "./test"; // Corrected import name
// import ParentComponent from "./examp";
// import MyComponent from "./Api.jsx";
// import  AddCart from "./AddCart";
// import Additms1 from "./Additms1";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
      {/* <WebPage/> */}
      {/* <Example/> */}
      {/* <Caret /> */}
      {/* <h1>Start in React</h1> */}
      {/* <Test /> se Test instead of abc */}
      {/* <ParentComponent /> */}
      {/* <Lottery/> */}
      {/* <TicketNum num={5}/> */}
      {/* <Ticket Ticket={[0, 1, 2]} /> */}
      {/* <AddCart /> */}
      {/* <Additms1/> */}
    </BrowserRouter>
  );
}

export default App;
