import React, {useState} from 'react';

const UserForm = (props)=>{

    const [tickets, setTickets] = useState('');


    const ticketsHandler = event=>{
        setTickets(event.target.value);
    }


    return (
        <form onSubmit={(e)=>props.submitHandler(e)}>
            {/* <label>User Name: </label>
            <input type="text" onChange={userNameHandler} value={userName}/> */}
            <label>No. of Tickets</label>
            <input type="number" onChange={ticketsHandler} value={tickets} className="m-2"/>
            <button type="submit" className="btn btn-primary m-2">Book Tickets</button>
        </form>

    );
}

export default UserForm;