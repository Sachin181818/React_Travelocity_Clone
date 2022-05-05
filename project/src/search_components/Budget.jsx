import React from 'react'

const Budget = () => {
  return (
    <div>

       <h3>Your Budget</h3>
       <div id="popsort">
           <div>
              <input type="checkbox" placeholder="Less than $75"/> <p>Less than $75</p>  
           </div>
           <div>
               <input type="checkbox" placeholder="$75 to $125"/> <p>$75 to $125</p>   
           </div>
           <div>
               <input type="checkbox" placeholder="$125 to $200"/> <p>$125 to $200</p>  
           </div>
           <div>
               <input type="checkbox" placeholder="$200 to $300"/> <p>$200 to $300</p> 
           </div>
           <div>
               <input type="checkbox" placeholder="Greater than $300"/> <p>Greater than $300</p>
           </div>   
      </div>
    </div>
  )
}

export default Budget