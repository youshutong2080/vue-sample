import routers from '@/router/routers'

let Utils = {}

Utils.hasChild = (item) => {
  return item.children && item.children.length > 1
}

Utils.showMenuChild = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (item.meta.access.includes(access)) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

Utils.getMenuList = (list, access) => {
  let res = []
  list.forEach((item, index) => {
    if (item.meta && !item.meta.hidden) {
      let obj = {
        name: item.name,
        title: item.title,
        icon: item.icon,
        meta: item.meta
      }
      if (Utils.hasChild(item) && Utils.showMenuChild(item, access)) {
        obj.children = Utils.getMenuList(item.children, access)
      }
      if (Utils.showMenuChild(item, access)) {
        res.push(obj)
      }
    }
  })
  return res
}

Utils.getBreadcrumbList = (routeMetched) => {
  let res = routeMetched.map(item => {
    let obj = {
      name: item.name,
      meta: item.meta
    }
    return obj
  })
  return [
    { name: 'index', meta: {hidden: false, title: '首页'} }, ...res]
}

export default Utils