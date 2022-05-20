import React from 'react'
import { Nav } from '../Nav';
import { Container } from './styles';
import { FaTimes } from 'react-icons/fa';

interface SideBarProps {
    active: (value: boolean) => void;
}
export const SideBar = ({ active }:SideBarProps) => {

  const exitSideBar = () => active(false);
  return (
    <>
    <Container >
      <Nav exitSideBar={exitSideBar} />
    </Container>
    </>
  )
}
