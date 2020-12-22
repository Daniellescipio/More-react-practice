import React from "react"
    function Pets(props){
        return(
            <p className = "pet">This <span className = "breed">{props.breed}</span> is named <span className = "petName">{props.petName}</span> </p>
        )

    }
export default Pets 