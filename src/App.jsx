import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, ComputersCanvas, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='relative z-0'>
          
          <Hero />
          <StarsCanvas />
          <ComputersCanvas />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />   
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;