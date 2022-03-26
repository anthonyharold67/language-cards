import React,{useState} from 'react'
import "./Item.css"
/* const item = ({card}) => {
  return (
    <div>
        <img src={card.img} height={"150px"} alt="" />
        <h3>{card.name}</h3>
        <ul>
            <li>{card.options[0]}</li> 
            <li>{card.options[1]}</li>
            <li>{card.options[2]}</li>
        </ul>
    </div>
  )
} */
const Item = ({card}) => {
    const [showLogo,setShowLogo] = useState(true);
    const {img, name, options} = card
    return (
      <div className="card" onClick={() => setShowLogo(!showLogo)}>
          {showLogo ? <div>
                <img src={img} className="card-logo" alt="" />
                <h3 className="card-title">{name.toUpperCase()}</h3>
                
          </div>
          :
          <div>
                {/* <ul className="list">
                    <li>{options[0]}</li> 
                    <li>{options[1]}</li>
                    <li>{options[2]}</li>
                </ul> */}
                <ul className="list">
                {options.map((option,index) => {
                    return (
                        <li key={index}>{option.toUpperCase()}</li>
                    )
                })}
                </ul>
          </div>}

      </div>
    )
}

export default Item