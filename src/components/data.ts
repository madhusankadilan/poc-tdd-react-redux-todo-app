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

export const status: StatusList = [];
