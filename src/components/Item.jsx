function Item({label, item, value, onChange, editMode}){
    return (
        <div>
            <label htmlFor={label}>{item}: </label>
            {editMode 
            ? <input type='text' id={label} value={value} onChange={onChange}/>
            : <div>{value}</div>}
        </div>
    )
}

export default Item