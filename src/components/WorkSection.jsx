import { useState } from "react"
import WorkExperience from './WorkExperience'

function WorkSection(){
    const [experiences, setExperiences] = useState([{
        company: '',
        date: '',
        title: '',
        responsibilities: ''
    }])
    const addExperience = () => {
        setExperiences([...experiences, {
            company: '',
            date: '',
            title: '',
            responsibilities: ''
        }])
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
            <button onClick={addExperience}>Add Work</button>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <WorkExperience
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

export default WorkSection