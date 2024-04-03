import { useContext, type ReactNode } from "react";
import { renderToString } from "react-dom/server";


import { translateConfig } from "@/settings/translate";

import { TranslateContext } from "@/contexts/TranslateContext";
import translateWords from "@/helpers/translateWords";



interface TranslateProps {
  children: string | ReactNode
}
const Translate = ({ children }: TranslateProps): JSX.Element => {
  const { lang } = useContext(TranslateContext)

  const wordTranslated = translateWords({
    keys: translateConfig.keys,
    words: typeof children === "string" ? children : renderToString(children as JSX.Element),
    lang
  })
  return (
    <span style={{ all: 'unset' }} dangerouslySetInnerHTML={{ __html: wordTranslated }} />
  )
}


export default Translate