import { NavLink } from "react-router-dom";

export default function Navbar() {

    return(

        <nav>

            <ul>

                <li>
                   <NavLink to="/">Home</NavLink> 
                </li>

                <li>
                    <NavLink to="/chi">Chi siamo</NavLink>
                </li>

                <li>
                    <NavLink to="/post">Listaposts</NavLink>
                </li>
           
            </ul>

        </nav>

    );

};