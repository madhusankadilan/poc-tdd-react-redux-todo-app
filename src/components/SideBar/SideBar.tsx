import React from "react";
import "./styles.css";

const SideBar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <p className="sidebar-title">Add Todo</p>
            </div>
            <div className="sidebar-content">
                <div className="form-group-title">
                    <input className="title" type="text" placeholder="Title" />
                </div>
                <div className="form-group-description">
                    <textarea className="description" placeholder="Description"></textarea>
                </div>
                <div className="form-group-add-btn">
                    <button className="add-btn">ADD</button>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
