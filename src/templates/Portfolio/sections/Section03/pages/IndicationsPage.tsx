import Indication from "@/components/Indication"
import Translate from "@/components/Translate"


import { indications } from "@/settings/indications"
interface IndicationsPageProps {
  name: string
}
const IndicationsPage = ({ name }: IndicationsPageProps) => {
  return (
    <>
      <h2 id={name}><Translate>Indicações</Translate></h2>
      {
        indications.map((indication, index) => (
          <div key={`indication-${index}`}>
            <hr />
            <Indication
              profile={indication.profile}
              linkedin={indication.linkedin}
              name={indication.name}
              auth={indication.auth}
              description={indication.description}
            />

          </div>
        ))
      }

    </>
  )
}

export default IndicationsPage