import React from "react";
import OnlineCourse from './academic/online_course_discription/online_template.jsx';

const headContext = [
    {
        title: "Python",
        p: "kdljdl"
    }
];

export default function Online_python() {
    return (
        <OnlineCourse head={headContext} />
    );
}
