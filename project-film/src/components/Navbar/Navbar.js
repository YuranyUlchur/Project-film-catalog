import React from "react";
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarNav}>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="#inicio">Inicio</a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="#peliculas">Películas</a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="#estrenos">Estrenos</a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="#trailers">Trailers</a>
                </li>
            </ul>
        </nav>
    );
}
