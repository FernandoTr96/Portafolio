import { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import {useEffect} from 'react';
import { gsap } from 'gsap';
import style from '../../styles/HomeSection.module.css';

export const HomeSection: FC = () => {

  const [t] = useTranslation("global");
  const $boxTitle = useRef(null);
  const $avatar = useRef(null);
  const $gif = useRef(null);

  useEffect(()=>{
    gsap.fromTo($boxTitle.current,{
      opacity: 0,
      x: -300
    },{
      opacity: 1,
      duration: 2,
      x: 0,
      ease: "power3.out",
      stagger: 1
    })
  },[]);

  useEffect(()=>{
    gsap.fromTo($avatar.current,{
      opacity: 0,
      y: 200
    },{
      opacity: 1,
      duration: 2,
      y: 0,
      ease: "power3.out",
      stagger: 1
    })
  },[]);

  useEffect(()=>{
    gsap.fromTo($gif.current,{
      scale: 0
    },{
      scale: 1,
      duration: 2,
      stagger: 1
    })
  },[]);

  return (
    <section id={t("navigationLinks.home")} className={`screen ${style.homeSection}`}>
      <article ref={$boxTitle} className={style.presentation}>
        <h1 className='metal-title'>{t("homeSection.mainTitle")}</h1>
        <h2 className='doubleTitle'>{`<${t("homeSection.secondTitle")}/>`}</h2>
      </article>
      <article className={style.presentationImages}>
        <picture ref={$avatar}>
          <Image src='/img/AvatarMaker.svg' alt='avatar'  layout="fill" objectFit="cover" priority />
        </picture>
        <picture ref={$gif}>
          <Image src='/img/handshake.gif' alt='avatar'  layout="fill" objectFit="cover" />
        </picture>
      </article>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fillOpacity="1" d="M0,288L30,288C60,288,120,288,180,277.3C240,267,300,245,360,224C420,203,480,181,540,160C600,139,660,117,720,133.3C780,149,840,203,900,234.7C960,267,1020,277,1080,245.3C1140,213,1200,139,1260,128C1320,117,1380,171,1410,197.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
    </section>
  )
}
