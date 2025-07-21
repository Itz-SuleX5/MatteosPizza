import { create } from "zustand";

export const useNavbar = create ((set) => ({
    productAdded: false, 
    triggerAnimation: false,
    setNavbarProductAdded: (value) => set({ productAdded: value}),
    setNavbarTriggerAnimation: (value) => set({triggerAnimation: value}),
}))