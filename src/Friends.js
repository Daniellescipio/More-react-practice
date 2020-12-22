import React from "react"
import Pets from "./Pets"
    function Friends(props){
       const petsArray = props.pets
       const petsComponent = petsArray.map(function(pet){
            return <Pets key = {pet.breed} breed = {pet.breed} petName = {pet.name} />
       })
       
        return (
            <div>
                <p className = "friend">This is my Friend <span className = "name">{props.name}</span>, they are <span className = "age">{props.age}</span> and these are their pets : <span className = "container">{petsComponent}</span></p>
            </div>
        )

    }
export default Friends 