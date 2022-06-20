import { SettingField } from "../typings/enums";
import { ISetting } from "../typings/interfaces";

export default (
    settings: ISetting[],
    field: SettingField
): string | undefined => {
    return settings.find((setting: ISetting) => setting.field === field)?.value;
};
