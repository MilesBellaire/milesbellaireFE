import { ExperienceService } from '../Services/api/ExperienceService.js';
import ExperienceComp from './ExperienceComp';

import { useEffect, useState } from 'react';

const defaultExperiences = [
   {
      name: 'Not Available',
      description: 'Not Available',
      tags: ['Not Available'],
      link: 'Not Available',
      image: 'Not Available',
      currentPosition: 'Not Available',
      startDate: 'Not Available',
      endDate: 'Not Available',
      position: 'Not Available'  
   }
]

export default function WorkExperience({Ref, opacity=1}) {
   const [workExperience, setWorkExperience] = useState([]);

   useEffect(() => {
      const getItems = async () => {
         const response = await ExperienceService.GetWorkExperience();
         setWorkExperience(response);
         if(response.error) {
            setWorkExperience(defaultExperiences);
            return;
         }
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