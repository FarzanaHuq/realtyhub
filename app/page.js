import Image from "next/image";
import Logo from "./components/Logo";
import LogoHeader from "./components/LogoHeader";
import Container from "./components/Container";
import Login from "./components/Login";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
  <>
  <Wrapper>
    <div className="hidden md:block md:basis-2/4 2xl:basis-3/4">
    <LogoHeader />
    </div>
<div className="w-full px-4 md:px-0 md:basis-2/4 2xl:basis-1/4">
<Container>
    <Login />
  </Container>
  </div>
  </Wrapper>



  </>   
  
  );
}
