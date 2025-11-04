import React from 'react'
import Card from './Card'

const DataList = ({data, search, sort, filter}) => {

    // let newData = [...data];
    console.log(data)

    if(search){
        data = data.filter(ele => ele.typeOfSand.toLowerCase().includes(search.toLowerCase()) );
    }

      if (sort === "price-low-high") {
    data.sort((a, b) => a.pricePerUnit
 - b.pricePerUnit
);
  }
  if (sort === "price-high-low") {
    data.sort((a, b) => b.pricePerUnit
 - a.pricePerUnit
);
  }

  return (
    <div  className="scroll">
        {data.map((ele) => (
          <div key={ele.id}>
            <Card ele={ele} />
          </div>
        ))}
    </div>
  )
}

export default DataList