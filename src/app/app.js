import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Main from './Main' // Our custom react component
//Playing around with Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()


const initialState = [
  {
    key: 1,
    img: 'images/tokyo.jpg',
    title: 'Breakfast',
    author: 'jill111',
    liked: false,
  },
  {
    key: 2,
    img: 'images/tokyo2.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
    liked: false,
  },
  {
    key: 3,
    img: 'images/tokyo3.jpg',
    title: 'Camera',
    author: 'Danson67',
    liked: false,
  },
  {
    key: 4,
    img: 'images/kyoto.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    liked: false,
  },
  {
    key: 5,
    img: 'images/kyoto2.jpg',
    title: 'Hats',
    author: 'Hans',
    liked: false,
  },
  {
    key: 6,
    img: 'images/kyoto3.jpg',
    title: 'Honey',
    author: 'fancycravel',
    liked: false,
  },
]

const toggleLiked = (state = initialState, action) => {
  return state.map((item) => {
    if (item.key===action.key) {
      return {
        key: item.key,
        img: item.img,
        title: item.title,
        author: item.author,
        liked: !item.liked,
      };
    } else {
      return item;
    }
  });
}

const store = createStore(toggleLiked)

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
