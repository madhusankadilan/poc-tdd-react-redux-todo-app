import React from "react";
import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

describe("Side Bar Component Test Cases", () => {
    describe("Side Bar Component Initial Render", () => {
        test("render add toto text", () => {
            render(<SideBar />);

            const paragraphElement = screen.getByText("Add Todo", {
                exact: true,
            });

            expect(paragraphElement).toHaveClass("sidebar-title");
            expect(paragraphElement).toBeInTheDocument();
        });

        test("render title text box", () => {
            render(<SideBar />);

            const inputElement = screen.getByPlaceholderText("Title", {
                exact: true,
            });

            expect(inputElement).toHaveClass("title");
            expect(inputElement).toBeInTheDocument();
        });

        test("render description text box", () => {
            render(<SideBar />);

            const textareaElement = screen.getByPlaceholderText("Description", {
                exact: true,
            });

            expect(textareaElement).toHaveClass("description");
            expect(textareaElement).toBeInTheDocument();
        });

        test("render add todo button", () => {
            render(<SideBar />);

            const buttonElement = screen.getByRole("button", {
                name: "ADD",
            });

            expect(buttonElement).toHaveClass("add-btn");
            expect(buttonElement).toBeInTheDocument();
        });
    });
});
