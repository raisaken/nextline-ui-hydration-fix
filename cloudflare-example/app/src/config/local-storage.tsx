
export const saveToStorage = (key:string, value:any) => {
  value = JSON.stringify(value)
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, value);
  }
}

// get from storage
export const getFromStorage = (key:string) => {
  if (typeof window !== 'undefined') {
    const user=window.localStorage.getItem(key)
    if(user!==null)
    {
      return JSON.parse(user)
    }
    return ''
  }
}

export const removeFromStorage = (key:string) => {
  if (typeof window !== 'undefined') {
      return window.localStorage.removeItem(key);
  }
}