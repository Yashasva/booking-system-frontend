import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './bookings.css';

const Bookings = (props)=>{

    

    if(props.tickets){
        console.log(props.tickets);
    }

    

    return(
        <div className="container">
            <div>
                {props.userBookings.map((booking,key)=>{
                        return <div key={key}>{booking.seats.map((seat, key)=>{
                            return <p key={key}>{seat.seatid + ','}</p>
                        })}</div>
                })}
            </div>
            <div>
                {props.seatStatus.map((seat,key)=>{
                    return <div key={key}>{seat.status +''}</div>
                })}
            </div>
            
        </div>
    )

}

export default Bookings;