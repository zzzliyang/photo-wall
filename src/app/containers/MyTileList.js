import { connect } from 'react-redux'
import TileList from '../components/TileList'

const mapStateToProps = (state) => {
  return {
    tiles: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTouchTap: (key) => {
      dispatch({key: key, type: 'LIKE'});
    },
  }
}

const MyTileList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileList)

export default MyTileList;
