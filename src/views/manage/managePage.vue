<template>
  <div class="container">
    <Card dis-hover>
      <div slot="title">
        <Icon type="ionic"></Icon>
        <span>模块管理</span>
      </div>
      <div>
        <div id="todoList" class="iview-admin-draggable-list">
          <template v-for="(item, index) in todoArray">
            <div class="draggable-item" :data-id="index" :key="index">
              <table class="dragge-table" :id="`table-${index}`">
                <tbody>
                  <tr v-for="(child, id) in item" :key="id" style="height: 35px;">
                    <th :rowspan="child.meta.rowSpan" editType="text" :class="{hidden: child.meta.hidden}" style="width: 220px;">{{ child.title }}</th>
                    <td :rowspan="child.meta.rowSpan" editType="text" :class="{hidden: child.meta.hidden}" style="width: 220px;">{{ child.interface }}</td>
                    <td editType="text" style="width: 230px;">{{ child.child_title }}</td>
                    <td editType="text">{{ child.child_interface }}</td>
                    <td style="width: 80px;">
                      <Button icon="trash-a" size="small" type="error" @click="handleDelete"></Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
import CellEdit from '@/libs/celledit'

export default {
  name: 'manage',
  data () {
    return {
      columns: [
        { 
          title: 'title', 
          key: 'title',
        },
        { title: 'interface', key: 'interface' },
        { title: 'child_title', key: 'child_title' },
        { title: 'child_interface', key: 'child_interface' }
      ],
      todoArray: [
        [
          { 
            id: 1,
            title: '用户管理',
            interface: 'sys_user/index',
            child_id: 1,
            child_title: '添加',
            child_interface: 'sys_user/add',
            meta: {
              hidden: false,
              rowSpan: 3
            }
          },
          { 
            id: 1,
            title: '用户管理',
            interface: 'sys_user/index',
            child_id: 2,
            child_title: '修改',
            child_interface: 'sys_user/modify',
            meta: {
              hidden: true,
              rowSpan: 3
            }
          },
          { 
            id: 1,
            title: '用户管理',
            interface: 'sys_user/index',
            child_id: 3,
            child_title: '删除',
            child_interface: 'sys_user/delete',
            meta: {
              hidden: true,
              rowSpan: 3
            }
          }
        ],
        [
          { 
            id: 2,
            title: '用户组管理',
            interface: 'sys_user_group/index',
            child_id: 4,
            child_title: '添加',
            child_interface: 'sys_user_group/add',
            meta: {
              hidden: false,
              rowSpan: 3
            }
          },
          { 
            id: 2,
            title: '用户组管理',
            interface: 'sys_user_group/index',
            child_id: 5,
            child_title: '修改',
            child_interface: 'sys_user_group/modify',
            meta: {
              hidden: true,
              rowSpan: 3
            }
          },
          { 
            id: 2,
            title: '用户组管理',
            interface: 'sys_user_group/index',
            child_id: 6,
            child_title: '删除',
            child_interface: 'sys_user_group/delete',
            meta: {
              hidden: true,
              rowSpan: 3
            }
          }
        ],
        [
          { 
            id: 3,
            title: '模块管理',
            interface: 'sys_module/index',
            child_id: 7,
            child_title: '添加',
            child_interface: 'sys_module/add',
            meta: {
              hidden: false,
              rowSpan: 3
            }
          },
          { 
            id: 3,
            title: '模块管理',
            interface: 'sys_module/index',
            child_id: 8,
            child_title: '修改',
            child_interface: 'sys_module/modify',
            meta: {
              hidden: true,
              rowSpan: 3
            }
          },
          { 
            id: 3,
            title: '模块管理',
            interface: 'sys_module/index',
            child_id: 9,
            child_title: '删除',
            child_interface: 'sys_module/delete',
            meta: {
              hidden: true,
              rowSpan: 3
            }
          }
        ],
      ],
    }
  },
  methods: {
    handleEdit () {
      this.editable = true
    },
    handleDelete (item) {
    }
  },
  watch: {
    todoArray (newArray) {
      console.log(newArray)
    }
  },
  mounted () {
    // edit table
    for (let i = 0; i < this.todoArray.length; i++) {
      let el = window.document.getElementById(`table-${i}`)
      CellEdit.Editable(el)
    }
    
    document.body.ondrop = function (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    let vm = this
    let todoList = document.getElementById('todoList')
    Sortable.create(todoList, {
      group: 'store',
      store: {
        get: function (sortable) {
          // var order = localStorage.getItem(sortable.options.group.name)
          // return order ? order.split('|') : []
          return []
        },
        set: function (sortable) {
          var order = sortable.toArray()
          console.log(order)
          // localStorage.setItem(sortable.options.group.name, order.join('|'))
        }
      }
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 20px;
}
.iview-admin-draggable-list{
    height: 100%;
    overflow: auto;
}
.iview-admin-draggable-list .draggable-item{
    padding: 9px;
    // border: 1px solid #e7ebee;
    border-radius: 3px;
    margin-bottom: 5px;
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: all .2s;
}
.iview-admin-draggable-list .draggable-item:hover{
    color: #87b4ee;
    display: block;
    border-color: #87b4ee;
    transition: all .2s;
}
.placeholder-style{
    display: block !important;
    color: transparent;
    border-style: dashed !important;
}
.delte-item-animation{
    opacity: 0;
    transition: all .2s;
}
.dragge-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border: 1px solid #E1E6EB;
}
.dragge-table tbody td {
  text-align: center;
  line-height:20px;
  padding:8px 10px;
  font-size:13px;
  border:1px solid #E1E6EB;
}
// .dragge-table tbody tr:hover {
//   background: rgb(241, 244, 247);
// }
.hidden {
  display: none;
}
</style>
