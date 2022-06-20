import {
    Color,
    CreditCardType,
    SupportedCountry,
    TagCategory,
    UserStatus,
} from "./enums";
import { ICheckout, IConnection, ICreditCard, ITagChooser } from "./interfaces";

export const tagCategories: TagCategory[] = [
    TagCategory.SKILLS,
    TagCategory.AVAILABILITY,
    TagCategory.CITY,
    TagCategory.TRANSPORTATION,
    TagCategory.EDUCATION,
    TagCategory.SALARY,
];

export const alphabet: string[] = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x).toLocaleLowerCase());

export const initialTagChooserState: ITagChooser = {
    filteredTags: [],
    selectedTags: [],
    category: TagCategory.SKILLS,
    letter: "a",
    activeLetters: [],
    summaryVisible: false,
    visible: false,
    editable: false,
    addCitiesVisible: false,
};

export const initialCheckoutState: ICheckout = {
    message: "",
};

export const initialCreditCardState: ICreditCard = {
    token: "",
    number: "",
    expiration: "",
    cvc: "",
};

export const initialConnectionState: IConnection = {
    _id: "",
    employer: {
        _id: "",
        fullName: "",
        avatar: "",
        inVideoSession: false,
    },
    employee: {
        _id: "",
        fullName: "",
        avatar: "",
        inVideoSession: false,
    },
    withVideoSession: false,
    expiresAt: new Date(),
    createdAt: new Date(),
};

export const userStatusColors: { [key: string]: string } = {
    [UserStatus.AVAILABLE]: "green",
    [UserStatus.LOOKING]: "goldenrod",
    [UserStatus.UNAVAILABLE]: Color.RED,
};

export const userStatuses: UserStatus[] = [
    UserStatus.AVAILABLE,
    UserStatus.UNAVAILABLE,
    // UserStatus.LOOKING,
];

export const cardMasks: { [key: string]: string } = {
    [CreditCardType.MASTERCARD_2017]: "9999 9999 9999 9999",
    [CreditCardType.AMERICAN_EXPRESS]: "9999 999999 99999",
    [CreditCardType.VISA]: "9999 9999 9999 9999",
    [CreditCardType.MASTERCARD]: "9999 9999 9999 9999",
    [CreditCardType.DISCOVER]: "9999 9999 9999 9999",
};

export const cardDigits: { [key: string]: string } = {
    "2": CreditCardType.MASTERCARD_2017,
    "3": CreditCardType.AMERICAN_EXPRESS,
    "4": CreditCardType.VISA,
    "5": CreditCardType.MASTERCARD,
    "6": CreditCardType.DISCOVER,
};

export const addTransactionAmountOptions: number[][] = [
    [1000, 2000, 3000, 4000],
    [10000, 20000, 30000, 40000],
    [100000, 150000, 200000, 250000],
];

export const filteredTagCategories: TagCategory[] = [TagCategory.SKILLS];

export const supportedCountries: SupportedCountry[] = [
    SupportedCountry.CANADA,
    SupportedCountry.USA,
];
