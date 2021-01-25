import icon from '../../assets/portfolio.svg';

const prefix = 'top-portfolio';

const About: React.FC = (): JSX.Element => {
  return (
    <div className={`${prefix}-container`}>
      <div className={`${prefix}-text`}>
        <h1>Portfolio</h1>
        <h2>React-Redux-based applications, vanilla JavaScript programs, and anything else for web</h2>
      </div>
      <div className={`${prefix}-img`}>
        <div className={`${prefix}-img-container`}>
          <img src={icon} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About;