// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// import HomePage from "./components/HomePage";
// import OurServicesPage from "./components/OurServicesPage";

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* <Navbar /> */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/our-services" element={<OurServicesPage />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render the matching child route component */}
    </div>
  );
}

export default App;
