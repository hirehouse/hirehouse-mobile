import { Dispatch } from "react";
//import { MediaStream } from "react-native-webrtc";
import {
    AppRoute,
    LANGUAGE,
    NotificationCategory,
    PaymentMethod,
    ProductCode,
    SupportedCountry,
    TagCategory,
    UserStatus,
    WebRTCEvent,
} from "./enums";

export interface IAppConfig {
    apiURL: string;
    uploadURL: string;
    videoCallURL: string;
    cardTokenURL: string;
    cardTokenKey: string;
    sessionCookieName: string;
    registerCookieName: string;
    resetCookieName: string;
    currency: {
        symbol: string;
        label: string;
    };
    version: string;
}

export interface IUserProfile {
    _id: string;
    status: UserStatus;
    sortIndex: Date;
    fullName: string;
    initials: string;
    email: string;
    avatar: string;
    resume: string;
    description: string;
    tags: string[];
    balance: number;
    notifications: INotification[];
    createdAt: Date;
    notificationToken: string;
}

export interface IContext {
    dispatch: Dispatch<any>;
    networkStatus: boolean;
    config: IAppConfig;
    userProfile: IUserProfile | null;
    loading: boolean;
    language: LANGUAGE;
    tags: ITag[];
    products: IProduct[];
    tagChooser: ITagChooser;
    results: IUserResult[];
    creditCard: ICreditCard;
    nextRoute: AppRoute | null;
    connections: IConnection[];
    connection: IConnection;
    messages: IMessage[];
    message: string;
    orders: IOrder[];
    fromToFilter: Date[];
    transactions: ITransaction[];
    notifications: INotification[];
    socket: SocketIOClient.Socket | null;
    locations: {
        country: SupportedCountry;
        city: string;
        [SupportedCountry.USA]: { label: string; value: string }[];
        [SupportedCountry.CANADA]: { label: string; value: string }[];
    };
    inVideoSession: boolean;
    videoSession: IVideoSession;
}

export interface IVideoSession {
    fullscreen: boolean;
    video: boolean;
    audio: boolean;
    //rtcPeerConnection: RTCPeerConnection;
    // remoteStream: MediaStream | null;
    //localStream: MediaStream | null;
}

export interface IWebRTCPayload {
    category: WebRTCEvent;
    data: any;
}

export interface ITag {
    _id: string;
    category: string;
    value: string;
}

export interface ISetting {
    _id: string;
    label: string;
    description: string;
    field: string;
    defaultValue: string;
    value: string;
}

export interface IUserResult {
    _id: string;
    status: UserStatus;
    sortIndex: Date;
    fullName: string;
    initials: string;
    avatar: string;
    tags: string[];
    tagList: ITag[];
    video?: boolean;
}

export interface ITagChooser {
    filteredTags: ITag[];
    selectedTags: string[];
    category: TagCategory;
    letter: string;
    activeLetters: string[];
    summaryVisible: boolean;
    visible: boolean;
    editable: boolean;
    addCitiesVisible: boolean;
}

export interface IReceiver extends IUserResult {
    message: string;
}
export interface ICheckout {
    message: string;
}

export interface IProductMetadata {
    connections: IUserResult[];
}

export interface IProductExtra {
    code: ProductCode;
    name: string;
    price: number;
    quantity: number;
    discount: number;
}

export interface IProduct {
    _id?: string;
    code: ProductCode;
    name: string;
    description: string;
    image: string;
    quantity: number;
    price: number;
    discount: number;
    metadata: IProductMetadata;
    extras: IProductExtra[];
}

export interface ICreditCard {
    token: string;
    number: string;
    expiration: string;
    cvc: string;
}

export interface INotification {
    _id: string;
    user: string;
    category: NotificationCategory;
    content: string;
    acknowledgedAt: Date;
    acknowledged: boolean;
    metadata: {
        user: {
            _id: string;
            fullName: string;
            avatar: string;
        };
        connection: string;
        category: NotificationCategory;
    };
    createdAt: Date;
}

export interface ICardTokenResponse {
    id: string;
    object: string;
    card: any;
}

export interface ICardTokenErrorResponse {
    error: {
        code: string;
        doc_url: string;
        message: string;
        param: string;
        type: string;
    };
}

export interface IMessage {
    _id: string;
    connection: string;
    user: {
        _id: string;
        fullName: string;
        avatar: string;
        inVideoSession: boolean;
    };
    content: string;
    createdAt: Date;
}

export interface IConnectionUser {
    _id: string;
    fullName: string;
    avatar: string;
    inVideoSession: boolean;
}

export interface IConnection {
    _id: string;
    employer: IConnectionUser;
    employee: IConnectionUser;
    withVideoSession: boolean;
    expiresAt: Date;
    createdAt: Date;
}

export interface IOrderProduct {
    _id: string;
    code: ProductCode;
    name: string;
    image: string;
    price: number;
    discount: number;
    quantity: number;
    subTotal: number;
    metadata: any;
}

export interface IPaymentMethod {
    method: PaymentMethod;
    amount: number;
    paymentId: string;
}

export interface IOrder {
    _id: string;
    orderNumber: string;
    user: string;
    products: IOrderProduct[];
    paymentMethods: IPaymentMethod[];
    total: number;
    createdAt: Date;
}

export interface ITransaction {
    _id?: string;
    user: string;
    amount: number;
    paymentId: string;
    date: Date;
}
