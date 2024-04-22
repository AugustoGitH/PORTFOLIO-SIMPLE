

import * as S from "./styles"
import { ReactNode } from "react"
type StatusToast = "success" | "error"
interface ToastProps {
  status?: StatusToast,
  text: string | ReactNode,
  show?: boolean,
}
export default function Toast({ show = false, status = "success", text }: ToastProps) {
  return show ? (
    <S.Toast status={status}>

      <p>{text}</p>
    </S.Toast>
  ) : <></>
}