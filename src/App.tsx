 import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
 

import Navbar from "./components/navbar" ;
import Hero from "./components/hero" ;
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";
import technologyData from "./data/technologies.json";
   
   function App() {  
     
   
    const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    const loadTechnologies = () => {

      setLoading(true);

      setTimeout(() => {
        setTechnologies(technologyData as Technology[])
        
        setLoading(false)
    } ,500)
        
       
    };

    loadTechnologies();
  },[])
   

  const handleAdd = (technology: Technology) => {

    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  const handleRemove = (id: string) => {

    const technology = stack.find(
      (item) => item.id === id
    );
  
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (technology) {





      
      toast.info(
       ` ${technology.name} removed from your stack.`
      );
    }
  }

  const handleRemoveAll = () => {

    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <Hero />

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading technologies...</p>
        </div>
      ) : (
        <main className="main-content">

          <div className="technology-area">

            <TechnologyGrid
              technologies={technologies}
              stack={stack}
              onAdd={handleAdd}
            />

          </div>

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </main>
      )}

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
      />
    </>
  );
}

export default App;