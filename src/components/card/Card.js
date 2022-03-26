import "./Card.css"
import {languages} from "../../helper/data"
import Item from "../item/Item"
const card = () => {
  return (
    <div className="cards-area-container">
        <div className="bars"></div>
        <h4 className="language-title">LANGUAGES</h4>
        <div className="cards-container">
            {languages.map((language,index) => {
                return (
                    <Item card={language} key={index}/> 
                )
            }
                
            )}
        </div>
    </div>
  )
}

export default card