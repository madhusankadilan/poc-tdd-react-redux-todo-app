export type Task = {
    title: string;
    description: string;
    createdDate: string;
    createdBy: string;
};

export type Status = {
    name: string;
    items: Task[];
};

export type StatusList = Status[];

export const status: StatusList = [
    {
        name: "ToDo",
        items: [
            {
                title: "Treatment by Fire",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
               . Ut enim ad minim ven nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea
               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
               . Ut enim ad minim ven nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea`,
                createdDate: "12/01/2020",
                createdBy: "Dilan Madhusanka",
            },
        ],
    },
    {
        name: "In Progress",
        items: [
            {
                title: "Treatment by Water",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
               . Ut enim ad minim ven nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea
               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
               . Ut enim ad minim ven nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea`,
                createdDate: "12/01/2020",
                createdBy: "Dilan Madhusanka",
            },
        ],
    },
    {
        name: "Done",
        items: [
            {
                title: "Treatment by Ice",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
               . Ut enim ad minim ven nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea
               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
               . Ut enim ad minim ven nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea`,
                createdDate: "12/01/2020",
                createdBy: "Dilan Madhusanka",
            },
        ],
    },
];
