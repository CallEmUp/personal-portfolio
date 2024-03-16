import React from 'react'
import {SiMedium} from "react-icons/si";

const courseConfig = [
    {
        id: "basic_algorithms",
        title: "Basic Algorithms",
        links: [
            {
                name: "web",
                url: "https://cims.nyu.edu/~regev/teaching/basic_algorithms_spring_2022/index.html",
                icon: <SiMedium/>
            },
          //  {
          //      name: "repo",
          //      url: "https://github.com/rodrigo-arenas/fast-ml-deploy",
          //      icon: <AiFillGithub/>
          //  }
        ],
        image: "https://cs.nyu.edu/~spencer/basicalg/i3.jpeg",
        description: "Studied algorithm design, implementation, and efficiency analysis for sorting, searching, graph processing, and other dynamic data structures in Java and Python.",
        target: "_blank"
    },
    {
        id: "tools_for_data_scientist",
        title: "Programming Tools for the Data Scientist",
        links: [
            {
                name: "web",
                url: "https://cas.nyu.edu/academic-programs/bulletin/departments-and-programs/department-of-computer-science/course-offerings.html",
                icon: <SiMedium/>
            }
        ],
        image: "https://www.zucisystems.com/wp-content/uploads/2022/04/25-Data-Science-Tools-to-be-Used-in-2022-3.png",
        description: "Designed and implemented data science applications using Linux and key Python packages for textual analysis, data visualization, and other applied areas.",
        target: "_blank"
    },
    {
        id: "cso",
        title: "Computer Systems Organization",
        links: [
            {
                name: "web",
                url: "https://cs.nyu.edu/~jcf/classes/CSCI-UA.0201-007/",
                icon: <SiMedium/>
            }
        ],
        image: "https://slideplayer.com/7368598/24/images/slide_1.jpg",
        description: "Discovered the internal structure of computers, machine language " +
        "programming, and the use of pointers in high-level languages such as C.",
        target: "_blank"
    },
    {
        id: "data_science",
        title: "Principles of Data Science",
        links: [
            {
                name: "web",
                url: "https://bulletins.nyu.edu/courses/ds_ua/",
                icon: <SiMedium/>
            },
        ],
        image: "https://thumbs.dreamstime.com/b/data-science-uses-scientific-methods-processes-algorithms-systems-to-extract-knowledge-insights-various-concept-207016521.jpg",
        description: "Harnessed the fundamental principles and techniques of data science through " +
        "creating statistical algorithms to analyze real-world case study data.",
        target: "_blank"
    },
    {
        id: "data_structures",
        title: "Data Structures",
        links: [
            {
                name: "webpage",
                url: "https://cims.nyu.edu/~joannakl/cs102/",
                icon: <SiMedium/>
            }
        ],
        image: "https://user-images.githubusercontent.com/49293816/188543586-c9282564-6ab4-45d6-a305-50694f3e616d.png",
        description: "Implement various data structures such as arrays, linked lists, stacks, queues, trees, and graphs in Java.",
        target: "_blank"
    }
]

export default courseConfig