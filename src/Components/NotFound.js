import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The Page is Not Found..</p>
            <Link to="/">Back To Home</Link>
        </div>
     );
}
 
export default NotFound;