import React from 'react'

const Card = ({ele}) => {
  return (
    <div className='card'>

        <div className='cement'>
            <img src="https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/difference-between-concrete-and-cement/jcr%3acontent/root/container/container_1646056284/teaser.coreimg.jpeg/1738763496338.jpeg" alt="" />
        </div>
        <div className='cardInfo'>
            <p>{ele.typeOfSand}</p>
            <p>{ele.companyName}</p>
            <p>{ele.location}</p>
            <p>{ele.description}</p>
        </div>

        <div className='priceInfo'>
            <div className='price'>
            <p>{ele.pricePerUnit}/unit</p>
            <p>Ex factory price</p>
            </div>
            <button className='connectButton'>Connect</button>
        </div>

        <div>
<h2></h2>
        </div>
    </div>
  )
}

export default Card