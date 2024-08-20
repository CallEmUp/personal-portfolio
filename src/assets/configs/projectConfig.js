import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";
import portfolio from "../images/portfolio.png"
import spotify from "../images/spotify.png"
import notes from "../images/notes.png"
import TravelTime from "../images/TravelTime.png"
import rentRoute from "../images/RentRoute.png"

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
        title: "NYC Apartment Rental",
        links: [
            {
                name: "repo",
                url: "https://github.com/CallEmUp/TravelTimeRental",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/CallEmUp/TravelTimeRental/fork",
                icon: <BiGitRepoForked/>
            }
        ],
        image: TravelTime,
        description: "Forget how far something is, the more important question is how long does it take to get there? Source code and full analysis on apartments within isochronic areas to provide deeper insight into what the best apartment avaliable is.",
        target: "_blank",
        tags: ['Python', 'Folium', 'TravelTime API', 'Machine Learning', 'Seaborn']
    },
    {
        id: "project-1",
        title: "Django & React Notes App",
        links: [
            {
                name: "repo",
                url: "https://github.com/CallEmUp/djangoReactNotes",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/CallEmUp/djangoReactNotes/fork",
                icon: <BiGitRepoForked/>
            }
        ],
        image: notes,
        description: "Source code of my notes app made with Django and React, utilizing RESTful API that efficiently manages CRUD operations for notes.",
        target: "_blank",
        tags: ['React', 'Django', 'CSS', 'HTML', 'Python']
    },
    {
        id: "project-2",
        title: "Spotify Song Data Analysis",
        links: [
            {
                name: "repo",
                url: "https://github.com/CallEmUp/spotifySongAnalysis",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/CallEmUp/spotifySongAnalysis/fork",
                icon: <BiGitRepoForked/>
            }
        ],
        image: spotify,
        description: "Source code and full analysis on Spotify songs to provide deeper insight into what makes songs popular in an attempt to help up and coming artists.",
        target: "_blank",
        tags: ['Python', 'Pandas', 'Numpy', 'Scikit-Learn', 'Machine Learning']
    },
    {
        id: "project-3",
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
    },
    {
        id: "project-4",
        title: "RentRoute",
        links: [
            {
                name: "repo",
                url: "https://github.com/CallEmUp/RentRoute",
                icon: <AiFillGithub/>
            }
        ],
        image: rentRoute,
        description: "Find your ideal NYC apartment based on commute time with RentRoute. My app uses real-time data to match you with rentals that fit your preferred travel time and transportation mode, making apartment hunting more efficient. Say goodbye to long commutes and hello to a home that works for your life. RentRoute—your next home, just a ride away.",
        target: "_blank",
        tags: ['Python', 'Folium', 'TravelTime API', 'Machine Learning', 'Seaborn']
    }
]

export default projectConfig