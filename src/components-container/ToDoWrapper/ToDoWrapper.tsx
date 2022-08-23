import React from "react";
import ToDoContent from "../../components-content";
import ToDoSideBar from "../../components-sidebar";

const ToDoWrapper = () => {
    return (
        <>
            <ToDoSideBar />
            <ToDoContent />
        </>
    );
};

export default ToDoWrapper;
