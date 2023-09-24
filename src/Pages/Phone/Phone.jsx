import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetailsCard from "./PhoneDetailsCard";

const Phone = () => {
  const [phone, setPhone] = useState({});

  /* const params = useParams();
    console.log(params.id); */

  const { id } = useParams();
    const phones = useLoaderData();
    // console.log(phones);

    useEffect(() => {
      
        const findPhone = phones?.find(phone => phone.id === id)
       

        if (findPhone) {
            setPhone(findPhone);
            // console.log(phone);
        }
  }, [id, phones, phone]);

    return (
        <div>
            <PhoneDetailsCard phone={phone}></PhoneDetailsCard>
        </div>
    )
    
};

export default Phone;
