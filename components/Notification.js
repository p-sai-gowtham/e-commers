"use client";

import { useCart } from "../context/CartContext";

export default function Notification() {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: "#7fad39",
        color: "#fff",
        padding: "12px 24px",
        borderRadius: 4,
        zIndex: 99999,
        fontSize: 14,
        fontWeight: 600,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        animation: "fadeIn 0.3s ease",
      }}
    >
      {notification}
    </div>
  );
}
