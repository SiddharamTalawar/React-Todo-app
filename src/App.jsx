import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import UserGreeting from './UserGreeting.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './colorPicker.jsx'
import Button from './Button.jsx'
import Todo from './Todo.jsx'


function App() {

  const footeritems =[
    {
      id: 1,
      data: "Home"
    },
    {
      id: 2,
      data: "About"
    },
    {
      id: 3,
      data: "Contact"
    }
  ]
  return (
    <> 
    {/* <Header />
    <UserGreeting isLoggedIn ={true} name ="iron man"/>
    
    <UserGreeting isLoggedIn ={false} name ="iron man"/> <hr />
    <Button /> 
    <hr /> */}
    
    {/* <Card name ="iron man" img ="https://picsum.photos/200"/>
    <Card name ="spider man"img ="https://picsum.photos/203" />
    <Card name ={"electric man"}img ="https://picsum.photos/202" /> */}
    {/* <Card  /> */}

    {/* <Counter /> */}
    {/* <ColorPicker/><hr /> */}
    <Todo />
    {/* <Footer list = {footeritems}/> */}
    </>
     
    
  )
  
}

export default App
