import axios from "axios";
import { useEffect } from "react";
import "./TripsList.scss";
import { API_prefix } from "../../App";

export default function TripsList(props) {  
    useEffect(() => {
        axios
            .get(`${API_prefix}/trips`, { withCredentials: true})
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    })

    return (
        <div>
            List of User's Trips here
        </div>
    )
}