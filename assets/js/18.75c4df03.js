(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{477:function(n,a,e){"use strict";e.r(a);var s=e(4),t=Object(s.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"设置a-的值让条件-a-5-a-12-成立"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置a-的值让条件-a-5-a-12-成立"}},[n._v("#")]),n._v(' 设置a 的值让条件"a == 5 && a == 12 成立"')]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  var a = {\n    i: 5,\n    valueOf: function() {\n      if(this.i === 5) {\n        this.i ++\n        return 5\n      } else {\n        return 12\n      }\n    }\n  }\n\n  console.log(a == 5 && a == 12)\n\n")])])]),e("ul",[e("li",[e("h3",{attrs:{id:"js调用-进行比较时，不同与-，双等号会触发类型转换，进行比较的事实上不是原始值，而是valueof-的返回值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js调用-进行比较时，不同与-，双等号会触发类型转换，进行比较的事实上不是原始值，而是valueof-的返回值"}},[n._v("#")]),n._v(" js调用==进行比较时，不同与===，双等号会触发类型转换，进行比较的事实上不是原始值，而是valueOf()的返回值")])])]),n._v(" "),e("h2",{attrs:{id:"写出下面的代码三次执行结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写出下面的代码三次执行结果"}},[n._v("#")]),n._v(" 写出下面的代码三次执行结果")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  var a = 10;\n  function change(a) {\n    a = 11;\n  }\n  change(a);\n  console.log(a);\n\n  var user = {\n    age: 18\n  };\n  function changeUser(user) {\n    user.age = 20;\n  };\n  changeUser(user);\n  console.log(user.age);\n\n  function changeUser1(user) {\n    user = { \n      age: 24\n    }\n  };\n  changeUser1(user);\n  console.log(user.age)\n")])])]),e("ul",[e("li",[n._v("第一个a输出的是10，change函数中传入的是形参，形参是局部变量，不会影响到全局变量a")]),n._v(" "),e("li",[n._v("第二个user.age输出是20，changeUser函数形参传入user对象，对象的引用地址未发生改变，函数内部将user中age属性改变了")]),n._v(" "),e("li",[n._v("第三个user.age输出是20，changeUser1函数形参传入user对象，然后内部代码让形参的引用地址发生了改变，不会影响全局的user")])]),n._v(" "),e("h2",{attrs:{id:"请使用css画一个三角形和梯形"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请使用css画一个三角形和梯形"}},[n._v("#")]),n._v(" 请使用css画一个三角形和梯形")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('\x3c!-- html --\x3e\n<div class="box"></div>\n\n// 三角形\n.box {\n  width: 0;\n  height: 0;\n  border: 50px solid transparent;\n  border-top: 50px solid red;\n}\n\n// 梯形\n.box {\n  width: 50px;\n  height: 0;\n  border: 50px solid transparent;\n  border-top: 50px solid red;\n}\n')])])]),e("h2",{attrs:{id:"实现一个三栏布局，中间内容自适应且优先加载，左边宽度100px，右边宽度160px"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现一个三栏布局，中间内容自适应且优先加载，左边宽度100px，右边宽度160px"}},[n._v("#")]),n._v(" 实现一个三栏布局，中间内容自适应且优先加载，左边宽度100px，右边宽度160px")]),n._v(" "),e("h3",{attrs:{id:"理解题目要求如下："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解题目要求如下："}},[n._v("#")]),n._v(" 理解题目要求如下：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("- 三栏布局 左中右\n- 中间内容 自适应 和 优先加载（dom树解析是由上向下解析的）\n- 左边 width: 100px 右边 160px\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('\x3c!-- html --\x3e\n<div class="box">\n  <div class="center">\n    中间内容部分\n  </div>\n  <div class="left">\n    左边部分\n  </div>\n  <div class="right">\n    右边部分\n  </div>\n</div>\n\n// css\n.box {\n  display: flex;\n  justify-content: flex-start;\n}\n.box .center {\n  order: 1;\n  flex: auto;\n  background: blue;\n}\n.box .left {\n  width: 100px;\n  background: red;\n}\n.box .right {\n  order: 2\n  width: 160px;\n  background: pink;\n}\n')])])])])}),[],!1,null,null,null);a.default=t.exports}}]);