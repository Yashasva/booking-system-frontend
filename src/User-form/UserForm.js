import React, {useState} from 'react';
import axios from 'axios';

const UserForm = (props)=>{

    const [userName, setUserName] = useState('');
    const [tickets, setTickets] = useState('');

    const userNameHandler = event=>{
        setUserName(event.target.value);
    }

    const ticketsHandler = event=>{
        setTickets(event.target.value);
    }


    return (
        <form onSubmit={(e)=>props.submitHandler(e)}>
            {/* <label>User Name: </label>
            <input type="text" onChange={userNameHandler} value={userName}/> */}
            <label>No. of Tickets</label>
            <input type="number" onChange={ticketsHandler} value={tickets}/>
            <button type="submit" >Book Tickets</button>
        </form>

    );
}

export default UserForm;