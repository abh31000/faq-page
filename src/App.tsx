import Faq from "./components/Faq";
import Navbar from "./components/Navbar";
import Onboarding from "./components/Onboarding";
import Title from "./components/Title";

export default function App() {
   return(
      <>
         <Navbar />
         <Title />
         <Faq />
         <Onboarding />
      </>
   );
}
