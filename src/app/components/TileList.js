import React, { PropTypes } from 'react'
import Tile from './Tile'
import GridList from 'material-ui/lib/grid-list/grid-list'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifycontent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 1000,
    overflowY: 'auto',
    marginBottom: 24,
  },
}

const TileList = ({ tiles, onTouchTap}) => (
  <div style={styles.root}>
    <GridList
      cellHeight={500}
      style={styles.gridList}
    >
  {tiles.map((tile) => (
    <Tile
      tile={tile}
      key={tile.key}
      onTouchTap={onTouchTap}
    />
  ))}
    </GridList>
  </div>
)

TileList.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onTouchTap: PropTypes.func.isRequired,
}

export default TileList
