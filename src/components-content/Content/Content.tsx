import { useState } from "react";
import { IStatus, status, StatusList } from "../../data";
import Status from "../Status";
import "./styles.css";

const Content = () => {
    const [statusList] = useState<StatusList>(status);

    if (statusList.length > 0) {
        return (
            <main className="content">
                {statusList.map((status: IStatus) => {
                    return <Status status={status} />;
                })}
            </main>
        );
    }

    return (
        <main className="content flex-center">
            <div className="basic-title">Add todo using sidebar</div>
        </main>
    );
};

export default Content;
