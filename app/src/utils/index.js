export const navbarTypes = {
  navbar: 'navbar',
  masthead: 'masthead'
}

export const getNavbarClassFromType = (type) => {

  if(Object.keys(navbarTypes).indexOf(type) > -1) {
    return navbarTypes[type]
  } else {
    return null
  }
}
