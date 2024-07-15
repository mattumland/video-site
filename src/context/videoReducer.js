const videoReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_VIDEOS':
      return {...state, videos: action.videos}
    case 'UPDATE_ERROR':
      return {...state, error: action.error}
  default:
    return state
  }
}

export default videoReducer;
