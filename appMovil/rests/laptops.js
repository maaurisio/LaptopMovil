const IP = "192.168.1.2";
const PORT = 3001;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllLaptops = (fnRefreshList) => {
    console.log("Mostrando laptops: ");
    fetch(
        URL + "laptops"
    ).then(
        (response) => {
            return response.json()
        }
    ).then(
        (body) => {
            fnRefreshList(body);
        }
    )
}