import { useNavigate, useParams } from "react-router-dom"

export default function NationNavBar(){
    const navigate = useNavigate();
    const { id } = useParams();

    return(
        <>
            <div className="row border border-dark border-4 rounded p-4 shadow-lg bg-secondary bg-opacity-75 bg-gradient">
                <button onClick={ () => navigate("/country/settings/taxes/" + id)} className="col me-3 btn btn-lg btn-dark shadow" >Taxes</button>
                <button onClick={ () => navigate("/country/settings/spending/" + id)} className="col me-3 btn btn-lg btn-dark shadow" >Spending</button>
                <button className="col me-3 btn btn-lg btn-dark shadow" >Trade</button>
                <button className="col btn btn-lg btn-dark shadow" >Development</button>
            </div>
        
        </>

    )
}