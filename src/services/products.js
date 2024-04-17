import axiosInstance from "./axiosInstance";

export const getProducts = async (params) => {
    const data = await axiosInstance.get("products")
    return data.data;
}

export const getProduct = async (params) => {
    const data= await axiosInstance.get(`products/${params.params.id}`);
    return data.data;
}