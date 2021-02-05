import axios from "axios";


const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://water-my-plants-four.herokuapp.com',
        headers: {
            Authorization: token
        }
    });
}

export default axiosWithAuth