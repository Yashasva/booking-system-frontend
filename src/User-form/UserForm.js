import React, {useState} from 'react';

const UserForm = (props)=>{

    const [tickets, setTickets] = useState('');
    const [disable, setDisable] = useState(true)


    const ticketsHandler = event=>{
        if(event.target.value > 7 || !event.target.value || event.target.value <= 0){
            setDisable(true);
        }
        else{
            setDisable(false);
        }
        setTickets(event.target.value);
    }


    return (
        <form onSubmit={(e)=>props.submitHandler(e)}>
            {/* <label>User Name: </label>
            <input type="text" onChange={userNameHandler} value={userName}/> */}
            <label>No. of Tickets</label>
            <input type="number" onChange={ticketsHandler} value={tickets} className="m-2"/>
            <button type="submit" className="btn btn-primary m-2" disabled={disable}>Book Tickets</button>
        </form>

    );
}

export default UserForm;