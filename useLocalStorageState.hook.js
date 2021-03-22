
const useLocalStorageState = (key, initialValue) => {
  const [state, setState] = React.useState(() => {
    let value = ''
    try {
      value = JSON.parse(localStorage.getItem(key))
    } catch (err) {
      value = initialValue || ''
    }
    return value ? value : initialValue || ''
  })

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {}
  }, [state, key])

  const removeItem = () => {
    try {
      localStorage.removeItem(key)
    } catch (error) {}
  }

  return [state, setState, removeItem]
}
