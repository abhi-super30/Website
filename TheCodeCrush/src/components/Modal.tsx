"use client";

import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-2xl cc-glass cc-outline-gradient rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-base font-semibold">{title}</h4>
          <button aria-label="Close" onClick={onClose} className="text-white/70 hover:text-white">✕</button>
        </div>
        <div className="text-sm text-white/90">{children}</div>
      </div>
    </div>
  );
}


