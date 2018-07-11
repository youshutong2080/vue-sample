<template>
  <div class="sider-menu-wrapper">
    <slot name="logo"></slot>
    <expand-menu-item v-if="!isCollapsed" :menu-list="menuList" :theme="theme" @on-select="handleSelect"></expand-menu-item>
    <collapsed-menu-item v-else :menu-list="menuList" :theme="theme" @on-select="handleSelect"></collapsed-menu-item>
  </div>
</template>

<script>
import expandMenuItem from './components/expandMenuItem'
import collapsedMenuItem from './components/collapsedMenuItem'

export default {
  name: 'sider-menu',
  components: {
    expandMenuItem,
    collapsedMenuItem
  },
  props: {
    isCollapsed: {
      type: Boolean
    },
    menuList: {
      type: Array
    },
    openNames: {
      type: Array
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  methods: {
    handleSelect (active) {
      this.$emit('on-select', active)
    }
  }
}
</script>
