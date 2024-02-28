import {useState} from 'react'
import Item from './Item'

function General(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [editMode, setEditMode] = useState(true);

    const handleFirstNameChange = e => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = e => {
        setLastName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = e => {
        setPhone(e.target.value);
    }
    const handleButtonClick = e => {
        setEditMode(!editMode);
    }

    return (
        <div>
            <Item label='firstName' item="First Name" value={firstName} onChange={handleFirstNameChange} editMode={editMode}/>
            <Item label='lastName' item="Last Name" value={lastName} onChange={handleLastNameChange} editMode={editMode}/>
            <Item label='email' item="Email" value={email} onChange={handleEmailChange} editMode={editMode}/>
            <Item label='phone' item="Phone Number" value={phone} onChange={handlePhoneChange} editMode={editMode}/>         
            <button onClick={handleButtonClick}>Submit</button>
        </div>
    );
}

export default General