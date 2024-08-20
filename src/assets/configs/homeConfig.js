import React from 'react'
import {BsClipboardData} from "react-icons/bs";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Trenton vonHartitzsch</strong>
        </h1>,
    titles: [
        "A NYU Student-Athlete",
        "An Aspiring Software Engineer",
        "An Upcoming Data Scientist",
    ],
    about: {
        start: "I've been working with software and websites for over two years, trying to expand my knowledge and understanding. " +
            "I am driven to learn new things, contributing my expertise to various projects" +
            " and companies.",
        exit: "I'm fluent at Python, Java, SQL databases, and more, " +
            "with a deep interest in machine learning and UI design."
    },
    workTimeline: [
        {
            id: "work-0",
            title: "Technology Intern",
            company: "L.D. Kerns Contractors",
            description: "Supported and enhanced L.D. Kerns Contractors digital infrastructure by implementing new technologies and collaborating on web development projects, gaining experience in system administration and project management within the construction industry",
            date: "June 2024-August 2024",
            icon: <BsClipboardData/>,
            tags: ["CSS", "Flask", "Postgresql", "Python"]
        },
        {
            id: "work-1",
            title: "Web Developer",
            company: "Self-Employed",
            description: "Designed, implemented, and monitored web pages, plugins, and functionality for continuous improvement for small businesses.",
            date: "2022-Current",
            icon: <BsClipboardData/>,
            tags: ["HTML", "JavaScript", "React"]
        }
    ]
}


export default homeConfig