import React from 'react'
import { useNavigate } from "react-router-dom";
import './button.css';
function Addleavebutton()
{

    const navigate = useNavigate();
    const Add = () => {

       navigate('Addleave');
    }
    return(   
            <button className='Addbutton'  onClick={Add}><span>REGISTER</span></button>
    );
}
export default Addleavebutton;