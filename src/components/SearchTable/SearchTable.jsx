import { useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import groupByKey from "../../helpers/groupByKey";
import queryReducer from "../../helpers/queryReducer";
import { useAPIDispatch, useAPIState } from "../../context/dataContext";
import { fetchPaginationSupervisionReports, fetchSupervisionReport, fetchSupervisionReports } from "../../api";

import SearchField from "../SearchField/SearchField";
import Supervision from "../SupervisionReport/SupervisionReport";
import Spinner from "../Spinner/Spinner";

const SearchTable = () => {

  const dispatch = useAPIDispatch();
  const queryRef = useRef();
  const { data, loading } = useAPIState();

  useEffect(() => {
    fetchSupervisionReports(dispatch);
  },[dispatch])

  const groupedQueryData = groupByKey(data, "navn");

  const reducedQuerydata = Object.entries(groupedQueryData).map(([key, reports]) => {
    return reports.reduce(queryReducer)
  });

  const handlePageClick = async page => {
    let currentPage = page.selected + 1;
    await fetchPaginationSupervisionReports(dispatch, currentPage);
  }

  const handleFetchSupervisionReportClick = () => {
    fetchSupervisionReport(dispatch, queryRef);
  }
  console.log(loading);
  return (
    <section className="search">
      <div className="search__field">
      <SearchField
        ref={queryRef}
        onClick={handleFetchSupervisionReportClick}
      />
      </div>
      {loading && (
        <Spinner />
      )}
      {!loading && (
        <Supervision>
        {reducedQuerydata.map((report, index) => {
          return <Supervision.Report key={index} report={report}/>
        })}
      </Supervision>
      )}
      <ReactPaginate 
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        pageCount={Math.ceil(38473 / 385)}
        marginPageDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination position-absolute bottom-0 end-0 me-4 mb-4"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </section>
  )
}

export default SearchTable;
