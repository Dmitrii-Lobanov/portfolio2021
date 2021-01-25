import icon from '../../assets/blog.svg';

const prefix = 'top-portfolio';

const About: React.FC = (): JSX.Element => {
  return (
    <div className={`${prefix}-container`}>
      <div className={`${prefix}-text`}>
        <h1>Articles</h1>
        <h2>My articles on various Computer Science topics</h2>
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