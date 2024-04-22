import { forwardRef, ForwardedRef } from 'react';
import AboutMePage from "../pages/AboutMePage"
import ProjectsPage from "../pages/ProjectsPage"
import * as S from "../styles"
import IndicationsPage from "../pages/IndicationsPage"
import ContactMePage from "../pages/ContactMePage"
import ThanksPage from "../pages/ThanksPage"
import { settingPages } from "@/settings/pages"
import Translate from "@/components/Translate"

interface PageCurrentContentProps {
  current: number,
  onNext: (value: string) => void,
  onPrevious: (value: string) => void
}

const PageCurrentContent = forwardRef((props: PageCurrentContentProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { current, onNext, onPrevious } = props;

  const render = () => {
    if (current === 0) {
      return <AboutMePage name={settingPages[current].value} />
    }
    if (current === 1) {
      return <ProjectsPage name={settingPages[current].value} />
    }
    if (current === 2) {
      return <IndicationsPage name={settingPages[current].value} />
    }
    if (current === 3) {
      return <ContactMePage name={settingPages[current].value} />
    }
    if (current === 4) {
      return <ThanksPage name={settingPages[current].value} />
    }
  }

  const previousPage = settingPages[current - 1]
  const nextPage = settingPages[current + 1]

  return (
    <S.PageCurrentContent ref={ref}>
      {render()}
      <hr />
      <div className="controller-navigation" style={{ justifyContent: current === 4 ? "flex-start" : "flex-end" }}>
        {
          current > 0 && (
            <button onClick={() => onPrevious(previousPage.value)}>
              <span><Translate>Página Anterior</Translate></span>
              <span><Translate>{previousPage.label}</Translate></span>
            </button>
          )
        }
        {
          current < 4 && (
            <button onClick={() => onNext(nextPage.value)}>
              <span><Translate>Próxima Página</Translate></span>
              <span><Translate>{nextPage.label}</Translate></span>
            </button>
          )
        }
      </div>
    </S.PageCurrentContent>
  );
});

export default PageCurrentContent;
