
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./pages/Services.jsx";
import Experiences from "./pages/Experiences.jsx";
import Projects from "./pages/Projects.jsx";
import Message from "./pages/Message.jsx";



const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home/>
        <Services/>
        <Experiences/>
        <Projects/>
        <Message/>
      </div>
    </>
  )
}

export default App