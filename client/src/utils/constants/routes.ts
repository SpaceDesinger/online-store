export const  ROUTES = {
    SHOP: '/',
    LOGIN: '/login',
    REGISTRATION: '/registration',
    CART: '/cart',
    ADMIN: '/admin',
    DEVICE: '/catalog/:id',
}  as const;

export const getDeviceRoute = (id: number | string) =>
    `/catalog/${id}`;