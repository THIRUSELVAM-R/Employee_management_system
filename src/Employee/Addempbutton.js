import React from 'react'
import { useNavigate } from "react-router-dom";
import './button.css';
function Addempbutton()
{

    const navigate = useNavigate();
    const Add = () => {

       navigate('Addemployee');
    }
    return(   
            <button className='Addbutton'  onClick={Add}><span>REGISTER</span></button>
    );
}
export default Addempbutton;