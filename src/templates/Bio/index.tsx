import { Icon } from "@iconify/react/dist/iconify.js"
import * as S from "./styles"

import ShareCardLinks from "@/components/ShareCardLinks"
import { useState } from "react"

import { ProfileBio } from "@/settings/bio/types"

interface BioProps {
  profile: ProfileBio
}
export default function Bio({ profile }: BioProps) {
  const [showShareCard, setShowShareCard] = useState(false)
  return (
    <S.Bio>
      <div className="content">
        <div className="btn-container-share">
          <button onClick={() => setShowShareCard(true)}>
            <Icon className="icon" icon="tabler:dots" />
          </button>
        </div>
        <div className="header">
          <img className="banner" alt={profile.banner.alt} src={profile.banner.src} />
          <img className="profile" alt={profile.profile.alt} src={profile.profile.src} />
        </div>
        <div className="body">
          <h1 className="title">{profile.title}</h1>
          <h2 className="sub-title">{profile.subTitle}</h2>
          <p className="description">{profile.description}</p>
          <ul className="links">
            {
              profile.links.map((link, index) => (
                <S.Link key={`link-bio-${index}`} order={index}>
                  <a target="_blank" href={link.href}>
                    {
                      link.icon.isImg ? (
                        <img alt="icon-img-bio" src={link.icon.src} width={25} height={25} />
                      ) : (
                        <Icon icon={link.icon.src} className="icon" />
                      )
                    }

                    {link.label}
                  </a>
                </S.Link>
              ))
            }
          </ul>
        </div>
      </div>
      <ShareCardLinks
        onClose={() => setShowShareCard(false)}
        open={showShareCard}
        link={window.location.origin}
        title="Compartilhar minha Página de Links"
      />
    </S.Bio>
  )
}