import { NavLink } from "react-router-dom";

export default function Header() {

    return(

        <nav>

            <ul>

                <li>
                   <NavLink to="/">Home</NavLink> 
                </li>

                <li>
                    <NavLink to="/chiSiamo">Chi siamo</NavLink>
                </li>

                <li>
                    <NavLink to="/listaPost">Listaposts</NavLink>
                </li>
           
            </ul>

        </nav>

    )

}