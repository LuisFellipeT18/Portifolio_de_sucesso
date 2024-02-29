import { useState } from "react";
import style from "./styles.module.scss";
import { user } from "../../data/user";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const phoneNumber = "573057696280";

    const whatsappButtonClick = () => {
        const formattedNumber = phoneNumber.replace(/\D/g, '');
        const whatsappLink = `https://wa.me/${formattedNumber}`;
        window.open(whatsappLink, '_blank');
    };

    const handleMenuButtonClick = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    return (
        <header className={style.container}>
            <nav className={style.container_division}>
                <div className={style.perfil_division}>
                    <img className={style.img_perfil} src="/fellipe2.jpg" alt="Dev" />
                    <p className={style.name_user}>{user}</p>
                </div>

                <button className={style.menu_button} onClick={handleMenuButtonClick}>
                    <div className={style.hamburger}></div>
                    <div className={style.hamburger}></div>
                    <div className={style.hamburger}></div>
                </button>

                <div className="menu-container">
                    <ul className={`${style.menu} ${menuOpen ? style.show : ''}`}>
                        <li>
                            <button className="btn" onClick={whatsappButtonClick}>Falar no whatsapp</button>
                        </li>
                        <li>
                            <a href="https://github.com/LuisFellipeT18" target="_blank">
                                <img className={style.img_links} src="/github.png" alt="GitHub" title="GitHub"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/luis-fellipe-ferraz-garcia-186005115/" target="_blank">
                                <img className={style.img_links} src="/linkedin.png" alt="Linkedin" title="Linkedin"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};