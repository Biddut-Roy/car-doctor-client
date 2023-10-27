// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import { GlobalContext } from "../../Authprovider/AuthContext";



const CheckOut = () => {
    const data = useLoaderData();
    // const {user} = useContext(GlobalContext)
    const { title, price , img , _id } = data;

    const handelOrder = (e) => {
        e.preventDefault();
        const form = e.target;


        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const ammount = form.ammount.value;

        const order = {
            customerName: name,
            email , 
            img , 
            date,
            service: title,
            service_id: _id ,
            price: ammount

        }

        fetch("http://localhost:2500/checkout",{
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                "content-type": "application/json",
            }
            
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                alert("mar diyac")
            }
         });



    };
    return (

        <div>
            <h1 className=" text-center">Order Name: {title}</h1>

           
                <form onSubmit={handelOrder} className="card-body">
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ammount</span>
                        </label>
                        <input type="text" name="ammount" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                            <input className="btn btn-primary btn-block" type="submit" value="submit" />
                    </div>
                </form>
          

        </div>


    );
};

export default CheckOut;