<template>
  <div class="expand-menu">
    <Menu :active-name="$route.name" :theme="theme" width="auto" :open-names="opendNames" accordion @on-select="changeMenu">
      <template v-for="(item, index) in menuList">
        <Submenu v-if="item.children && item.children.length > 1" :name="item.name" :key="index">
          <template slot="title">
            <Icon :type="item.icon" :size="18"></Icon>
            <span style="font-size: 16px;">{{ item.meta.title }}</span>
          </template>
          <MenuItem v-for="(child, id) in item.children" :name="child.name" :key="id">
            <Icon :type="child.icon" :size="18"></Icon>
            <span style="font-size: 16px;">{{ child.meta.title }}</span>
          </MenuItem>
        </Submenu>
        <MenuItem v-else :name="item.name" :key="index">
          <Icon :type="item.icon" :size="18"></Icon>
          <span style="font-size: 16px;">{{ item.meta.title }}</span>
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>

<script>

export default {
  name: 'expand-menu',
  props: {
    menuList: {
      type: Array
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data () {
    return {
      opendNames: []
    }
  },
  methods: {
    changeMenu (active) {
      this.$emit('on-select', active)
    }
  },
  watch: {
    '$route' () {
      this.opendNames = this.$route.matched.map(item => {
        return item.name
      })
    }
  },
  created () {
    this.opendNames = this.$route.matched.map(item => {
      return item.name
    })
  }
}
</script>
