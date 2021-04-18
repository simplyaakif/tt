import apiTalktimeClient from "./clientTalktime";

const login = (email, password, device_name) => apiTalktimeClient.post("/app/login", {
    email,
    password,
    device_name
})

const register = (name, profession, email, password, device_name) => apiTalktimeClient.post("/app/login", {
    name,
    profession,
    email,
    password,
    device_name
})

export default {
    login,
    register
}
