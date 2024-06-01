import React from 'react'
import { UserContext ,ChannelContext} from '../../../App'

function CompF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                            {
                                channal=>{
                                    return <div>User context value {user},ChannelContext value{channal}</div>
                                }
                            }
                            </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>    
            </div>
    )
}

export default CompF
