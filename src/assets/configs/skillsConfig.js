import {
    SiPython,
    SiReact,
    SiGitAlt,
    SiPandas,
    SiHtml5,
    SiPostgresql,
    SiMysql,
    SiJavascript,
    SiDjango,
    SiFlask,
    SiNumpy,
    SiCss3,
    SiFolium,
    SiScikitlearn
} from "react-icons/si";
import { FaJava, FaGitAlt, FaChartBar, FaNodeJs } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <FaJava size={50}/>,
            text: "Java"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiPandas size={50}/>,
            text: "Pandas"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML5"
        }
    ],
    complementarySkills: [
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JavaScript"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiDjango size={50}/>,
            text: "Django"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiFlask size={50}/>,
            text: "Flask"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiNumpy size={50}/>,
            text: "Numpy"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <FaChartBar size={50}/>,
            text: "Seaborn"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiFolium size={50}/>,
            text: "Folium"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <GiArtificialIntelligence size={50}/>,
            text: "Machine Learning"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <FaNodeJs size={50}/>,
            text: "NodeJS"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit"
        }
    ]
}

export default skillsConfig;
