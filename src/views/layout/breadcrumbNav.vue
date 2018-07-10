<template>
  <div class="breadcrumb-nav-con">
    <Breadcrumb>
      <template v-for="(item, index) in breadcrumbList">
        <BreadcrumbItem>{{ item.meta.title }}</BreadcrumbItem>
      </template>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb-nav',
  props: {
    breadcrumbList: {
      typee: Array
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb-nav-con {
  display: inline-block;
  vertical-align: top;
}
</style>
