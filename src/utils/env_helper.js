const DEFAULT_API_URL = "http://localhost:8000"
// const DEFAULT_CANONICAL_DOMAIN = "https://catalog.buyete.com"

module.exports = {

    getApiUrlFromEnv: () => {
        let url = process.env["ADMIN_API_URL"];
        if (!url) {
            url = DEFAULT_API_URL;
        }

        if (url.endsWith("/")) {
            url = url.substring(0, url.length - 1);
        }

        return url;
    },
};
