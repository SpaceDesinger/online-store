import {useContext} from "react";
import {Context} from "@/context/context.ts";


export function useStores() {
    const context = useContext(Context)
    if(!context) {
        throw new Error("useStore must be used within Provider")
    }

    return context
}