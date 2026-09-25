import UserStore from "@/store/UserStore.ts";
import DeviceStore from "@/store/DeviceStore.ts";

export const stores = {
    user: new UserStore(),
    device: new DeviceStore()
}
export type Stores = typeof stores