import React from 'react'
import './ListItems.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
  const items = props.items;
  const ListItems = items.map(item => {
    return (
      <FlipMove >             
      <div className='list' key={item.key}>
          <p>
              <input type="text"
                  id={item.key}
                  value={item.text}
                  onChange={
                      (e) => {
                          props.setUpdate(e.target.value,item.key)
                      }
                  }
              
              />
          <span>
                  <FontAwesomeIcon className="faicon" icon='trash'
                      onClick={ () => props.deleteItem(item.key)
          }
                  />
              </span>
              </p>
          </div>
          </FlipMove>
  )
})
return (
      <div>
          {ListItems}
      </div>
  )
}
export default ListItems

