import React from "react";


function Footer() {
    const copyrightYear = new Date().getFullYear();

    return (
        <div>
            <footer><p>Copyright {copyrightYear}</p></footer>
        </div>
    )
}

export default Footer;
