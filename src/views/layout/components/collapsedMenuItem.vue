<template>
  <div class="collapsed-menu">
    <template v-for="(item, index) in menuList">
      <Dropdown transfer v-if="item.children && item.children.length > 1" placement="right-start" @on-click="changeMenu" :key="index">
        <Button type="text" style="width: 64px; padding: 10px 0;">
          <Icon :type="item.icon" :size="20" :color="theme === 'dark' ? '#000' : '#fff'"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <template v-for="(child, id) in item.children">
            <DropdownItem :name="child.name" :key="id">
              <Icon :type="child.icon" :size="18"></Icon>
              <span>{{ child.meta.title }}</span>
            </DropdownItem>
          </template>
        </DropdownMenu>
      </Dropdown>
      <Dropdown transfer v-else placement="right-start" @on-click="changeMenu" :key="index">
        <Button type="text" style="width: 64px; padding: 10px 0;">
          <Icon :type="item.icon || item.children[0].icon" :size="20" :color="theme === 'dark' ? '#000' : '#fff'"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem :name="item.name || item.children[0].name" :key="index">
            <Icon :type="item.icon || item.children[0].icon" :size="18"></Icon>
            <span>{{ item.meta.title || item.meta.children[0].title }}</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </template>
  </div>
</template>

<script>
export default {
  name: 'collapsed-menu',
  props: {
    theme: {
      type: Array
    },
    menuList: {
      type: Array
    }
  },
  methods: {
    changeMenu (active) {
      this.$emit('on-select', active)
    }
  }
}
</script>

<style>
.collapsed-menu {
  text-align: center;
  vertical-align: middle;
}
</style>
