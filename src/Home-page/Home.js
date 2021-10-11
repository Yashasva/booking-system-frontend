import UserForm from "../User-form/UserForm";
import React, {useState, useEffect} from "react";
import Bookings from "../Bookings/Bookings";
import axios from "axios";


//parent component
const Home = ()=>{

    const [seatStatus, setSeatStatus] = useState([]);
    const [userBookings, setUserBookings] = useState([]);

    //button handler for book tickets
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


    //for getting the status of all available seats
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