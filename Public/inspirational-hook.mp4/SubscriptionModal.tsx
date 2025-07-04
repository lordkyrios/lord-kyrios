// components/SubscriptionModal.tsx
import React from "react";
import { Button } from "./Button";

export interface SubscriptionModalProps {
  open: boolean;
  onClose: () => void;
}

export function SubscriptionModal({ open, onClose }: SubscriptionModalProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "12px",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>
          Unlock Full Access 🚀
        </h2>
        <p style={{ marginBottom: "24px" }}>
          Get unlimited videos, AI features, and future updates.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Button onClick={() => alert("Upgrading Monthly...")}>Upgrade Monthly</Button>
          <Button onClick={() => alert("Upgrading Yearly...")}>Upgrade Yearly</Button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionModal;
