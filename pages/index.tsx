import type { NextPage } from 'next';
import Layout from '../components/layouts/Layout';
import { HomeSection,AboutSection,ProjectSection,ContactSection } from '../components/index';

const Home: NextPage = () => {
  return (
    <Layout
      title="Fernando Web | Frontend developer"
      description="Bienvenido, hecha un vistazo a mi portafolio"
      keywords="web developer portfolio javascript frontend css html5 design website desarrollo pagina sistemas computacionales software"
    >
      <>
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </>
    </Layout>
  )
}

export default Home
