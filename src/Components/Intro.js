import '../Css/Intro.css';
import Intro_pic from '../Assets/Intro_pic.jpg'
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

function Intro({Ref, scrollY}) {
  const background = () => {
    const iconSize = 50;
    return (
      <div>
        <img src={Intro_pic} alt="Intro_pic" className="background-image" />
        <div className="background-filter"/>
        <div className="Intro-shader1"/>
        <div 
          className="Intro-shader2"
          style={{width: `${scrollY*0.2}%`}}
        />
        <div
          className="Intro-shader3"
          style={{width: `${scrollY*0.4}%`}}
        />
        <div className="Intro-icons">
          <LinkedIn 
            className='Intro-icon' 
            sx={{color: 'white', fontSize: iconSize}}
            onClick={() => window.open('https://www.linkedin.com/in/miles-bellaire')}
          />
          <GitHub 
            className='Intro-icon' 
            sx={{color: 'white', fontSize: iconSize}}
            onClick={() => window.open('https://github.com/milesbellaire')}
          />
          <Email 
            className='Intro-icon' 
            sx={{color: 'white', fontSize: iconSize}}
            onClick={() => window.open('mailto:mile5b311@gmail.com')}
          />
        </div>
        {/* <div className='Intro-fadeout'/> */}
      </div>
    );
  }
  return (
    <div className="Intro" ref={Ref}>
      <div className="Intro-fixed">
        {background()}
        <div className="Intro-spacing">
          <div className="Intro-content" style={{opacity: `${1-(scrollY*0.003)}`}}>
            <div style={{flexDirection: 'column', width: '100%'}}>
              <header className="Intro-title">
                <h1>
                  Miles Bellaire
                </h1>
                <h2>
                  Developer
                </h2>
              </header>
              <div className="Intro-content-text">
                <h2> About Me</h2>
                <p>
                  I am an undergraduate student at the University of LSU, Metairie.
                  I am interested in pursuing a career in web development.
                  I am a full-stack developer.
                  I am a full-stack developer.
                  I am a full-stack developer.
                  I am a full-stack developer.
                  I am an undergraduate student at the University of LSU, Metairie.
                  I am interested in pursuing a career in web development.
                  I am a full-stack developer.
                  I am a full-stack developer.
                  I am a full-stack developer.
                  I am a full-stack developer.
                </p>
              </div>
            </div>
          </div>
          <div style={{width: `${scrollY*0.05}%`}} />
          <div className="" />
          <div className="" />
        </div>
      </div>
      <div className='Intro-footer Border'/>
    </div>
  );
}

export default Intro;