//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   todolist:[
       {
         name:"吃饭",
         none:false
       },
       {
         name:"睡觉",
         none:true
       },
       {
         name:"打豆豆",
         none:false
       }
       
     ],
     newtodo:"",
     resty:false
  },
  fn(even){
    if(even.detail.value){
      this.data.newtodo= even.detail.value
      this.data.todolist.push({name:this.data.newtodo,none:false});
      var newwork = this.data.todolist;
      this.setData({
        todolist:newwork,
        newtodo:""
      })
    }
  },
  fd(index){
    var index=index.currentTarget.dataset.index;
    this.data.todolist[index].none=!(this.data.todolist[index].none)
    var tem=this.data.todolist
    this.setData({
      todolist:tem
    })
  },
  fx(){
    if(this.data.todolist.length==0){
          this.setData({
            resty:true
          })
        }else{
          this.setData({
            resty:false
          })
        }
  }
})
