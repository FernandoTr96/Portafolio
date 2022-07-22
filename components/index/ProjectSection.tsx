import { FC, useContext, useEffect, useState, useRef } from 'react';
import { Project, ProjectWithImages } from '../../interfaces/interfaces';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../../context/GlobalContext';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { FiLink } from 'react-icons/fi';
import { BiBuildings } from 'react-icons/bi';
import { Loader } from '../ui/Loader';
import { gsap } from 'gsap';
import style from '../../styles/ProjectSection.module.css';

export const ProjectSection: FC = () => {

  const [db, setdb] = useState<Array<Project>>([]);
  const [projects, setProjets] = useState<Array<ProjectWithImages>>([]);
  const [loader, setLoader] = useState(false);

  const [t] = useTranslation("global");
  const { ui: { uiTranslated } } = useContext(GlobalContext);
  const $slider = useRef(null);

  const goToProject = (link: string): void => {
    window.open(link, '_blank');
  }

  useEffect(()=>{
    const getdb = async ()=>{
      let url = uiTranslated ? 
      '/api/getDataBaseEn' : 
      '/api/getDataBaseEs';
      const response = await fetch(url,{headers: { 'Content-Type': 'application/json' }});
      const {ok,data} = await response.json();
      ok && setdb(data);
    }
    getdb();
  },[uiTranslated])

  useEffect(() => {
    (async () => {
      setLoader(true);
      let projectsWithImages = await Promise.all(
        db?.map(async (project: Project) => {

          const response = await fetch('/api/getCloudinaryImages', {
            method: 'POST',
            body: JSON.stringify({ folderCloudinary: project.folderCloudinary }),
            headers: { 'Content-Type': 'application/json' }
          });

          const { images } = await response.json();

          return {
            ...project,
            images
          }

        })
      );
      projectsWithImages = projectsWithImages.sort(() => Math.random() - 0.5);
      setProjets(projectsWithImages);
      setLoader(false);
    })();
  }, [db])

  useEffect(() => {
    gsap.fromTo(
      $slider.current,
      {
        y: 200
      },
      {
        scrollTrigger:{
          trigger:$slider.current
        },
        duration: 1,
        y: 0
      }
    )
  },[])

  return (
    <section id={t("navigationLinks.projects")} className={`screen ${style.projectSection}`}>
      <article>
        <h3 className="doubleTitle">{t("projectSection.mainTitle")}</h3>
        <p>{t("projectSection.firstParagraph")}</p>
      </article>
      <article ref={$slider}>
        {
          loader ?
            <Loader src='/img/loading.svg' w={40} h={40} /> :
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              slidesPerView={1}
              loop={true}
              modules={[Pagination]}
              className={style.sliderContainer}
            >
              {
                projects?.map((project: ProjectWithImages) => (
                  <SwiperSlide key={project.id} className={style.cardProject}>
                    <div className={style.cardDescription}>
                      <h4>{project.projectName}</h4>
                      <p> ~ <BiBuildings /> {project.company} </p>
                      <button onClick={() => goToProject(project.link)}>
                        ~ <FiLink /> Link
                      </button>
                      <article>
                        {
                          project.tecnologies.split(' ').map((tecnology: string, index: number) => (
                            <span key={index} >{tecnology}</span>
                          ))
                        }
                      </article>
                    </div>
                    <div className={style.cardImages}>
                      <Swiper
                        className={style.subSlider}
                        loop={true}
                        allowTouchMove={false}
                        autoplay={{
                          delay: 1500,
                          disableOnInteraction: true,
                        }}
                        modules={[Autoplay]}
                      >
                        {
                          project.images?.map((url: string, index) => (
                            <SwiperSlide
                              key={index}
                              style={{
                                backgroundImage: `url(${url})`
                              }}
                              className={style.subSliderSlide}
                            />
                          ))
                        }
                      </Swiper>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
        }
      </article>
    </section>
  )
}
