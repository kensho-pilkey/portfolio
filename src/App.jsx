import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='relative z-0'>
          
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />   
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;