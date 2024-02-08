import AdmissionMain from "./components/AdmissionProcess/AdmissionMain";
import MessageMain from "./components/Message/MessageMain";
import InnerMain from "./components/PrincipalMessage/InnerMain";
import SubMenuMain from "./components/SubMenu/SubMenuMain";
import ViceMain from "./components/VicePrincipal/ViceMain";
import AboutMain from "./components/about/AboutMain";
import FeeMain from "./components/FeeStructure/FeeMain";
import QueryMain from "./components/Online Admission Query/QueryMain";
import Footer from "./components/home/Footer";
import Main from "./components/home/Main";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CurriculumMain from "./components/Curriculum/CurriculumMain";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/aboutstudyhall" element={<AboutMain/>}/>
        <Route path="/mission&vision" element={<SubMenuMain/>}/>
        <Route path="/foundersmessage" element={<MessageMain/>}/>
        <Route path="/principalmessage" element={<InnerMain/>}/>
        <Route path="/viceprincipalmessage" element={<ViceMain/>}/>
        <Route path="/admissionprocess" element={<AdmissionMain/>}/>
        <Route path="/feestructure" element={<FeeMain/>}/>
        <Route path="/curriculum" element={<CurriculumMain/>}/>
        <Route path="/onlineadmissionquery" element={<QueryMain/>}/>

        </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
