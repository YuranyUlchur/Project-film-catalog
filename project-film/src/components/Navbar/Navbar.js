import React from "react";

export const Navbar = ({brand}) => {
    return(
        <nav>
            <div>
                <a href="/">{brand}</a>
            </div>
        </nav>
    )
}
