import Proptypes from 'prop-types'


function UserGreeting(props){
    const welcomeMessage = <h2 className='welcome-message'>Welcome {props.name}</h2>
    const loginPrompt = <h2 className='login-Prompt'>Please Login</h2> 

    return(
         props.isLoggedIn ? 
        welcomeMessage :
         loginPrompt 
         
        
    )
    
}
UserGreeting.Proptypes ={
    isLoggedIn: Proptypes.bool,
    name: Proptypes.string
}
UserGreeting.defaultProps = {
    name: "Guest",
    isLoggedIn: false,
    
}
export default UserGreeting