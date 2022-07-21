import style from '../../styles/Navbar.module.css';
import { Logo } from './Logo';
import { FC } from 'react';
import { NavbarButton } from './NavbarButton';

export const Navbar:FC = () => {
  return (
    <div className={style.navbar}>
        <Logo char='F' /> 
        <NavbarButton />
    </div>
  )
}
