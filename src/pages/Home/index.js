import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function Home(id) {

    let navigate = useNavigate();

    const {data} = id;

    const [picture,setPicture] = useState(id);

    useEffect(() =>{
        localStorage.setItem('picture' , JSON.stringify(picture))
    }, [picture])

        
    



    return (
        <body>
            <header className="header">Save Pet</header>
            <button className="Catalog" onClick={() => { navigate("/catalog") }}> Catalog</button>
            <p className="textchanger">
                Our adoption process has been modified to provide the best customer service to those wishing to adopt while also reducing stress on our animal guests.
                <div></div>
                Adoptions are not based on first-come-first-adopted but are based on matchmaking.  Our front doors remain locked to regulate traffic in our building. Please ring the doorbell and a staff person can assist you*.  We do encourage visitors to wear masks.  If you do not have a mask, we can provide one.
                For those with pets at home wishing to adopt: If you have animals of the same species in your home as the one you are applying for, please call your veterinarian to tell them to release the veterinary records to OAHS.  Doing so will make the process much faster and more efficient.
                Cat and Small Mammal Adoptions - No Appointment Needed  In order to provide the best service we can, we're asking people to please only plan to stop in if you are truly interested in adopting.Those who want to spend time with animals for fun or simply to socialize with them are encouraged to join our volunteer program. Cat and small mammal adopters are welcome without an appointment on Tuesdays, Thursdays and Fridays from 1 pm to 6 pm  and Saturdays from 11 am to 3 pm. If you have children in your household please bring them along so we can ensure a child-friendly match.
                <div></div>
                Talk to an adoption counselor will give them an idea of what you're looking for and they can suggest animals who might be a good fit for your family.
                Once you have decided on the animal(s) you wish to adopt, there is a simple one-page application.
                The application is processed in 1-2 business days.
                If approved, your  adoption session will be scheduled and you can take your new pet(s) home immediately after.
                For those wishing to adopt a kitten: We typically require all kittens have an age-appropriate buddy (around 2 years old or younger) at home.  This is for their mental, physical and developmental well being.  For more information on why two young cats are better than one, click HERE.
                <div></div>

                Dog Adoptions -  By Appointment Our by-appointment process allows us to focus on helping adopters and reduces kennel-traffic induced stress for our dog guests.

                <div></div>

                Fill out and submit a DOG ADOPTION APPLICATION (you do not need to indicate a specific dog on the application).
                Once your application is received and processed (typically within 1-2 business days) a dog adoption counselor will contact you to schedule a time to visit and provide more information about available dogs.
                When you arrive at your scheduled time please ring the doorbell and a staff person will assist you.

                <div></div>


                We ask ALL adopters be willing to do the following:

                Talk to an adoptions counselor about your lifestyle and what characteristics you're looking for in a companion.
                Spend quality time visiting with the pet you are thinking about adopting.
                Participate in a scheduled meet and greet for dogs and rabbit adopters if you already have a same-species pet at home. A meet and greet can help with a comfortable transition for all animals.
                Meet with an adoption specialist the day you bring your new companion home to review paperwork and sign adoption papers.

            </p>

            <br></br>
            <br></br>
            <br></br>
            <h2>Recently Viewed Pets</h2>
            <div></div>





        </body>


    )
}


export default Home;