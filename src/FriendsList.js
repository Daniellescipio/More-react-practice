import React from "react"
import Friends from "./Friends"
import friends from "./friendsData"
    function FriendsList(){
        const friendsComponent = friends.map(function(friend){
            return <Friends key = {friend.age + friend.name} name = {friend.name} age = {friend.age} pets = {friend.pets}  />
        })
        return (
            <div>
                {friendsComponent}
            </div>
        )
    }

export default FriendsList