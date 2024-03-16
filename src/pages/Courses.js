import CardItem from "../components/Cards/CardItem";
import "../components/Cards/CardItem.css";
import courseConfig from "../assets/configs/courseConfig"
import React from 'react'

const Courses = () => {
    return (
        <div className="wrapper">
            {courseConfig.map((item) => (
                    <CardItem item={item}/>
                )
            )}
        </div>)
}

export default Courses