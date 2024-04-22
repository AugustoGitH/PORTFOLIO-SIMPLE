
import { useEffect, useRef } from "react"

import FieldToCopyLink from "./components/FieldToCopyLink"
import * as S from "./styles"
import { shares } from "./shares"
import { Icon } from "@iconify/react/dist/iconify.js"



interface ShareCardLinksProps {
  onClose?: () => void,
  open: boolean,
  link: string,
  title: string
}
const ShareCardLinks = ({ title, onClose = () => { }, open, link }: ShareCardLinksProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";

      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, open]);
  return open ? (
    <S.ShareCardLinks>
      <div className="card" ref={cardRef}>
        <span className="title">{title}</span>
        <button className="btn-close-card" onClick={onClose}>
          <Icon className="icon-arrow" icon="ep:close-bold" />
        </button>
        <ul className="list-share-link">
          {
            shares(link).map((shar, index) => (
              <li key={`icon-share-${index}`}>
                <a href={shar.href} target="_blank">
                  <Icon className="icon-social" icon={shar.icon} />
                  <span>{shar.title}</span>
                  <Icon className="icon-arrow" icon="iconamoon:arrow-right-2-bold" />
                </a>
              </li>

            ))
          }
        </ul>
        <FieldToCopyLink link={link} />
        {/* <Button>
          Faça seu pré-registro
        </Button> */}
      </div>
    </S.ShareCardLinks>
  ) : <></>
}

export default ShareCardLinks