// Page({
//     data: {
//         friends: ['松松','小游','超超']
//     },
//     onLoad() {
//         console.log("列表展示");
//     },
//     onReachBottom() {

//     }
// })
Page({
    data: {
      arrList: [
        '列表一',
        '列表二',
        '列表三',
        '列表四',
        '列表五',
        '列表六',
        '列表七',
        '列表八',
        '列表九',
        '列表十',
        '列表十一',
        '列表十二',
        '列表十三',
        '列表十四',
        '列表十五',
        '列表十六',
      ]
    },
    onLoad() {
      console.log('列表展示');
    },
    onReachBottom() {
      let arr = this.data.arrList;
      arr.push(...['更多项目','更多项目','更多项目']);
    //   console.log(arr);
      this.setData({
          arrList:arr
      })
    }
  })
  