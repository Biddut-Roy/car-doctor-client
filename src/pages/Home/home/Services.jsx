import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { useQuery } from "@tanstack/react-query";



const Services = () => {
    // const [services, setServices] = useState([])

    // useEffect(() => {
        // fetch("http://localhost:2500/services")
        // .then(res => res.json())
        // .then(data => setServices(data))
    // }, [])
    
    const { isPending, error, data: services } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:2500/services').then(
                (res) => res.json(),
            ),
    })

    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message


    return (
        <div>
            <div className=" text-center">
                <h1 className=" text-orange-600">Service</h1>
                <h1 className=" text-3xl">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    services?.map((service, idx) => <ServicesCard key={idx} services={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;