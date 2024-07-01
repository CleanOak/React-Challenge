import css from './css/NavBarSimple.module.css'
import React, { Component } from "react";

class NavBarSimple extends Component {
    constructor(){
        super();
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in",
        }
    }


    handleClick() {
        this.setState((prevState, prevProps) =>{
    
            console.log('Previous State:', prevState)
            console.log('Previous Props', prevProps)
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, User!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in"
            }
            
        }
    );
    
    }

    render() {

        return <div className={css.NavBar}>
            <h1>My Gallery</h1>

            <div>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>

           </div>
    
    }
}



export default NavBarSimple


// const NavBarSimple = () => {
//     return <nav className='css.NavBar'>
//             <h1>My Gallery</h1>

//             <div>
//                 <span></span>
//                 <button></button>
//             </div>

//            </nav>
// }

