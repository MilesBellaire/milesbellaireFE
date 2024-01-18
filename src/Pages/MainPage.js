import ContactMe from '../Components/ContactMe';
import Intro from '../Components/Intro';
import PersonalProjects from '../Components/PersonalProjects';
import SideDiamonds from '../Components/SideDiamonds';
import WorkExperience from '../Components/WorkExperience';
import '../Css/MainPage.css';
import { useState, useEffect, useRef } from 'react';

function MainPage() {
  // States
  const [scrollY, setScrollY] = useState(0);
  const [componentHeights, setComponentHeights] = useState([]);

  // Refs
  const introRef = useRef();
  const workExperienceRef = useRef();
  const personalProjectsRef = useRef();
  const contactMeRef = useRef();
  

  useEffect(() => {
     // Event handler to update scrollY state
     const handleScroll = () => {
        setScrollY(window.scrollY);
     };

     // Add event listener when the component mounts
     window.addEventListener('scroll', handleScroll);

     // Remove event listener when the component unmounts
     return () => {
        window.removeEventListener('scroll', handleScroll);
     };
  }, []);

  const scrollTo = (position) => {
    window.scrollTo({
      top: position,
      left: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    setComponentHeights([
      introRef?.current?.clientHeight,
      workExperienceRef?.current?.clientHeight,
      personalProjectsRef?.current?.clientHeight,
      contactMeRef?.current?.clientHeight-100
    ])
  }, [
    introRef?.current?.clientHeight,
    workExperienceRef?.current?.clientHeight,
    personalProjectsRef?.current?.clientHeight,
    contactMeRef?.current?.clientHeight
  ]);

  return (
    <div className="MainPage">
      <SideDiamonds scrollY={scrollY} componentHeights={componentHeights} scrollTo={scrollTo}/>
      <Intro scrollY={scrollY} Ref={introRef}/>
      <WorkExperience opacity={Math.max(scrollY*0.01-3.5, 0)} Ref={workExperienceRef}/>
      <PersonalProjects Ref={personalProjectsRef}/>
      <ContactMe Ref={contactMeRef}/>
    </div>
  );
}

export default MainPage;
