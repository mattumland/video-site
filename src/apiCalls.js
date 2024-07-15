const baseURL = 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos'

export const getUserVideos = (user_id) => {
  return fetch(`${baseURL}?user_id=${user_id}`)
  .then(response => {
    return response.json()
  })
}

export const addNewVideo = (videoData) => {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(videoData)
  })
  .then(response => {
    return response.json()
  })
}

export const addComment = (commentData) => {
  return fetch(`${baseURL}/comments`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
  .then((response) => {
    return response.json()
  })
}

export const getSingleVideo = (video_id) => {
  return fetch(`${baseURL}/single?video_id=${video_id}`)
  .then(response => {
    return response.json()
  })
}

export const getVideoComments = (video_id) => {
  return fetch(`${baseURL}/comments?video_id=${video_id}`)
  .then(response => {
    return response.json()
  })
}
