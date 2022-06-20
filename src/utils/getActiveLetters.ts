import { TagCategory } from "../typings/enums";
import { ITag } from "../typings/interfaces";

export default (tags: ITag[], category: TagCategory): string[] => {
    const al: string[] = [];

    tags.forEach((t: ITag) => {
        const idx: number = al.indexOf(t.value[0]);
        if (idx < 0 && t.category === category) {
            al.push(t.value[0].toLowerCase());
        }
    });

    return al;
};
