import React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        background: "#1e40af",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>FaithFrame Studio</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/generate" style={{ color: "white", textDecoration: "none" }}>
          Storyboard Generator
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
