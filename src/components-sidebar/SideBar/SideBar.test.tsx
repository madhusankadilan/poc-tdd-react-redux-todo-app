import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SideBar from "./SideBar";

// setup function
function setup(jsx: JSX.Element) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    };
}

describe("Initial Render", () => {
    test("render add toto text", () => {
        render(<SideBar />);

        const paragraphElement = screen.getByText("Add Todo", {
            exact: true,
        });

        expect(paragraphElement).toHaveClass("sidebar-title");
        expect(paragraphElement).toBeInTheDocument();
    });

    test("render title text box with empty value and having class 'title'", () => {
        render(<SideBar />);

        const inputElement = screen.getByPlaceholderText("Title", {
            exact: true,
        });

        expect(inputElement).toHaveClass("title");
        expect(inputElement).toHaveValue("");
        expect(inputElement).toBeInTheDocument();
    });

    test("render description text box with empty value and having class 'description'", () => {
        render(<SideBar />);

        const textareaElement = screen.getByPlaceholderText("Description", {
            exact: true,
        });

        expect(textareaElement).toHaveClass("description");
        expect(textareaElement).toHaveValue("");
        expect(textareaElement).toBeInTheDocument();
    });

    test("render add todo button with class 'add-btn' and disabled when loading", () => {
        render(<SideBar />);

        const buttonElement = screen.getByRole("button", {
            name: "ADD",
        });

        expect(buttonElement).toHaveClass("add-btn");
        expect(buttonElement).toBeDisabled();
        expect(buttonElement).toBeInTheDocument();
    });
});

describe("Event Handling", () => {
    test("onChange title field", async () => {
        const { user } = setup(<SideBar />);
        const inputElement: HTMLInputElement = screen.getByPlaceholderText(
            "Title",
            {
                exact: true,
            }
        );

        await user.type(inputElement, "Title");
        expect(inputElement).toHaveValue("Title");
        // expect(inputElement.value).toBe("Test Title");
    });

    test("onChange description field", async () => {
        const { user } = setup(<SideBar />);
        const textareaElement = screen.getByPlaceholderText("Description", {
            exact: true,
        });

        await user.type(textareaElement, "Description");
        expect(textareaElement).toHaveValue("Description");
        // expect(textareaElement.value).toBe("Description");
    });

    test("ADD button should enabled when title and description boxes are not empty", async () => {
        const { user } = setup(<SideBar />);

        const buttonElement = screen.getByRole("button", {
            name: "ADD",
        });

        const textareaElement = screen.getByPlaceholderText("Description", {
            exact: true,
        });

        const inputElement: HTMLInputElement = screen.getByPlaceholderText(
            "Title",
            {
                exact: true,
            }
        );

        await user.type(inputElement, "Title");
        await user.type(textareaElement, "Description");
        expect(buttonElement).not.toBeDisabled();
    });
});
