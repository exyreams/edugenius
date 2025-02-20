import { useAnimate } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface SymbolTrailProps {
  renderBuffer?: number;
  rotationRange?: number;
  symbolSize?: string;
  trailLength?: number;
}

const colors: string[] = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
];

const symbols: string[] = [
  "∑",
  "+",
  "-",
  "/",
  "*",
  "∫",
  "∏",
  "√",
  "∞",
  "≈",
  "≠",
  "≤",
  "≥",
  "∂",
  "Ω",
  "λ",
  "μ",
  "π",
  "θ",
  "α",
  "β",
  "γ",
  "δ",
  "ε",
  "ℏ",
];

const SymbolTrail: React.FC<SymbolTrailProps> = ({
  renderBuffer = 30,
  rotationRange = 25,
  symbolSize = "24px",
  trailLength = 1,
}) => {
  const [scope, animate] = useAnimate();
  const symbolIndex = useRef(0);

  useEffect(() => {
    const createSymbol = (x: number, y: number) => {
      const symbol = document.createElement("div");
      symbol.style.position = "fixed";
      symbol.style.left = `${x}px`;
      symbol.style.top = `${y}px`;
      symbol.style.fontSize = symbolSize;
      symbol.style.fontFamily = "math, serif";
      symbol.style.fontWeight = "bold";
      symbol.style.pointerEvents = "none";
      symbol.style.transform = "translate(-50%, -50%)";
      symbol.style.color = colors[Math.floor(Math.random() * colors.length)];
      symbol.textContent = symbols[symbolIndex.current % symbols.length];

      document.body.appendChild(symbol);

      animate(
        symbol,
        {
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
          rotate: [
            0,
            Math.random() * rotationRange * (Math.random() > 0.5 ? 1 : -1),
          ],
        },
        {
          duration: trailLength,
          ease: "easeOut",
          onComplete: () => {
            symbol.remove();
          },
        },
      );

      symbolIndex.current++;
    };

    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const distance = Math.hypot(clientX - lastX, clientY - lastY);

      if (distance >= renderBuffer) {
        createSymbol(clientX, clientY);
        lastX = clientX;
        lastY = clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animate, renderBuffer, rotationRange, symbolSize, trailLength]);

  return null;
};

export default SymbolTrail;
