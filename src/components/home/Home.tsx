import About from './About';
import Achievements from './Achievements';
import Mission from './Mission';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <About />
      <Mission />
      <Achievements />
    </>
  )
}

export default Home;