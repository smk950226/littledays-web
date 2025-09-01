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
}
