import { useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'visible'; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
    relative z-10 
    bg-white dark:bg-gray-900 
    w-full max-w-sm 
    rounded-2xl shadow-xl 
    overflow-hidden
    border border-white/20 dark:border-gray-700
    animate-in fade-in zoom-in duration-200
    max-h-[90vh] flex flex-col
  "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200/70 dark:border-gray-700">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}

          <button
            onClick={onClose}
            className="
              p-1 rounded-full 
              hover:bg-gray-100 dark:hover:bg-gray-800 
              transition text-gray-500 hover:text-gray-700
            "
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto px-4 py-4">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
