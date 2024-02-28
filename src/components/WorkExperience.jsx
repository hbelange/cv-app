import { useState } from "react";
import Item from "./Item";

function WorkExperience({ experience, onChange, index}){
    const [editMode, setEditMode] = useState(true)
    const [buttonName, setButtonName] = useState("Save")

    const handleChange = e => {
        const {id, value} = e.target;
        console.log(e.target)
        onChange(index, {...experience, [id]: value})
    }
    const handleButtonClick = e => {
        const newEditMode = !editMode;
        setEditMode(newEditMode);
        setButtonName(newEditMode ? "Save" : "Edit");
    }
    return (
        <div>
            <Item label="company" item="Company Name" value={experience.company} onChange={handleChange} editMode={editMode}/>
            <Item label="date" item="Date" value={experience.date} onChange={handleChange} editMode={editMode}/>
            <Item label="title" item="Job Title" value={experience.title} onChange={handleChange} editMode={editMode}/>
            <Item label="responsibilities" item="Responsibilities" value={experience.responsibilities} onChange={handleChange} editMode={editMode}/>

            <button onClick={handleButtonClick}>{buttonName}</button>
        </div>
    )
}
export default WorkExperience