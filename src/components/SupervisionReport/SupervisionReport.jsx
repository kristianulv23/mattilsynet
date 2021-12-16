import formatDate from "../../helpers/formatDate"
import getIconByScore from "../../helpers/getIconByScore"
import Heading from "../Heading/Heading"

const Supervision = ({children}) => {
  return <div className="supervision">{children}</div>
}

const SupervisionReport = ({report}) => {
  return (
    <div className="supervision__report">
      <Heading level="h5" text={report.navn}>{report.postnr} {report.poststed}</Heading>
      <div className="supervision__score">
        <div className="supervision__description">
          <p>Tilsynsresultat</p>
          <span>{formatDate(report.dato)}</span>
        </div>
        {getIconByScore(report.total_karakter)}
      </div>
    </div>
  )
}

Supervision.Report = SupervisionReport 

export default Supervision;
