import { useState, useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {AiOutlineClose, AiFillLinkedin} from 'react-icons/ai';
import {CgMenu} from 'react-icons/cg';
import {RiMusicFill} from 'react-icons/ri';
import {MdOutlineMusicOff} from 'react-icons/md';
import style from '../../styles/FloatingMenu.module.css';
import { GlobalContext } from '../../context/GlobalContext';

export const FloatingMenu = () => {

    const [,i18n] = useTranslation("global");
    const audio = useRef<HTMLAudioElement>(({} as HTMLAudioElement));

    const [isOpen, setisOpen] = useState<boolean>(false);
    const [isPlaying, setisPlaying] = useState<boolean>(false);
    const [isTranslated, setisTranslated] = useState<boolean>(false);

    const {setIsTranslated} = useContext(GlobalContext);

    useEffect(() => {
        audio.current = new Audio('/music/WorldWearyNoëlCoward.mp3');
        audio.current.loop = true;
        audio.current.volume = 0.2;
    }, [])

    const openMenu = (): void => {
        isOpen ? setisOpen(false) : setisOpen(true);
    }

    const goHome = ():void =>{
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const playSong = ():void =>{
        if(!isPlaying){
            setisPlaying(true); 
            audio.current.play();
        }
        else{
            setisPlaying(false); 
            audio.current.pause();
        }
    }

    const translate = ():void =>{
        if(!isTranslated){
            setisTranslated(true);
            setIsTranslated(true);
            i18n.changeLanguage("en");
        }
        else{
            setisTranslated(false);
            setIsTranslated(false);
            i18n.changeLanguage("es");
        }
    }

    const goLinkedin = ():void => {
        window.open('https://www.linkedin.com/in/fernando-tinoco-ram%C3%ADrez-0047b4236/', '_blank', 'noreferrer');
    }

    return (
        <div className={style.menuWrapper}>
            <div className={`${style.menuContainer} ${isOpen ? style.active : ''}`}>

                <button onClick={goHome} className={style.menuItem} title="scroll top">
                    <AiOutlineArrowUp/>
                </button>

                <button onClick={playSong} className={style.menuItem} title="sound">
                    {isPlaying ? <MdOutlineMusicOff/> : <RiMusicFill/>}
                </button>

                <button onClick={translate} className={style.menuItem} title="Translate">
                    {isTranslated ? <span>En</span> : <span>Es</span>}
                </button>

                <button onClick={goLinkedin} className={style.menuItem} title="Linkedin">
                    <AiFillLinkedin />
                </button>

                <button onClick={openMenu} className={style.menuItem}>
                    {isOpen ? <AiOutlineClose/> : <CgMenu/>}
                </button>
            </div>
        </div>
    )
}
