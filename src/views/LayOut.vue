<template>
  <Layout class="layout">
    <Sider hide-trigger breakpoint="md" collapsible :width="230" :collapsed-width="64" :style="{background: theme === 'dark' ? '#495060' : '#f3f3f3'}" v-model="isCollapsed">
      <sider-menu
      @on-select="handleChange"
      :menu-list="menuList"
      :isCollapsed="isCollapsed"
      :theme="theme">
        <div class="logo" slot="logo" @click="handleIndex">
          <img v-show="!isCollapsed" src="../assets/images/logo.png" key="max-logo" />
          <img v-show="isCollapsed" src="../assets/images/logo.png" key="min-logo" />
        </div>
      </sider-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <header-nav :isCollapsed="isCollapsed" :breadcrumb-list="breadcrumbList" @on-change="handleCollapsedChange">
          <user-avatar @on-theme-change="handleThemeChange" @on-color-change="handleColorChange"></user-avatar>
        </header-nav>
      </Header>
      <Content style="margin-top: 2px;" :style="{color: color}">
        <Layout>
          <Content>
            <router-view></router-view>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import siderMenu from './layout/siderMenu'
import headerNav from './layout/headerNav'
import userAvatar from './layout/userAvatar'
import {mapMutations, mapActions} from 'vuex'
import Utils from '@/libs/utils'

export default {
  name: 'layout',
  components: {
    siderMenu,
    headerNav,
    userAvatar
  },
  data () {
    return {
      isCollapsed: false,
      theme: 'dark',
      isFullScreen: false,
      color: 'black'
    }
  },
  methods: {
    ...mapMutations([
      'setBreadcrumbList'
    ]),
    handleIndex () {
      console.log('index')
      this.$router.push({ name: 'page' })
    },
    handleChange (name) {
      this.$router.push({ name: name })
    },
    handleCollapsedChange () {
      this.isCollapsed = !this.isCollapsed
    },
    handleThemeChange (theme) {
      this.theme = theme
    },
    handleColorChange (color) {
      this.color = color
    }
  },
  watch: {
    '$route' (newRoute) {
      this.setBreadcrumbList(newRoute.matched)
    }
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    },
    breadcrumbList () {
      return this.$store.state.breadcrumbList
    }
  },
  mounted () {
    this.setBreadcrumbList(this.$route.matched)
  }
}
</script>

<style lang="less" scoped>
.layout {
  min-width: 700px;
  height: 100%;
  .header-con {
    background: #fff;
    padding: 0 18px;
    display: block;
    box-shadow: 0 2px 1px 1px rgba(0,0,0,.05);
  }
  .logo {
    text-align: center;
    height: 64px;
    img {
      width: 40px;
      margin: 12px auto;
    }
    img:hover {
      cursor: pointer;
    }
  }
}

</style>
