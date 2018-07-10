<template>
  <div class="user-avatar-con">
    <div class="screen-con">
      <Tooltip content="放大屏幕">
        <Icon type="arrow-expand" :size="26"></Icon>
      </Tooltip>
    </div>
    <div class="lock-con">
      <Tooltip content="锁定屏幕">
        <Icon type="locked" :size="25"></Icon>
      </Tooltip>
    </div>
    <div class="theme-con">
      <Dropdown>
        <Icon type="android-color-palette" :size="26"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem v-for="(item, index) in themeList" :key="index" :name="item.name">
            <span style="padding-right: 14px;"><Icon :size="22" :type="item.name.substr(0, 1) !== 'b' ? 'happy-outline' : 'happy'" :color="item.menu"></Icon></span>
            <span><Icon :size="22" type="record" :color="item.element"/></span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="notice-con">
      <Tooltip v-if="messageCount > 0" :content="`您有${messageCount}条未读消息`" placement="bottom">
        <Icon type="ios-bell" :size="26"></Icon>
      </Tooltip>
      <Tooltip v-else content="您没有未读消息" placement="bottom">
        <Icon type="ios-bell" :size="26"></Icon>
      </Tooltip>
    </div>
    <Dropdown class="avatar">
      <span>wangjun5</span>
      <Avatar icon="person"></Avatar>
      <DropdownMenu slot="list">
        <DropdownItem name="ownSpace">个人中心</DropdownItem>
        <DropdownItem name="logOut">退出登陆</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'user-avatar',
  props: {
    messageCount: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      themeList: [
        { name: 'black_b', menu: '#495060', element: '#2d8cf0' },
        { name: 'black_g', menu: '#495060', element: '#00a854' },
        { name: 'black_y', menu: '#495060', element: '#e96500' },
        { name: 'black_r', menu: '#495060', element: '#e43e31' },
        { name: 'light_b', menu: '#495060', element: '#2d8cf0' },
        { name: 'light_g', menu: '#495060', element: '#00a854' },
        { name: 'light_y', menu: '#495060', element: '#e96500' },
        { name: 'light_r', menu: '#495060', element: '#e43e31' }
      ]
    }
  }
}
</script>


<style lang="less" scoped>
.user-avatar-con {
  display: inline-block;
  height: 32px;
  vertical-align: middle;
  line-height: 10px;
  .avatar {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    padding: 0 20px;
  }
  .lock-con {
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    cursor: pointer;
  }
  .notice-con {
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    cursor: pointer;
  }
  .theme-con {
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    cursor: pointer;
  }
  .screen-con {
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    cursor: pointer;
  }
}
</style>
