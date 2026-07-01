import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Movie } from "@/types/movie";

export const TICKET_PRICE = 15;

export interface CartItem {
  movie: Movie;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (movie: Movie) => void;
  removeItem: (movieId: number) => void;
  increaseQuantity: (movieId: number) => void;
  decreaseQuantity: (movieId: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (movie) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.movie.id === movie.id,
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.movie.id === movie.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            items: [...state.items, { movie, quantity: 1 }],
          };
        });
      },

      removeItem: (movieId) => {
        set((state) => ({
          items: state.items.filter((item) => item.movie.id !== movieId),
        }));
      },

      increaseQuantity: (movieId) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.movie.id === movieId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }));
      },

      decreaseQuantity: (movieId) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.movie.id === movieId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      totalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      totalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity * TICKET_PRICE,
          0,
        );
      },
    }),
    {
      name: "cinespoilers-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
