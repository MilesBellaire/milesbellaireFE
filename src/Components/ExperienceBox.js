import { GitHub } from '@mui/icons-material';
import '../Css/ExperienceBox.css';

export default function ExperienceBox({
  image='https://cdn-icons-png.flaticon.com/512/4192/4192708.png', 
  title, 
  description,
  tags,
  link='',
  currentPosition,
  startDate,
  endDate,
  position // Need to add these to the Comp !!!!!!!!!!!!!!!!!!!!!!!!!!
}) {
  function formatDate(inputString) {
    const date = new Date(inputString);
    
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
  
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    return `${month} ${year}`;
  }

  return (
    <div className="box-container">
      <img src={image} className="box-image" alt="boxImage" />
      <div className="box-title">
        <h2 style={{margin: 0}}>{title}</h2>
        {position && 
          <h3 style={{margin: 0}}>{position}</h3>
        }
      </div>
      {startDate && 
        <div className="box-date">
          <p style={{margin: 0}}>{formatDate(startDate)} - {currentPosition ? 'Present' : formatDate(endDate)}</p>
        </div>
      }
      <div className="box-content">
        <p>{description}</p>
      </div>
      <div className='box-footer'>
        <div className="box-tags"> 
          {tags && tags.map((tag, index) => 
            <div key={index} className='box-tags-chip'>
              <p style={{margin: 0}}>{tag}</p>
            </div>
          )}
        </div>
        {link && 
          <GitHub 
            className='box-icon' 
            onClick={() => window.open(link)} 
            sx={{fontSize: 50}}
          />
        }
      </div>
    </div>
  );
}