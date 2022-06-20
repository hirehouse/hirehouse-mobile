export const enum LANGUAGE {
    EN = "en",
    FR = "fr",
}

export const enum SocketRoom {
    PERSONAL = "personal",
    CONNECTION = "connection",
}

export const enum SocketEvent {
    SOCKET_CONNECT = "connection",
    SOCKET_DISCONNECT = "disconnect",
    SOCKET_ERROR = "SOCKET_ERROR",
    JOIN = "JOIN",
    LEAVE = "LEAVE",
    MESSAGE = "MESSAGE",
    TYPING = "TYPING",
    JOIN_CONNECTION = "JOIN_CONNECTION",
    LEAVE_CONNECTION = "LEAVE_CONNECTION",
    JOIN_PERSONAL = "JOIN_PERSONAL",
    LEAVE_PERSONAL = "LEAVE_PERSONAL",
    JOIN_VIDEO_SESSION = "JOIN_VIDEO_SESSION",
    LEAVE_VIDEO_SESSION = "LEAVE_VIDEO_SESSION",
    WEBRTC = "WEBRTC",
}

export const enum WebRTCEvent {
    OFFER = "offer",
    ANSWER = "answer",
    CANDIDATE = "candidate",
    LEAVE = "leave",
}

export const enum UserStatus {
    AVAILABLE = "available",
    UNAVAILABLE = "unavailable",
    LOOKING = "looking",
}

export const enum ContextAction {
    CONNECTION_MESSAGE = "CONNECTION_MESSAGE",
}

export const enum Color {
    RED = "#c2410a",
    BLACK_TEXT = "#111827",
    ORANGE_TEXT = "#ea580b",
    LIGHT_GREY_BG = "#f1f5f9",
    LOGO = "#c2410a",
    GREY_TEXT = "#626d7c",
    WHITE = "#ffffff",
    DARK_RED = "#db4809",
    VERSION_COLOR = "#d4d5d6",
}

export const enum SettingField {
    PRICE_PER_USER = "pricePerUser",
    ORDER_EXPIRATION_VALUE = "orderExpirationValue",
    ORDER_EXPIRATION_UNIT = "orderExpirationUnit",
    TAGS_VERSION = "tagsVersion",
}

export const enum TagCategory {
    SKILLS = "skills",
    AVAILABILITY = "availability",
    CITY = "city",
    TRANSPORTATION = "transportation",
    EDUCATION = "education",
    SALARY = "salary",
}

export const enum ErrorCode {
    DEFAULT,
    INVALID_EMAIL = "invalidEmail",
    WRONG_CREDENTIALS = "wrongCredentials",
    EMAIL_EXISTS = "emailExists",
    EMAIL_NOT_FOUND = "emailNotFound",
    INVALID_PIN = "invalidPIN",
}

export const enum AppRoute {
    HOME = "/",
    SEARCH_FILTERS = "/search-filters",
    SEARCH_RESULTS = "/search-results",
    CHECKOUT = "/checkout",
    USER_PROFILE = "/user-profile",
    USER_CONNECTIONS = "/user-connections",
    USER_CONNECTION = "/user-connection/:_id",
    USER_ORDERS = "/user-orders",
    USER_TRANSACTIONS = "/user-transactions",
    USER_NOTIFICATIONS = "/user-notifications",
    LOGIN = "/login",
    REGISTER = "/register",
    FORGOT_PASSWORD = "/forgot-password",
    SET_PASSWORD = "/set-password",
}

export const enum ProductCode {
    CONNECTION = "connection",
    VIDEO_SESSION = "video-session",
}

export const enum IconType {
    ANT_DESIGN = "antdesign",
    ENTYPO = "entypo",
    EVIL_ICONS = "evil-icons",
    FEATHER = "feather",
    FONT_AWESOME = "font-awesome",
    FONT_AWESOME_5 = "font-awesome-5",
    FONTISTO = "fontisto",
    FOUNDATION = "foundation",
    MATERIAL_COMMUNITY = "material-community",
    MATERIAL = "material",
    ZOCIAL = "zocial",
    OCTICONS = "octicons",
    SIMPLE_LINE_ICONS = "simple-line-icons",
}

export const enum CreditCardType {
    MASTERCARD_2017 = "mastercard2017",
    AMERICAN_EXPRESS = "amex",
    VISA = "visa",
    MASTERCARD = "mastercard",
    DISCOVER = "discover",
}

export const enum PaymentMethod {
    CARD = "card",
    BALANCE = "balance",
}

export const enum NotificationCategory {
    MESSAGE = "message",
    SYSTEM = "system",
}

export const enum SupportedCountry {
    USA = "usa",
    CANADA = "canada",
}
