import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,DropdownItem, Dropdown, NavItem, NavLink, DropdownMenu,DropdownToggle } from 'reactstrap';
import Timer from './timer.js';
import HelloMessage from './helloMessage.js';
import TodoApp from './toDoApp.js';
import Comment from './avatar.js';
import Example from './hookEstado.js';
import App from './hookEfecto.js';

const avatar ={
  date: "01/03/2022",
  text: 'Usando Reacstrap',
  author: {
    name: 'Reacstrap',
    avatarUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--8nVJEXFD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t7bts10h3z2024aszrmf.png'
  }
}


ReactDOM.render(
  
  <Router>
  <div>
  <Nav tabs>
  <NavItem>
      <NavLink
        href="/Avatar"
      >
        Avatar
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        href="/Count"
      >
        Hook Estado
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        href="/Actualizar"
      >
        Hook Efecto
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
      
        href="/temporizador"
      >
        Timer
      </NavLink>
    </NavItem>
    
    <NavItem>
      <NavLink href="/helloMessage">
        Mensaje
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/toDoApp">
        ToDoApp
      </NavLink>
    </NavItem>
   
  </Nav>

  <Routes>
    <Route path="/temporizador" element={<Timer/>} />
    <Route path="/helloMessage" element={<HelloMessage name="Oscar" estadoAnimo="Feliz"/>}/>
    <Route path='/toDoApp' element={<TodoApp/>}/>
    <Route path='/Avatar' element={<Comment {...avatar}/>}/>
    <Route path='/Count' element={<Example/>}/>
    <Route path='/Actualizar' element={<App/>}/>
  </Routes>
</div>
  </Router>
 
  
  
 
    
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

