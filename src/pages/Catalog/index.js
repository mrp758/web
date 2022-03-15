import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import './catalog.css';


function Catalog({ data}) {

    // const [filteredData, setFilteredData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const placeholder = "Enter your animal...";



    const filteredData = useMemo(() => {

        return data.filter(pet => pet.firstName.includes(searchValue));
        
    }, [data, searchValue]);


    let navigate = useNavigate();

    const handleFilter = (event ) => {
        setSearchValue(event.target.value);

    }




    const Clear = () => {
        setSearchValue("");
    }


    const shouldDisplayClearButton = searchValue.length > 0;



    



    return (
        <body>
            <button onClick={(() => {
                navigate("/");
            })}>Home</button>
            <div>
                <div className="search">
                    <div>
                        <input style={{"border" : "solid" , "background" : "lightgray" , "color" : "blue"}} type="text" placeholder={placeholder} onChange={handleFilter} value={searchValue}></input>
                        {shouldDisplayClearButton && <button onClick={Clear}>Clear</button>}
                        {/* {filteredData.length !== 0 && (
                            <div className="dataResult">{filteredData.map((value) => {
                                return (
                                    <a target="_blank" href={"./pet"}>
                                        <p>{value.firstName}</p>
                                    </a>
                                )
                            })}
                            </div>
                        )} */}
                    </div>
                    <main>
                        <div >
                            <ul className="grid">
                                {
                                    filteredData && filteredData.map(data => {
                                        return (

                                            <li
                                                key={data.id}
                                                onClick={(() => { navigate(`/pet/${data.id}`); })}
                                                className="petcard">
                                                <h1>{data.firstName}</h1>
                                                <h2>{data.birthYear}</h2>
                                                <img src={data.pictureUrl} alt=""></img>
                                            </li>

                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </main>
                </div>

            </div>
        </body>
    )
}





export default Catalog;
