import axios from "axios";
import { useEffect } from "react";
import "./TripsPage.scss";

export default function TripsPage(props) {  
    useEffect(() => {
        axios
            .get("http://localhost:8080/trips", { withCredentials: true})
            .then((response) => {
                console.log(response)
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