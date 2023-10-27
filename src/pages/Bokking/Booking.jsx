import { useContext, useEffect, useState } from "react";
import BookingTableRow from "./BookingTableRow";
import axios from "axios";
import { GlobalContext } from "../../Authprovider/AuthContext";




const Booking = () => {
    const {user} = useContext(GlobalContext);
    const [booking, setBooking] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:2500/checkout?email=${user?.email}`,{withCredentials:true})
        .then(res => setBooking(res.data))
        // fetch("http://localhost:2500/checkout")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setBooking(data)
        //     });
    }, [])

    const handelDelete = id => {
        const process = confirm(`Are you sure you want to delete`)
        if (process) {
            fetch(`http://localhost:2500/checkout/${id}`,{
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert(" delete sucessfully ")
                    const remaining = booking.filter(booking => booking._id !== id);
                        setBooking(remaining)
                    }
                })
            
        }
    }

    const handelBookingUpdate = id =>{
        fetch(`http://localhost:2500/checkout/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({status: 'confirm'}),
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                const remaining = booking.filter(booking => booking._id !== id);
                const update = booking.find(booking => booking._id === id);
                update.status = 'confirm';
                const newBooking = [update , ...remaining]
                setBooking(newBooking)
            }

        })
    }

    return (
        <div>
            <h1>booking:{booking.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                   
                     {
                        booking?.map((booking , idx) =><BookingTableRow handelBookingUpdate={handelBookingUpdate} booking={booking} handelDelete={handelDelete} key={idx}></BookingTableRow>)
                    }
                   

                </table>
            </div>
        </div>
    );
};

export default Booking;