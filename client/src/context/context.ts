import {createContext} from "react";
import type {Stores} from "@/stores";

export const Context = createContext<Stores | null>(null)