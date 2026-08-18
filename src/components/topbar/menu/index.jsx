import "./style.css";
import {Link} from "react-router-dom";

export function Menu() {
    return (
        <div className="menu" > 
    < nav className="menu1"> 
    < Link to="/">HOME</Link>
    < Link to="/minhas-listas">MINHAS LISTAS</Link> 
    < Link to="/itens">ITENS</Link> 
    < Link to="/mercados">MERCADOS</Link> 
    < Link to="/contato">CONTATO</Link> 
    </nav>
        </div>
    );

}