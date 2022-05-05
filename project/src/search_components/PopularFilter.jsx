import React from 'react'

const PopularFilter = () => {
  return (
    <div>
       <h2>Filter by</h2>
       <h3>Popular Filters</h3>
       <div id="popsort">
           <div>
              <input type="checkbox" name="Free airport shuttle" label="Free airport shuttle"/>
              <p>Free airport shuttle</p>
           </div>
           <div>
              <input type="checkbox" name="Juhu Beach" />
              <p>Juhu Beach</p>
           </div>
           <div>
             <input type="checkbox" name="All inclusive" />
             <p>All inclusive</p>
           </div>
           <div>
              <input type="checkbox" name="All-inclusive plan available" /> 
              <p>All-inclusive plan available</p> 
           </div>   
           <div>
               <input type="checkbox" name="Hot tub" /> 
               <p>Hot tub</p>
           </div>
            
        </div>

    </div>
  )
}

export default PopularFilter