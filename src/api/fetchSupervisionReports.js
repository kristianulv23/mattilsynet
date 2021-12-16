import { fetchAPIError, fetchAPILoading, fetchAPISuccess } from "../context/dataContext";

const getSupervisionReports = async dispatch => {
  try {
    dispatch(fetchAPILoading(true));
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_BASE_ENDPOINT}?page=1`
    );

    if (!response.ok) {
      throw new Error('Error fetching data ...');
    }

    const payload = await response.json();
    console.log("sdfsdsdsdf");
    dispatch(fetchAPISuccess(payload.entries))
  } catch (error) {
    dispatch(fetchAPIError(error))
  }
}

export default getSupervisionReports;
