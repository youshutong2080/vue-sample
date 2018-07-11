import LayOut from '../views/LayOut'

export default [
  {
    path: '/',
    name: 'index',
    component: LayOut,
    redirect: { name: 'top' },
    meta: { hidden: true, title: '首页'}
  },
  {
    path: '/resource',
    name: 'resource',
    icon: 'social-buffer-outline',
    component: LayOut,
    redirect: { name: 'top' },
    meta: { hidden: false, title: '资源管理' },
    children: [
      {
        path: 'top',
        name: 'top',
        icon: 'map',
        component: () => import('../views/resource/resourceTop.vue'),
        meta: { hidden: false, title: '资源拓扑' }
      },
      {
        path: 'mechine',
        name: 'mechine',
        icon: 'laptop',
        component: () => import('../views/resource/resourceTop.vue'),
        meta: { hidden: false, title: '硬件资源' }
      },
      {
        path: 'service',
        name: 'service',
        icon: 'ios-analytics-outline',
        component: () => import('../views/resource/resourceTop.vue'),
        meta: { hidden: false, title: '服务资源' }
      }
    ]
  },
  {
    path: '/monitor',
    name: 'monitor',
    icon: 'ios-monitor-outline',
    component: LayOut,
    redirect: { name: 'system' },
    meta: { hidden: false, title: '监控系统' },
    children: [
      {
        path: 'server',
        name: 'server',
        icon: 'ios-pulse',
        component: () => import('../views/monitor/monitorServer.vue'),
        meta: { hidden: false, title: '服务监控' }
      },
      {
        path: 'system',
        name: 'system',
        icon: 'social-tux',
        component: () => import('../views/monitor/monitorServer.vue'),
        meta: { hidden: false, title: '系统监控' }
      },
      {
        path: 'log',
        name: 'log',
        icon: 'clipboard',
        component: () => import('../views/monitor/monitorServer.vue'),
        meta: { hidden: false, title: '日志监控' }
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    icon: 'ios-cog-outline',
    component: LayOut,
    redirect: { name: 'page' },
    meta: { hidden: false, title: '配置管理' },
    children: [
      {
        path: 'page',
        name: 'page',
        icon: 'easel',
        component: () => import('../views/manage/managePage.vue'),
        meta: { hidden: false, title: '模板配置' }
      },
      {
        path: 'user',
        name: 'user',
        icon: 'ios-people-outline',
        component: () => import('../views/manage/managePage.vue'),
        meta: { hidden: false, title: '用户配置' }
      }
    ]
  },
  {
    path: '/other',
    name: 'other',
    component: LayOut,
    redirect: { name: 'ownspace' },
    meta: { hidden: true, title: '其它' },
    children: [
      {
        path: 'ownspace',
        name: 'ownspace',
        component: () => import('../views/other/ownSpace.vue'),
        meta: { hidden: false, title: '个人中心' }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('../views/other/messageTip.vue'),
        meta: { hidden: false, title: '消息中心' }
      }
    ]
  }
]