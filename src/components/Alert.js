import React from 'react';


function Alert(props){

    const {alertMessage, alertStatus} = props

    console.log(alertStatus)
     
    return (
        <div 
            className={alertStatus ? `modal ${alertMessage}`: 'modal'}    
        >
            {alertMessage}
        </div>
    )
}
export default Alert;