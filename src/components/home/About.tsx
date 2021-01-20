import photo from '../../assets/photo.jpeg';

const prefix = 'about';

function About () {
  return (
    <div className={`${prefix}-container`}>
      <div className={`${prefix}-text`}>

      </div>
      <div className={`${prefix}-img`}>
        <img src={photo} alt="This is how I look like"/>
      </div>
    </div>
  )
}

export default About;