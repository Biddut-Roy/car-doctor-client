import { Link } from "react-router-dom";


const ServicesCard = ({services}) => {
    const {_id,title ,price , img} = services;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Photo" className="rounded-xl" />
  </figure>
  <div className=" mt-3">
    <h2 className=" text-yellow-700">Price: ${price}</h2>
    <p className="">{title}</p>
    <div>
      <Link to={`/checkout/${_id}`}>
          <button className="btn btn-primary">see</button>
      </Link>
      
    </div>
  </div>
</div>
    );
};

export default ServicesCard;