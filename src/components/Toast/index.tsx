
import { Icon } from "@iconify/react/dist/iconify.js"
import * as S from "./styles"
import { ReactNode } from "react"
type StatusToast = "success" | "error"
interface ToastProps {
  status?: StatusToast,
  text: string | ReactNode,
  show?: boolean,
  onClose?: () => void
}
export default function Toast({ show = false, status = "success", text, onClose = () => { } }: ToastProps) {
  return show ? (
    <S.Toast status={status}>

      <p>{text}</p>
    </S.Toast>
  ) : <></>
}