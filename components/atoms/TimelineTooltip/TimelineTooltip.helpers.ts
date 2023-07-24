export const displayDate = (date: Date) => {
  if (date.getMonth() < 10) {
    if (date.getDate() < 10) {
      return `0${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`
    } else {
      return `${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`
    }
  }
  if (date.getDate() < 10) {
    return `0${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  } else {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }
}