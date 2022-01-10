/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const NavigationBar = ({totalCounters}) => {
    return (
        <nav class="navbar navbar-light bg-light">
           <div class="container-fluid">
               <a class="navbar-brand" href="#">Cart  
                
                <span className='badge badge-pill badge-success m-2'>
                    {totalCounters}</span>

               </a>
           </div>
       </nav>
    );
}
 
export default NavigationBar;
