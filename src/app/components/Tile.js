import React, { PropTypes } from 'react'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border'
import IconButton from 'material-ui/lib/icon-button'

const Tile = ({ tile, onTouchTap }) => (
  <GridTile
    title={tile.title}
    subtitle={<span>by <b>{tile.author}</b></span>}
    actionIcon={<IconButton
                  onTouchTap={() => onTouchTap(tile.key)}
                >
                  <StarBorder color={tile.liked?"yellow":"white"} />
                </IconButton>}
  >
    <img src={tile.img} />
  </GridTile>
)

Tile.PropTypes = {
  tile: PropTypes.object.isRequired,
  onTouchTap: PropTypes.func.isRequired,
}

export default Tile
