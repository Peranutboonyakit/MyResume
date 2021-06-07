import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Welcome from "./Component/Welcome";
import About from "./Component/About";
import Skill from "./Component/Skill";
import Education from "./Component/Education";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Welcome />
        <About />
        <Skill />
        <Education />
      </ChakraProvider>
    </div>
  );
}

export default App;
