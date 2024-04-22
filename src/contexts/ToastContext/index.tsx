import Toast from "@/components/Toast";
import { ReactNode, createContext, useState } from "react";
interface ToastProviderProps {
  children: ReactNode
}
type StatusToast = "success" | "error"
interface ToastContextProps {
  activeToast: (status: StatusToast, text: string | ReactNode) => void
}

export const ToastContext = createContext({} as ToastContextProps)


export default function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<{
    show: boolean,
    text: string | ReactNode | null,
    status: StatusToast | null
  }>({
    show: false,
    status: null,
    text: null
  })
  const activeToast = (status: StatusToast, text: string | ReactNode) => {
    setToast({
      show: true,
      status,
      text
    })
    setTimeout(() => {
      setToast({
        show: false,
        status: null,
        text: null
      })
    }, 7000)
  }
  return (
    <ToastContext.Provider value={{ activeToast }}>
      {children}
      <Toast
        show={toast.show}
        text={toast.text ?? ""}
        status={toast.status ?? undefined}
      />
    </ToastContext.Provider>
  )
}