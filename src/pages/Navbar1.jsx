import React, { useState } from "react";
import "../style/navbar1.css";
// import logo from "../../logo.jpg";
// import { Link } from "react-router-dom";
// import { Flip } from "react-reveal";

function Navbar1(props) {
    const [active, setActive] = useState("");

    return (
        <>
            <div
                className={
                    (props.scroll ? "nav-header scrolled " : "nav-header ") + active
                }
            >
                <div
                    className="menubtn"
                    onClick={() => {
                        // setActive("active")
                        active === "" ? setActive("active") : setActive("");
                    }}
                >
                    <span></span>
                    <span style={{ width: active ? "75%" : "100%" }}></span>
                    <span style={{ width: active ? "50%" : "100%" }}></span>
                </div>

                <ul className="sub-menu">
                    <li>
                        <span>About</span>
                    </li>
                    <li>
                        <span>Find Talent</span>
                    </li>
                    <li>
                        <span>Find Work</span>
                    </li>
                    <li>
                        <span>Blog</span> 
                    </li>
                    <li className='active'>Let's Connect</li>

                </ul>
            </div>
        </>
    );
}

export default Navbar1;
