export const getUserVideos = async (user_id) => {
  try {
    const response = await fetch(`http://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=${user_id}`)
    console.log(await response.json())
  } catch(error) {
    alert(error)
  }
}
