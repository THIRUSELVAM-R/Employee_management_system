import React from 'react'
import { useNavigate } from "react-router-dom";
import './button.css';
function Addfinbutton()
{

    const navigate = useNavigate();
    const Add = () => {

       navigate('Addfinance');
    }
    return(   
            <button className='Addbutton'  onClick={Add}><span>REGISTER</span></button>
    );
}
export default Addfinbutton;