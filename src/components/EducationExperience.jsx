import { useState } from "react";
import Item from "./Item";

function EducationExperience({experience, onChange, index}){
    const [editMode, setEditMode] = useState(true)
    const [buttonName, setButtonName] = useState("Submit")

    const handleChange = e => {
        const {id, value} = e.target;
        console.log(e.target)
        onChange(index, {...experience, [id]: value})
    }
    const handleButtonClick = e => {
        const newEditMode = !editMode;
        setEditMode(newEditMode);
        setButtonName(newEditMode ? "Submit" : "Edit");
    }
    return (
        <div>
            <Item label="school" item="School" value={experience.school} onChange={handleChange} editMode={editMode}/>
            <Item label="date" item="Date" value={experience.date} onChange={handleChange} editMode={editMode}/>
            <Item label="major" item="Major" value={experience.major} onChange={handleChange} editMode={editMode}/>
            <button onClick={handleButtonClick}>{buttonName}</button>
        </div>
    )
}

export default EducationExperience