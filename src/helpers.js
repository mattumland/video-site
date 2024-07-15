export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toISOString().split('T')[0]
}

export const formatUserId = (user_id) => {
  const nameArray = user_id.split('_').map((name) => {
      const capitalFirstLetter = name.charAt(0).toUpperCase()
      const remainingLetters = name.slice(1)
    return (
      capitalFirstLetter + remainingLetters
    )
  })
  return `${nameArray[0]} ${nameArray[1]}`
}

export const formatUserInitials = (user_id) => {
  const firstLetterArray = user_id.split('_').map((name) => {
    return name.charAt(0).toUpperCase()
  })
  return `${firstLetterArray[0]}${firstLetterArray[1]}`
}
