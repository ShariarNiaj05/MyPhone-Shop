// import { useLoaderData } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phones = ({phones}) => {
    // const phones1 = useLoaderData();
    // console.log(Array.isArray(phones) );

    return (
        <div className="py-10">
            <h2 className=" text-2xl text-center">All Category Phones List</h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    phones?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;