import React, {useState} from 'react'
import "./Nav.scss"
import lineLogo from "../LINE_Brand_icon.png"
import logo_small from "../logo_small.png"

export const Nav = () => {
    const [hide, setHide] = useState(true)
    const hiddenMenu = [
        {
            title: "加密貨幣市場",
            link: "#"
        },
        {
            title: "產品",
            link: "#"
        },
        {
            title: "獲利計算",
            link: "#"
        },
        {
            title: "加密貨幣介紹",
            link: "#"
        },
        {
            title: "市場風險",
            link: "#"
        },
        {
            title: "聯絡我們",
            link: "#"
        },
    ]

    const handleOnlick = () => {
        setHide(prev => !prev)
    }

    return (<>
        <nav className="navbar">
            <div class="navbar__container">
                {/* hamburger  */}
                <button class={hide ? "hamburger" : "hamburger open"} id="menu-btn" onClick={ handleOnlick }>
                    <span class="hamburger-top"></span>
                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>
                </button>

                <a href="#" className="navbar__logo">
                    <img src={logo_small} className="logo--sized" alt="logo"></img>
                </a>

                <a href="#" className="navbar__logo">
                    <img src={lineLogo} alt="line"></img>
                </a>
            </div>
        </nav>
        <div class={hide ? "mobile-menu hidden" : "mobile-menu"} id="menu">
            <ul>
                {hiddenMenu.map(item => <li className="mobile-menu__item"><a href={item.link}></a>{item.title}</li>)}
            </ul>
        </div>
    </>)
}
