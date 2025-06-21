import { create } from "zustand";

export const usePermissionsStore = create((set) => ({
  permissions: [],
  setPermissions: (perms) => set({ permissions: perms }),
}));