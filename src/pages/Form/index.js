import React, { useState} from "react";
import { useNavigate , useParams} from "react-router-dom";





function Form(info) {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const {data} = info;


   function SelectedData() {
   
  const localData = localStorage.getItem('picture');
   return localData ? JSON.parse(localData) : [];
    }


    console.log(data.id)
    const handleInputChangeName = (event) => {
        setName(event.target.value);
    }


    const handleInputChangeAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleInputChangePhone = (event) => {
        setPhone(event.target.value);
    }

    const handleInputChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleClearClick = () => {
        if (name.length === 0) {
            alert("Please input full name");
        }
        else if (address.length === 0) {
            alert("Please input address");
        }

        else if (phone.length === 0) {
            alert("Please input phone");
        }

        else if (email.length === 0) {
            alert("Please input email");
        }
        else {
            alert(`Thanks for adopting! ${info.animalType}`);
            setName("");
            setAddress("");
            setPhone("");
            setEmail("");
        }
    }











    return (
        <body>
            <button onClick={(() => {
                navigate("/");
            })}>Home</button>
            <button onClick={(() => {
                navigate("/catalog");
            })}>Catalog</button>
            <br></br>
            <br></br>
            <h1>Fill Information</h1>
            <br></br>
            <p>Full Name</p><input type="text" placeholder='Full Name' value={name} onChange={handleInputChangeName}></input>
            <div></div>
            <p>Address</p><input type="text" placeholder='Address' value={address} onChange={handleInputChangeAddress}></input>
            <div></div>
            <p>Phone Number</p><input type="text" placeholder='Phone Number' value={phone} onChange={handleInputChangePhone}></input>
            <div></div>
            <p>Email</p><input type="text" placeholder='Email' value={email} onChange={handleInputChangeEmail}></input>
            <br></br>
            <br></br>
            <button onClick={handleClearClick}>Submit</button>
            <br></br>
            <br></br>
        </body>
    )
}

export default Form;