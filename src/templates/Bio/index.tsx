import { Icon } from "@iconify/react/dist/iconify.js"
import * as S from "./styles"

import ShareCardLinks from "@/components/ShareCardLinks"
import { useState } from "react"

import { ProfileBio } from "@/settings/bio/types"

import Translate from "@/components/Translate"
import ToggleLang from "@/components/ToggleLang"
import ToggleTheme from "@/components/ToggleTheme"

interface BioProps {
  profile: ProfileBio
}




export default function Bio({ profile }: BioProps) {
  const [showShareCard, setShowShareCard] = useState(false)

  return (
    <>
      {/* <Header /> */}
      <S.Bio>
        <div className="content">
          <div className="menu-options">
            <button className="btn-open-share-options" onClick={() => setShowShareCard(true)}>
              <Icon className="icon" icon="tabler:dots" />
            </button>

            <div className="right-side">
              <ToggleLang />
              <ToggleTheme />
            </div>
          </div>
          <div className="header">
            <img className="banner" width={600} height={150} alt={profile.banner.alt} src={profile.banner.src} />
            <img className="profile" height={170} width={170} alt={profile.profile.alt} src={profile.profile.src} />
          </div>
          <div className="body">
            <h1 className="title"><Translate>{profile.title}</Translate></h1>
            <h2 className="sub-title"><Translate>{profile.subTitle}</Translate></h2>

            <p className="description"><Translate>{profile.description}</Translate></p>

            <div className="section-links">
              {
                profile.links.map(([section, links], index) => (
                  <div className="section-link" key={`section-link-${index}`}>
                    <span className="title-section"><Translate>{section}</Translate></span>
                    {
                      <ul className="links">
                        {
                          links.map((link, index) => (
                            <S.Link key={`link-bio-${index}`} order={index}>
                              <a target="_blank" href={link.href}>
                                {
                                  link.icon.isImg ? (
                                    <img alt="icon-img-bio" src={link.icon.src} width={25} height={25} />
                                  ) : (
                                    <Icon icon={link.icon.src} className="icon" />
                                  )
                                }

                                <Translate>{link.label}</Translate>
                              </a>
                            </S.Link>
                          ))
                        }
                      </ul>
                    }

                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <ShareCardLinks
          onClose={() => setShowShareCard(false)}
          open={showShareCard}
          link={window.location.origin}
          title="Compartilhar minha Página de Links"
        />
      </S.Bio>

    </>
  )
}