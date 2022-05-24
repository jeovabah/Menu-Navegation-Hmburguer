import  { useState } from 'react'
import { Container, ContainerHeader } from './styles';
import { FaBars } from "react-icons/fa";
import { SideBar } from '../SideBar';

export const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar) 
  return (
    <ContainerHeader>
    <div id="headerPcResposivity" className="headerPc">
      <ul>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
      </ul>
    </div>
    <Container className='headerMobile'>
        <FaBars onClick={showSideBar} />
        { sidebar && <SideBar active={setSidebar} />}
        <div className="headerLogo">
          <h1>Logo <span>menu</span> </h1>
        </div>
    </Container>
    </ContainerHeader>
  )
}
