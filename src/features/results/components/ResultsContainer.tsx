import {connect} from 'react-redux';
import {selectResults} from "../store/resultSlice";
import {selectGroups} from "../store/groupSlice";
import {selectedGroup} from "../store/groupSlice";
import {selectLoadingState} from "../store/resultSlice";
import {RootState} from "../../../app/store";
import {Results} from "./Results";

const mapStateToProps = function(state: RootState) {
  return {
    results: selectResults(state),
    groups: selectGroups(state),
    selectedGroup: selectedGroup(state),
    loadingState: selectLoadingState(state)
  }
}

export default connect(mapStateToProps)(Results);