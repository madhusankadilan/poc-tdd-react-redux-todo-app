import React from "react";
import ToDoContent from "../Content";
import ToDoSideBar from "../SideBar";

const ToDoWrapper = () => {
    return (
        <>
            <ToDoSideBar />
            <ToDoContent />
        </>
    );
};

export default ToDoWrapper;
