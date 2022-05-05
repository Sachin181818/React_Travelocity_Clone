import React from 'react'

const GuestRating = () => {
  return (
    <div>
      <h3>Guest Rating</h3>
      <div id="popsort">
      <div>        
        <input type="radio" value="Any"/> <p>Any</p>      
      </div>
      <div>       
         <input type="radio" value="Wonderful 4.5+" /> <p>Wonderful 4.5+</p>     
      </div>
      <div>       
          <input type="radio" value="Very good 4+" /> <p>Very good 4+</p>     
      </div>
      <div>
          <input type="radio" value="Good 3.5++" /> <p>Good 3.5+</p>     
      </div>
      </div>
    </div>
  )
}

export default GuestRating