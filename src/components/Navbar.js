import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/play">
                            Play
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore">
                            Explore
                        </Link>
                    </li>   
                </ul>
            </nav>
        </>
    )
}