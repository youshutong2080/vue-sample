function SetRowCanEdit (row) {
  for (let j = 0; j < row.cells.length; j++){ 
    //如果当前单元格指定了编辑类型，则表示允许编辑
    var editType = row.cells[j].getAttribute("editType")
    if (!editType) {
      //如果当前单元格没有指定，则查看当前列是否指定    
      editType = row.parentNode.rows[0].cells[j].getAttribute("editType")
    }    
    if (editType) {    
      row.cells[j].onclick = function () {    
        EditCell(this)
      }    
    }    
  }
}

function EditCell (element, editType) {
  var editType = element.getAttribute("editType")
  if (!editType) {    
     //如果当前单元格没有指定，则查看当前列是否指定
     editType = element.parentNode.parentNode.rows[0].cells[element.cellIndex].getAttribute("editType")
  }
  element.ondblclick = function () {
    CreateTextBox(element, element.innerHTML)
  }  
}

function CreateTextBox (element, value) {
  //检查编辑状态，如果已经是编辑状态，跳过
  var editState = element.getAttribute("EditState")
  if (editState !== "true") {
    //创建文本框
    var textBox = document.createElement("INPUT") 
    textBox.type = "text"
    textBox.className="EditCell_TextBox"
    //设置文本框当前值    
    if (!value) {    
      value = element.getAttribute("Value")
    }
    textBox.value = value
    //设置文本框的失去焦点事件    
    textBox.onblur = function (){    
      CancelEditCell(this.parentNode, this.value)
    }
    //向当前单元格添加文本框    
    ClearChild(element)
    element.appendChild(textBox)
    textBox.focus()
    textBox.select()
    //改变状态变量    
    element.setAttribute("EditState", "true")
    element.parentNode.parentNode.setAttribute("CurrentRow", element.parentNode.rowIndex)
  }
}

function CancelEditCell (element, value, text) {
  element.setAttribute("Value", value)
  if (text) {    
     element.innerHTML = text
  } else {
     element.innerHTML = value
  }
  element.setAttribute("EditState", "false")
}

function ClearChild (element) {    
  element.innerHTML = ""
} 

let CellEdit = {}

CellEdit.Editable = (el) => {
  for(let i = 0; i < el.rows.length; i++){    
    SetRowCanEdit(el.rows[i]);    
  } 
}


export default CellEdit