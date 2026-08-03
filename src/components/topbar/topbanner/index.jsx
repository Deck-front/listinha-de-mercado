import bloquinhologo from "./imgs/lista1.png";
import "./style.css";


export function TopBanner() {
    return(
        <div className="topbanner">
            <img src={bloquinhologo} alt="Bloquinho-Logo" className="topbanner" />
            <center className="topbanner"> Minha Lista</center>
        </div>
    );
}