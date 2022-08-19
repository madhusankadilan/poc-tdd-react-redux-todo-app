import React, { useState } from "react";
import { Status, status, StatusList } from "../data";
import "./styles.css";

const Content = () => {
    const [statusList, setStatusList] = useState<StatusList>(status);

    if (statusList.length > 0) {
        return (
            <main className="content">
                {statusList.map((status: Status) => {
                    return (
                        <div className="status-section" key={status.id}>
                            <div className="status-title-wrapper">
                                <p className="status-title">{status.name}</p>
                            </div>
                            <div className="status-body">
                                {status.items.length > 0
                                    ? status.items.map((item) => {
                                          return (
                                              <div
                                                  className="status-card"
                                                  key={item.id}
                                              >
                                                  <div className="card-header">
                                                      <p className="card-title">
                                                          {item.title}
                                                      </p>
                                                  </div>
                                                  <div className="card-body">
                                                      <span className="created-date">
                                                          {item.createdDate}
                                                      </span>
                                                      <span className="ellipse"></span>
                                                      <span className="created-by">
                                                          {item.createdBy}
                                                      </span>
                                                  </div>
                                                  <div className="card-footer">
                                                      <span className="status-badge">
                                                          {status.name.toUpperCase()}
                                                      </span>
                                                  </div>
                                              </div>
                                          );
                                      })
                                    : null}
                            </div>
                        </div>
                    );
                })}
            </main>
        );
    }

    return null;
};

export default Content;
