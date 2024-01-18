import { ExperienceService } from '../Services/api/ExperienceService.js';
import ExperienceComp from './ExperienceComp';

import { useEffect, useState } from 'react';

export default function WorkExperience({Ref, opacity=1}) {
   const [workExperience, setWorkExperience] = useState([]);

   useEffect(() => {
      const getItems = async () => {
         const response = await ExperienceService.GetWorkExperience();
         if(response.error) return;

         setWorkExperience(response);
      }

      getItems();
   }, []);

   return (
      <div ref={Ref}>
         <ExperienceComp
            title="Work Experience"
            opacity={opacity}
            items={workExperience}
         />
      </div>
   );
}