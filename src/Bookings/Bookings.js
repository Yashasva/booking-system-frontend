import React from 'react';

import './bookings.css';

const Bookings = (props)=>{

    

    if(props.tickets){
        console.log(props.tickets);
    }

    

    return(
        <div className="home">
            <div>
                {props.userBookings.map((booking,key)=>{
                        return <div className="card" key={key}>
                            <div className="card-body">
                                <h5 className="card-title">{'Booking id: ' + key}</h5>
                                <div>{booking.seats.map((seat, key)=>{
                                    return <span key={key}>{seat.seatid + ' '}</span>
                                })}</div>
                            </div>
                        </div>       
                })}
            </div>
            <div className="container">
                <div className="row row-cols-6 m-2">
                    {
                    props.seatStatus.map((seat,key)=>{
                        return <div key={key} className="col m-3 btn-primary">{(seat.status)?seat.seatid+': booked': seat.seatid+': available'}</div>
                    })}
                </div>
            </div>
            
        </div>
    )

}

export default Bookings;