"use client";

import { Check, X } from "lucide-react";
import { useEffect } from "react";

type ToastProps = { message: string; onClose: () => void };

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2600);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast" role="status">
      <span className="toast-icon"><Check size={16} strokeWidth={3} /></span>
      <span>{message}</span>
      <button onClick={onClose} aria-label="Close notification"><X size={16} /></button>
    </div>
  );
}
