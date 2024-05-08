export  function filterData(searchtext, restaurants) {
  const filterData = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchtext.toLowerCase()))
  return filterData
}
