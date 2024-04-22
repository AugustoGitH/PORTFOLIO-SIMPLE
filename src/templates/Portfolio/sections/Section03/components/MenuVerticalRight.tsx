import { MutableRefObject, useEffect, useState } from "react"
import * as S from "../styles"

import { settingPages } from "@/settings/pages"
import projects from "@/settings/projects"
import normalizeString from "@/helpers/normalizeString"
import { indications } from "@/settings/indications"
import Translate from "@/components/Translate"

interface MenuVerticalRight {
  pageCurrentContentRef: MutableRefObject<HTMLDivElement | null>,
  current: number
}
const templates = {
  ...Object.fromEntries(projects.map(p => [normalizeString(p.title, {
    replaceSpaces: true,
    toLowerCase: true
  }), p.title])),
  ...Object.fromEntries(indications.map(p => [normalizeString(p.name, {
    replaceSpaces: true,
    toLowerCase: true
  }), p.name])),
  ...Object.fromEntries(settingPages.map(p => [p.value, p.label]))
}
export default function MenuVerticalRight({ pageCurrentContentRef, current }: MenuVerticalRight) {
  const [sectionsInPage, setSectionsInPage] = useState<Record<string, boolean>>({})


  useEffect(() => {
    const elementsId = pageCurrentContentRef?.current?.querySelectorAll("[id]")
    if (elementsId) {
      setSectionsInPage(Object.fromEntries(Array.from(elementsId).map((el) => [el.id, false])))
    }


    const handleScroll = () => {
      const sections = pageCurrentContentRef.current?.querySelectorAll("[id]");

      if (sections) {
        let visibleSection: string | null = null;

        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const isSectionVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

          if (isSectionVisible) {
            visibleSection = section.id;
          }
        });
        if (visibleSection) {

          setSectionsInPage(prev => ({
            ...Object.fromEntries(Object.entries(prev).map(([id]) => [id, false])),
            [visibleSection as string]: true
          }))
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [current, pageCurrentContentRef])


  return (
    <S.MenuVerticalRight>
      <ul>
        {
          Object.entries(sectionsInPage).map(([id, state], index) => (
            <li key={`option-in-menu-right-${index}`} className={index === 0 ? "primary" : state ? "current" : ""}><Translate>{templates[settingPages.find(p => p.value === id)?.label ?? id] ?? templates[id]}</Translate></li>
          ))
        }
      </ul>
    </S.MenuVerticalRight>
  )
}