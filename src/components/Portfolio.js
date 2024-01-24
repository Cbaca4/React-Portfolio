import React from "react";
import Project from "./Project";
import "bootstrap/dist/css/bootstrap.min.css";
import "..style/Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio-wrapper">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="container">
                <div className="row">
                    {[
                        {
                        title:
                        description:
                        imgSrc:
                        deployedLink:
                        githubLink:
                        },
                        {
                            title:
                            description:
                            imgSrc:
                            deployedLink:
                            githubLink:
                            },
                            {
                                title:
                                description:
                                imgSrc:
                                deployedLink:
                                githubLink:
                                },
                                {
                                    title:
                                    description:
                                    imgSrc:
                                    deployedLink:
                                    githubLink:
                                    },
                                    {
                                        title:
                                        description:
                                        imgSrc:
                                        deployedLink:
                                        githubLink:
                                        },
                                        {
                                            title:
                                            description:
                                            imgSrc:
                                            deployedLink:
                                            githubLink:
                                            },
                    ]}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;