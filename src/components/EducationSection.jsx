import { useState } from 'react';
import EducationExperience from './EducationExperience'

function EducationSection(){
    const [experiences, setExperiences] = useState([{
        school: '',
        date: '',
        major: ''
    }])
    const addExperience = () => {
        setExperiences([...experiences, {
            school: '',
            date: '',
            major: ''
        }]);
    }
    const handleExperienceChange = (index, updatedExperience) => {
        const newExperiences = experiences.map((experience, i) => 
            i === index ? updatedExperience : experience
        );
        setExperiences(newExperiences);
    }
    const removeExperience = (index) => {
        setExperiences(experiences.filter((experience, i) => i !== index));
    }
    return (
        <div>
            <button onClick={addExperience}>Add Education</button>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <EducationExperience
                        experience={experience}
                        onChange={handleExperienceChange}
                        index={index}
                    />
                    <button onClick={()=>removeExperience(index)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default EducationSection