<template>
  <div class="header-nav">
    <sider-trigger :isCollapsed="isCollapsed" icon="navicon" @on-change="handleChange"></sider-trigger>
    <breadcrumb-nav show-icon style="margin-left: 30px;" :breadcrumbList="breadcrumbList"></breadcrumb-nav>
    <div class="header-custom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import siderTrigger from './siderTrigger'
import breadcrumbNav from './breadcrumbNav'

export default {
  name: 'header-nav',
  components: {
    siderTrigger,
    breadcrumbNav
  },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    },
    breadcrumbList: {
      type: Array
    }
  },
  methods: {
    handleChange (state) {
      this.$emit('on-change', state)
    }
  }
}
</script>

<style lang="less" scoped>
.header-nav {
  height: 100%;
}
.header-custom {
  float: right;
  height: auto;
}
</style>
