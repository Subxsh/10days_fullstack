import React from 'react'

const Welcome = (props) => {
  return (
    <div>
        
        <p>Enjoy building your application!  {props.name} from {props.country}</p>
    </div>
  )
}
export default Welcome
