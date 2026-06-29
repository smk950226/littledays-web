export default abstract class Env {
    static store = {
        ios: 'VITE_APP_STORE_ID',
        android: 'VITE_PACKAGE_NAME',
    };

    static api = {
        uri: 'VITE_API_URI',
        version: 'VITE_API_VERSION',
        key: 'VITE_API_KEY',
        header: {
            version: 'VITE_HEADER_API_VERSION',
            key: 'VITE_HEADER_API_KEY',
            locale: 'VITE_HEADER_LOCALE',
            platform: 'VITE_HEADER_PLATFORM',
        },
    };

    static firebase = {
        apiKey: 'VITE_FIREBASE_API_KEY',
        authDomain: 'VITE_FIREBASE_AUTH_DOMAIN',
        projectId: 'VITE_FIREBASE_PROJECT_ID',
        storageBucket: 'VITE_FIREBASE_STORAGE_BUCKET',
        messagingSenderId: 'VITE_FIREBASE_MESSAGING_SENDER_ID',
        appId: 'VITE_FIREBASE_APP_ID',
        measurementId: 'VITE_FIREBASE_MEASUREMENT_ID',
    };
}
