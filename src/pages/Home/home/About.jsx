import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' relative w-1/2'>
                    <img src={person} className=" lg:w-2/3 rounded-lg shadow-2xl" />
                    <img src={parts} className=" lg:w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-2" />
                </div>
                <div className=' w-1/2 ml-5'>
                    <h1 className=' text-2xl text-yellow-700'>About us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do notlook even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;