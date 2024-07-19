import About from "./components/Homepage/About";

import AI from "./components/Homepage/AI";
import Background from "./components/Background";
import Startups from "./components/Homepage/Startups";
import Retail from "./components/Homepage/Retail";
import Working from "./components/Homepage/Working";
import NonRetail from "./components/Homepage/NonRetail";
import Team from "./components/Homepage/Team";

export default function Home() {
  return (
    <div>
      <Background />
      <About /> 
      <Working/>
      <Retail/>
      <NonRetail/>
      <Startups/>
      <Team/>
    

    </div>
  );
}
