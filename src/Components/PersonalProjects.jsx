import ExperienceComp from './ExperienceComp';
import { ExperienceService } from '../Services/api/ExperienceService';
import { useEffect, useState } from 'react';

export default function PersonalProjects({Ref}) {
   const [personalProject, setPersonalProject] = useState([]);

   useEffect(() => {
      const getItems = async () => {
         const response = await ExperienceService.GetPersonalProjects();
         if(response.error) return;

         setPersonalProject(response);
      }

      getItems();
   }, []);
   return (
      <div ref={Ref}>
         <ExperienceComp
            title="Personal Projects"
            type={1}
            items={personalProject}
         />
      </div>
   );
}