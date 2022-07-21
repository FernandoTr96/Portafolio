import style from '../../styles/NavbarButton.module.css'
import { FC, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export const NavbarButton:FC = () => {
  
  const {principalMenuToggle,ui:{principalMenuOpen}} = useContext(GlobalContext);

  const openMenu = ()=>{
    principalMenuOpen ? principalMenuToggle(false) : principalMenuToggle(true);
  }

  return (
    <button onClick={openMenu} className={`${style.navbarButton} ${principalMenuOpen ? style.buttonx : ''}`} title='menu'>
        <span></span>
        <span></span>
    </button>
  )
}
