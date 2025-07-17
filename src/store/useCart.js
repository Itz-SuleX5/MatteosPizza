import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const existing = state.items.find(item => item.id === product.id);
          if (existing) {
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: (item.quantity || 1) + 1 }
                  : item
              ),
            };
          }
          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        }),
      incrementQuantity: (id) =>
        set((state) => ({
          items: state.items.map(item =>
            item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
          ),
        })),
      decrementQuantity: (id) =>
        set((state) =>  ({
          items: state.items
          .map(item =>
            item.id === id
            ? { ...item, quantity: item.quantity - 1}
            : item
          )
          .filter(item => item.quantity > 0),
        })),
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      cleanCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCart;