import {connect} from 'react-redux';
import {selectResults} from "../store/resultSlice";
import {selectLoadingState} from "../store/resultSlice";
import {RootState} from "../../../app/store";
import {Results} from "./Results";

const mapStateToProps = function(state: RootState) {
  return {
    results: selectResults(state),
    loadingState: selectLoadingState(state)
  }
}

export default connect(mapStateToProps)(Results);