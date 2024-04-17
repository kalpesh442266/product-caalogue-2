import axiosInstance from "./axiosInstance"

export const loginUser = async (value) => {
    try {
        const user = await axiosInstance.post('auth/login', JSON.stringify(value), { headers: { 'Content-Type': 'application/text' } })
        console.log(user)
        return user;
    } catch (e) {
        console.error(e)
        return e.response.data.message
    }
    // console.log(user)
    // return user;

}