// import ToDoSideBar from "../containers/home/SideBar";
// import ToDoContent from "../containers/home/Content";

import Form from "../components/Form";
import Input from "../components/Input";



export default function Home() {
    return (
        <main className="home">
            {/* <ToDoSideBar />
            <ToDoContent /> */}
            <Form layout="inline">
                <Input label="Label A" />
                <Input label="Label B" />
                <Input label="Label C" />
                <Input label="Label D" />
            </Form>
            <Form layout="horizontal">
                <Input label="Label A" />
                <Input label="Label B" />
                <Input label="Label C" />
                <Input label="Label D" />
            </Form>
            <Form layout="vertical">
                <Input label="Label A" />
                <Input label="Label B" />
                <Input label="Label C" />
                <Input label="Label D" />
            </Form>
            <Input label="First Name" />
        </main>
    );
}