export const apiURL = () => {
    return window.location.hostname === "localhost"
        ? "http://localhost:5000"
        : "https://powerful-plateau-95882.herokuapp.com/"
};