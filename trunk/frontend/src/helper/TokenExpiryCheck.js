import axios from "axios";

export const TokenExpiryCheck = () => {
    const config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
    }

    if(!localStorage.getItem('token')) {
        return false;
    }

    axios.get('/api/auth/validate-token-expiry', config).then((response) => {
        if(!response.data) {
            localStorage.clear();
            document.location.href = "/login"
        }
    })
}