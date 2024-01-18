import '../Css/Experience.css';
import ExperienceBox from '../Components/ExperienceBox';

export default function ExperienceComp({
   title, 
   opacity=1,
   items
}) {
   return (
      <div className="Experience" style={{opacity: opacity}}>
         <div className="Experience-title">
            <h1>{title}</h1>
         </div>
         <div className="Experience-items-container">
            {items && items.map((item, index) => (
               <ExperienceBox 
                  key={index} 
                  title={item.name} 
                  description={item.description}
                  tags={item.tags} 
                  link={item.link} 
                  image={item.image}
                  currentPosition={item.currentPosition}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  position={item.position}
               />
            ))}
         </div>
      </div>
   );
}