import UserForm from "../User-form/UserForm";
import React, {useState, useEffect} from "react";
import Bookings from "../Bookings/Bookings";
import axios from "axios";

const Home = ()=>{

    const [seatStatus, setSeatStatus] = useState([]);
    const [userBookings, setUserBookings] = useState([]);

    const submitHandler = event=>{

        event.preventDefault();

        axios.post('https://nameless-falls-39888.herokuapp.com/bookSeats', {
                "seats": event.target[0].value
            }).then(res=>{
                console.log(res)
                if(res.data === false){
                    alert('No seats available');
                }
                totalSeats();
            })

    }

    useEffect(()=>{
        totalSeats();
    },[])


    const totalSeats =  ()=>{
        axios.get('https://nameless-falls-39888.herokuapp.com/getCoach/1').then((res)=>{
            setSeatStatus(res.data.coach[0].seats);
            setUserBookings(res.data.bookings);
        })
    }

    return(
        <div>
            <UserForm submitHandler={submitHandler}></UserForm>
            <Bookings seatStatus={seatStatus} userBookings={userBookings}></Bookings>
        </div>
    )
}

export default Home;