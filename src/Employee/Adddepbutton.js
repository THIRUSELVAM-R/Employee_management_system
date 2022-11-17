import React from 'react'
import { useNavigate } from "react-router-dom";
import './button.css';
function Adddepbutton()
{

    const navigate = useNavigate();
    const Add = () => {

       navigate('Adddepartment');
    }
    return(   
            <button className='Addbutton'  onClick={Add}><span>REGISTER</span></button>
    );
}
export default Adddepbutton;