
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Message from "./pages/Message";



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