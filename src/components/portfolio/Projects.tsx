import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import { FaBackward, FaForward } from "react-icons/fa";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Project, projects } from "../../assets/data";

const prefix = 'projects';

const Projects: React.FC = (): JSX.Element => {
  return (
    <div className={`${prefix}-container`}>
      <h1 className={`${prefix}-title`}>Featured projects</h1>
      <CarouselProvider naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={6}
        visibleSlides={1}
      >
        <Slider className={`${prefix}-slider`}>
          {
            projects.map((project: Project, index: number) => (
              <Slide index={index}>
                <h1>{project?.title}</h1>
                <h2>{project?.shortDesc}</h2>
                <Image src={project?.img} alt="" hasMasterSpinner={true} className={`${prefix}-img`} />
              </Slide>
            ))
          }
        </Slider>
        <div className={`${prefix}-buttons`}>
          <ButtonBack>
            <FaBackward className={`${prefix}-btn`} />
          </ButtonBack>
          <ButtonNext>
            <FaForward className={`${prefix}-btn`} />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
} 

export default Projects;