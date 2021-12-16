import SearchTable from "../../components/SearchTable/SearchTable";
import Heading from "../../components/Heading/Heading";

const Dashboard = () => {

  return (
    <>
      <Heading
        text="Tilsynsresultater"
      >
        Søk etter Serveringssteder
      </Heading>
      <SearchTable />
    </>
  )
}

export default Dashboard;
