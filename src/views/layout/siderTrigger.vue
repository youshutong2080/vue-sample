<template>
  <a @click="handleChange" type="text" :class="['sider-trigger-a', isCollapsed ? 'collapsed' : '']">
    <Icon :type="icon" :size="30"></Icon>
  </a>
</template>

<script>
export default {
  name: 'sider-trigger',
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  methods: {
    handleChange () {
      this.$emit('on-change', !this.isCollapsed)
    }
  }
}
</script>

<style lang="less" scoped>
.trans{
  transition: transform .2s ease;
}
@size: 40px;
.sider-trigger-a{
  padding: 6px;
  width: @size;
  height: @size;
  display: inline-block;
  text-align: center;
  color: #5c6b77;
  margin-top: 12px;
  i{
    .trans;
    vertical-align: top;
  }
  &.collapsed i{
    transform: rotateZ(90deg);
    .trans;
  }
}
</style>
