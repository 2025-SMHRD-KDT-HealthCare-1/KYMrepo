import React from 'react'

const Menu = ({temp, menu, price}) => {
    console.log(temp, menu, price)
    //console.log(props)
  return (
    <div>
        {/* <h1>{props.temp} {props.menu}</h1>
        <p>{props.price}</p> */}
        <h1>{temp} {menu}</h1>
        <p>{price}</p>
    </div>
  )
}

export default Menu