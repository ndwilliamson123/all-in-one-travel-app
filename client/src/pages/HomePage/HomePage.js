import "./HomePage.scss";
import axios from "axios";

export default function HomePage(props) {
  const handleClick = () => {
    axios
      .get("http://localhost:8080/home", { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      User Data Here
      <button onClick={handleClick}>GET data</button>
    </div>
  );
}
