const windowGlobal = typeof window !== 'undefined' && window

export const matchSmartphone = () => {
  if (windowGlobal) {
    return windowGlobal.matchMedia("(max-width:766px)").matches
  } else {
    return false
  }
}

export const matchTablet = () => {
  if (windowGlobal) {
    return windowGlobal.matchMedia("(min-width:767px)").matches
  } else {
    return false
  }
}