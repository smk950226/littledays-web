export default abstract class Sizing {
    static layout = {
        screen: {
            mobile: 0,
            tablet: 768,
            laptop: 1024,
            desktop: 1280,
        },
        width: {
            min: 320,
            max: 1920,
        },
    };

    static padding = {
        vertical: 22,
        horizontal: 20,
    };

    static icon = 24;
}
