export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toISOString().split('T')[0]
}

// sort videos by date created