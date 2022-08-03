import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import Image from 'next/image';
import options from '../../config/cloudTagConfig';
import style from '../../styles/AboutSection.module.css';

export const AboutSection: FC = () => {

  const [t] = useTranslation("global");
  const $about = useRef(null);
  const $sphere = useRef(null);

  useEffect(()=>{
    //@ts-ignore
    $('#myCanvas')?.tagcanvas(options);
  },[])

  useEffect(()=>{
    gsap.fromTo($about.current, {
      opacity:0
    },{
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: $about.current
      }
    });
  },[])

  useEffect(()=>{
    gsap.fromTo($sphere.current, {
      scale:0
    },{
      scale: 1,
      duration: 2,
      scrollTrigger: {
        trigger: $sphere.current
      }
    });
  },[])

  return (
    <section 
      id={t("navigationLinks.about")} 
      className={`screen ${style.aboutSection}`}
    >
      <article ref={$about}>
        <h3 className="doubleTitle">{t("aboutSection.aboutMe.mainTitle")}</h3>
        <br />
        <p>{t("aboutSection.aboutMe.firstParagraph")}</p>
        <br />
        <p>{t("aboutSection.aboutMe.secondParagraph")}</p>
        <picture>
          <Image src='/img/programmer.gif' alt='cat' layout='fill' objectFit='cover' />
        </picture>
      </article>
      <article ref={$sphere}>
      <canvas width="500" height="500" id="myCanvas">
            <p>content not supported, change navigator ! | contenido no soportado cambia de navegador !</p>
            <ul>
              <li><a target="_blank" rel="noreferrer">HTML5</a></li>
              <li><a target="_blank" rel="noreferrer">CSS3</a></li>
              <li><a target="_blank" rel="noreferrer">JavaScript</a></li>
              <li><a target="_blank" rel="noreferrer">SASS</a></li>
              <li><a target="_blank" rel="noreferrer">Tailwind css</a></li>
              <li><a target="_blank" rel="noreferrer">Node js</a></li>
              <li><a target="_blank" rel="noreferrer">Bootstrap 5</a></li>
              <li><a target="_blank" rel="noreferrer">jQuery</a></li>
              <li><a target="_blank" rel="noreferrer">Express js</a></li>
              <li><a target="_blank" rel="noreferrer">React js</a></li>
              <li><a target="_blank" rel="noreferrer">Redux</a></li>
              <li><a target="_blank" rel="noreferrer">Thunk</a></li>
              <li><a target="_blank" rel="noreferrer">PHP</a></li>
              <li><a target="_blank" rel="noreferrer">C# nociones</a></li>
              <li><a target="_blank" rel="noreferrer">Laravel nociones</a></li>
              <li><a target="_blank" rel="noreferrer">Java nociones</a></li>
              <li><a target="_blank" rel="noreferrer">MySQL</a></li>
              <li><a target="_blank" rel="noreferrer">SQLServer</a></li>
              <li><a target="_blank" rel="noreferrer">mongodb nociones</a></li>
              <li><a target="_blank" rel="noreferrer">Firebase nociones</a></li>
              <li><a target="_blank" rel="noreferrer">Git basico</a></li>
              <li><a target="_blank" rel="noreferrer">Linux basico</a></li>
              <li><a target="_blank" rel="noreferrer">MVC</a></li>
              <li><a target="_blank" rel="noreferrer">Wordpress basico</a></li>
            </ul>
          </canvas>
      </article>
    </section>
  )
}
