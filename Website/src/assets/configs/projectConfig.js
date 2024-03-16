import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    //{
    //    id: "project-4",
    //    title: "Graphs Embeddings",
    //    links: [
    //        {
    //            name: "repo",
    //            url: "https://github.com/rodrigo-arenas/Graph-Embeddings",
    //            icon: <AiFillGithub/>,
    //        },
    //        {
    //           name: "fork",
    //            url: "https://github.com/rodrigo-arenas/Graph-Embeddings/fork",
    //            icon: <BiGitRepoForked/>,
    //        },
    //        {
    //            name: "subscription",
    //            url: "https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",
    //            icon: <AiFillEye/>,
    //        },
    //        {
    //            name: "docs",
    //            url: "https://graph-embeddings.readthedocs.io/",
    //            icon: <ImBook/>,
    //        }
    //    ],
    //    image: graphEmbeddings,
    //    description: "Graph embeddings for downstream tasks.",
    //    target: "_blank"
    //},
    {
        id: "project-0",
        title: "Personal Portfolio",
        links: [
            {
                name: "repo",
                url: "https://github.com/CallEmUp/personal-portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/CallEmUp/personal-portfolio/fork",
                icon: <BiGitRepoForked/>
            }
        ],
        image: portfolio,
        description: "Source code of my current portfolio web page.",
        target: "_blank",
        tags: ['React', 'NodeJS', 'CSS', 'JavaScript']
    }
]

export default projectConfig