import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import { ProductDetails, ProductGrid } from "../components/Products";
import { getProduct, getProducts } from "../services/products";
import AuthGuard from "./Authguard";
import GuestGuard from "./GuestGuard";


const useRouter = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            loader: (params) => getProducts(params),
            element:
                <AuthGuard>
                    <ProductGrid />
                </AuthGuard>
        },
        {
            path: "/product/:id",
            loader: (id) => getProduct(id),
            element: (
                <AuthGuard>
                    <ProductDetails />
                </AuthGuard>
            ),
        },
        {
            path: "/login",
            element: (
                <GuestGuard>
                    <Login />
                </GuestGuard>
            ),
        },
        {
            path: "*",
            element: (
                <div className="text-red-600 text-2xl">Wrong path!!</div>
            ),
        },
    ]);

    return router;
}

export default useRouter;