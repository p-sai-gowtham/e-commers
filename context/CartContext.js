"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "ogani_cart";
const WISHLIST_STORAGE_KEY = "ogani_wishlist";

function loadFromStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setCart(loadFromStorage(CART_STORAGE_KEY, []));
    setWishlist(loadFromStorage(WISHLIST_STORAGE_KEY, []));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, loaded]);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    }
  }, [wishlist, loaded]);

  const showNotification = useCallback((message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2500);
  }, []);

  const addToCart = useCallback((product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
        },
      ];
    });
    showNotification(`${product.name} added to cart!`);
  }, [showNotification]);

  const removeFromCart = useCallback((productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleWishlist = useCallback((product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        showNotification(`${product.name} removed from wishlist`);
        return prev.filter((item) => item.id !== product.id);
      }
      showNotification(`${product.name} added to wishlist!`);
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, image: product.image },
      ];
    });
  }, [showNotification]);

  const isInWishlist = useCallback(
    (productId) => wishlist.some((item) => item.id === productId),
    [wishlist]
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        notification,
        loaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
