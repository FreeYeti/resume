let map = null;

export const getInstance = (instance = null) => {
  if (instance){
    map = instance;
  }

  return map
}

export const destroyInstance = () => {
  map.setTarget(null)
  map = null;
}
