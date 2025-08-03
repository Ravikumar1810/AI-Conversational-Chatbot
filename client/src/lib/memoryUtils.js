export const saveToLocalMemory = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocalMemory = (key) => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}
