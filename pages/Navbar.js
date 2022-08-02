import React from "react";
import Nav from "react-bootstrap/Nav";


export default function Navbar(){

    return(

        <div>

            <Nav className="justify-content-end" variant="pills" activeKey="Home">


                <Nav.Item>
                    <Nav.Link className='flex-right' eventKey="Home" href="/Home">
                        Home
                    </Nav.Link>
                </Nav.Item> 

                <Nav.Item>
                    <Nav.Link className='flex-right' eventKey="Login" href="/Login">
                        Login
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link title="Item" eventKey="AboutUs" href="/AboutUs">
                        About 
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link title="Item"  eventKey="Contact" href="/Contact">
                        Contact
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        </div>
    )
}

