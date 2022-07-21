import {useTranslation} from 'react-i18next'
import { GlobalContext } from '../../context/GlobalContext';
import { useContext, useRef } from 'react';
import {useEffect} from 'react';
import { gsap } from 'gsap';
import style from '../../styles/NavbarMenu.module.css';

export const NavbarMenu = () => {
 
  const [t] = useTranslation("global");
  const {ui:{principalMenuOpen},principalMenuToggle} = useContext(GlobalContext);
  const $nav = useRef<HTMLElement>(null);

  const closeMenu = ()=>{
    principalMenuToggle(false);
  }

  const playAudio = (url:string)=>{
    if(!window.matchMedia("(max-width: 992px)").matches){
      const audio = new Audio(url);
      audio.volume = .5;
      audio.play();
    }
  }

  useEffect(()=>{
    principalMenuOpen ?
    gsap.to($nav.current,{y: 0}) :
    gsap.to($nav.current,{y: '-100%'}) 
  },[principalMenuOpen])

  return (
    <nav ref={$nav} className={`${style.menuContainer}`} >
        <ul>
            <li>
                <a  
                onClick={closeMenu} 
                onMouseOver={()=>playAudio('/music/A.mp3')}
                href={`#${t("navigationLinks.home")}`}
                >{t("navigationLinks.home")}</a>
            </li>
            <li>
                <a 
                onClick={closeMenu} 
                onMouseOver={()=>playAudio('/music/B.mp3')}
                href={`#${t("navigationLinks.about")}`}
                >{t("navigationLinks.about")}</a>
            </li>
            <li>
                <a 
                onClick={closeMenu} 
                onMouseOver={()=>playAudio('/music/C.mp3')}
                href={`#${t("navigationLinks.projects")}`}
                >{t("navigationLinks.projects")}</a>
            </li>
            <li>
                <a 
                onClick={closeMenu} 
                onMouseOver={()=>playAudio('/music/D.mp3')}
                href={`#${t("navigationLinks.contact")}`}
                >{t("navigationLinks.contact")}</a>
            </li>
        </ul>
    </nav>
  )
}
