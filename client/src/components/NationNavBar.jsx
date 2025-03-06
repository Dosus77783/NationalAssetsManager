import { useNavigate, useParams } from "react-router-dom"

export default function NationNavBar(){
    const navigate = useNavigate();
    const { id } = useParams();

    return(
        <>
            <div className="border border-dark border-2">
                <button onClick={ () => navigate("/country/settings/taxes/" + id)} >Taxes</button>
                <button onClick={ () => navigate("/country/settings/spending/" + id)} >Spending</button>
                <button>Trade</button>
                <button>Development</button>
            </div>
        
        </>

    )
}