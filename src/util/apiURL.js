export const apiURL = () => {
    return window.location.hostname === "localhost"
        ? "http://localhost:3003"
        : "https://git.heroku.com/powerful-plateau-95882.git"
};