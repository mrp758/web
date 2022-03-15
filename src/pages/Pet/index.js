import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function PetPage(db) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [selectedPet, setSelectedPet] = useState();
    const { data } = db;

    const [picture,setPicture] = useState(id);

    useEffect(() => {
        setSelectedPet(data.find(pet => pet.id === id));
    }, [id, data])


    useEffect(() =>{
            localStorage.setItem('picture' , JSON.stringify(picture));
    }, [picture])
    



    return (

        
        

        <div>
            <button onClick={(() => {
                navigate("/");
            })}>Home</button>

            <main>


                <div>
                    {
                        selectedPet && <span>
                        <div></div>
                        {selectedPet.animalType}
                        <div></div> 
                        {selectedPet.firstName}
                        <div></div>
                        {selectedPet.birthYear}
                        <div></div>
                        <img src={selectedPet.pictureUrl} alt=""></img>
                        <div></div>
                        {selectedPet.description}
                        </span>
                    }
                </div>
                
</main>

             <button onClick={(() => {
                   navigate(`/form/${id}`);

                })}>Adopt Me</button>



          

        </div>
    )


}

export default PetPage;