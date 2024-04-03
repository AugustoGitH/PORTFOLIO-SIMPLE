import Indication from "@/components/Indication"
import Translate from "@/components/Translate"
import normalizeString from "@/helpers/normalizeString"


import { indications } from "@/settings/indications"

const IndicationsPage = () => {
  return (
    <>
      <h2 id="indications"><Translate>Indicações</Translate></h2>
      <hr />
      {
        indications.map((indication, index) => (
          <div id={`${normalizeString(indication.name, {
            toLowerCase: true,
            replaceSpaces: true

          })}`} key={`indication-${index}`}>
            <Indication
              profile={indication.profile}
              linkedin={indication.linkedin}
              name={indication.name}
              auth={indication.auth}
              description={indication.description}
            />
            <hr />
          </div>
        ))
      }

    </>
  )
}

export default IndicationsPage