export type Task = {
    id: string;
    title: string;
    description: string;
    createdDate: string;
    createdBy: string;
};

export type Status = {
    id: string;
    name: string;
    items: Task[];
};

export type StatusList = Status[];

export const status: StatusList = [
    {
        id: "status-0001",
        name: "ToDo",
        items: [
            {
                id: "item-0001",
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
        id: "status-0002",
        name: "In Progress",
        items: [
            {
                id: "item-0002",
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
        id: "status-0003",
        name: "Done",
        items: [
            {
                id: "item-0003",
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
