import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

const socials = [
{
name: "Github",
url: "https://github.com/Cbaca4",
icon: faGithub,
color: "#5DE512",
},
{
name: "Linkedin",
url: "https://www.linkedin.com/in/cristian-baca-a07393241/",
icon: faLinkedin,
color: "#2EACE8",
},
];

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="footer-container">
                <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
                    {socials.map(({ name, url, icon, color }) => (
                        <div
                        key={name}
                        className="d-flex flex-column align-center mx-md-2 transparent-bg"
                        >
                            <a
                            href={url}
                            className={`icon ${name}`}
                            target="_blank"
                            rel="noreferrer"
                            >
                        <FontAwesomeIcon
                                icon={icon}
                                bounce
                                className="footer-icon-size"
                                style={{ color: color }}
                                />
                            </a>
                            <a href={url} target="_blank" rel="noreferrer">
                                <span className="d-inline-block mx-1 name">{name}</span>
                            </a>
                        </div>
                    ))}
                </section>
                <section className="form-footer">
                    <h5 className="designer-text">Designed by Cristian Baca</h5>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
