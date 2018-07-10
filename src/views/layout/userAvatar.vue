<template>
  <div class="user-avatar-con">
    <div class="screen-con" v-if="showFullScreenBtn" @click="handleScreenChange">
      <Tooltip :content="isScreenFull ? '退出全屏' : '全屏'">
        <Icon :type="isScreenFull ? 'arrow-shrink' : 'arrow-expand'" :size="26"></Icon>
      </Tooltip>
    </div>
    <div class="lock-con">
      <Tooltip content="锁定屏幕">
        <Icon type="locked" :size="25"></Icon>
      </Tooltip>
    </div>
    <div class="theme-con">
      <Dropdown @on-click="handleThemeChange">
        <Icon type="android-color-palette" :color="themeColor" :size="26"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem v-for="(item, index) in themeList" :key="index" :name="item.name">
            <span style="padding-right: 14px;"><Icon :size="22" :type="item.name.substr(0, 5) !== 'black' ? 'happy-outline' : 'happy'" :color="item.menu"></Icon></span>
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
      <span>右书僮</span>
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
      isScreenFull: false,
      themeColor: 'default',
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
  },
  methods: {
    handleScreenChange () {
      let main = document.body
      if (this.isScreenFull) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }
      this.isScreenFull = !this.isScreenFull
    },
    handleThemeChange (theme) {
      // let menuTheme = theme.substr(0, 5)
      let themeObj = this.themeList.filter(item => {
        if (item.name === theme) {
          this.themeColor = item.element
          return item
        }
      })[0]
      this.$emit('on-theme-change', themeObj.name.substr(0, 1) === 'b' ? 'dark' : 'light')
      this.$emit('on-color-change', themeObj.element)
    }
  },
  computed: {
    showFullScreenBtn () {
      return window.navigator.userAgent.indexOf('MSIE') < 0
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
