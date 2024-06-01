import React,{useContext} from 'react'
import CompF from './CompF'
import { UserContext,ChannelContext } from '../../../App'

function CompE() {
    const user=useContext(UserContext)
    const channal=useContext(ChannelContext)
  return (
    <div>
      {user}-{channal}
    </div>
  )
}

export default CompE
