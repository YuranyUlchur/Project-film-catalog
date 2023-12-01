import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.css';
import { FaFilm } from 'react-icons/fa';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';



// MovieList component definition
export const Footer = () => {
    return (
        <>

            <footer className={styles.footer} id='contact'>
                <div className={styles.dividerCustom}>
                    <div className={styles.dividerCustomLine}></div>
                </div>
                <div className={styles.rowfooter}>
                    <div>
                        <Link className={styles.titlepage} to="/">
                            <FaFilm /> Film catalog
                        </Link>
                    </div>

                    <div>
                        <div className={styles.iconscontact}>
                            <a className={styles.btnSocial} href="https://twitter.com/"><FaTwitter /></a>
                            <a className={styles.btnSocial} href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                            <a className={styles.btnSocial} href="https://github.com/"><FaGithub /></a>
                        </div>

                    </div>
                </div>
            </footer>
            <div className={styles.footerBottom}>
                <div>
                    <small>&copy; 2023 Yurany Ulchur</small>
                </div>
            </div>
        </>
    );
}