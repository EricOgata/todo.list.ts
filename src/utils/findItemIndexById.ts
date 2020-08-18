interface Item {
    id: string;
}

const findItemIndexById = <T extends Item>(items: T[], id: string): number => {
    return items.findIndex((item: T) => item.id === id);
};

export { findItemIndexById };
