import { fetchAPIError, fetchAPILoading, fetchAPISuccess } from "../context/dataContext";

const fetchSupervisionReport = async (dispatch, ref) => {
  try {
    dispatch(fetchAPILoading(true));
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_BASE_ENDPOINT}?query=${ref.current.value}`
    );

    if (!response.ok) {
      throw new Error('Error fetching data ...');
    }

    const payload = await response.json();

    dispatch(fetchAPISuccess(payload.entries))
  } catch (error) {
    dispatch(fetchAPIError(error))
  }
}

export default fetchSupervisionReport;