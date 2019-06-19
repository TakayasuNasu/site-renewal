export const closeIfExpanded = (e, isExpanded, setExpanded) => {
  if(e.target.id != "side-menu" && isExpanded) {
    setExpanded(false)
  }
}