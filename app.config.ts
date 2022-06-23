require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

export default {
    expo: {
        name: "hirehouse",
        slug: "hirehouse",
        version: "2.0.24",
        orientation: "portrait",
        icon: "./assets/icon.png",
        plugins: [
            [
                "expo-image-picker",
                {
                    photosPermission:
                        "The access your photos to upload a profile picture",
                },
            ],
            [
                "expo-notifications",
                {
                    icon: "./assets/icon.png",
                    color: "#ffffff",
                    sounds: ["./assets/mixkitscifirejectnotification896.wav"],
                    iosDisplayInForeground: true,
                },
            ],
        ],
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff",
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ["**/*"],
        ios: {
            supportsTablet: true,
            usesIcloudStorage: true,
            entitlements: {
                "com.apple.developer.networking.wifi-info": true,
            },
            bundleIdentifier: "ca.hirehouse.mobile",
            infoPlist: {
                UIBackgroundModes: ["remote-notification"],
            },
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/icon.png",
                backgroundColor: "#FFFFFF",
            },
            package: "ca.hirehouse.mobile",
            permissions: ["CAMERA", "MICROPHONE"],
        },
        web: {
            favicon: "./assets/favicon.png",
        },
        description: "Mobile App for HireHouse",
        extra: {
            apiURL: process.env.API_URL,
            uploadURL: process.env.UPLOAD_URL,
            videoCallURL: process.env.VIDEO_CALL_URL,
            cardTokenURL: process.env.CARD_TOKEN_URL,
            cardTokenKey: process.env.CARD_TOKEN_KEY,
        },
    },
};
