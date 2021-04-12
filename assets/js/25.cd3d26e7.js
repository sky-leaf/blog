(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{478:function(e,t,n){"use strict";n.r(t);var o=n(4),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"产生背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#产生背景"}},[e._v("#")]),e._v(" 产生背景")]),e._v(" "),n("p",[e._v("在 react class 组件中 会出现一些无用的渲染，有些组件会有自己本地的状态(state), 当它们的值由于用户的操作而发生改变时，组件就会重新渲染。在一个 React 应用中，一个组件可能会被频繁地进行渲染。这些渲染虽然有一小部分是必须的，不过大多数都是无用的，它们的存在会大大降低我们应用的性能 如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import React from 'react';\n\nclass Test extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            count: 0\n        }\n    }\n\n    componentWillUpdate(nextProps, nextState) {\n        console.log('componentWillUpdate')\n    }\n\n    componentDidUpdate(prevProps, prevState) {\n        console.log('componentDidUpdate')\n\n    }\n\n    render() {\n        return (\n            <div >\n            {this.state.count}\n            <button onClick={()=>this.setState({count: 1})}>Click Me</button>\n            </div>\n        );\n    }\n}\nexport default Test;\n")])])]),n("p",[e._v("为了避免 React 组件的无用渲染，提高性能优化")]),e._v(" "),n("ol",[n("li",[e._v("我们可以实现自己的 shouldComponentUpdate 生命周期函数")])]),e._v(" "),n("p",[e._v("shouldComponentUpdate 生命周期中")]),e._v(" "),n("ul",[n("li",[e._v("返回 false，react 就不会重新渲染组件")]),e._v(" "),n("li",[e._v("返回 true，react 才会重新渲染组件")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" shouldComponentUpdate(nextProps, nextState) {\n    if (this.state.count === nextState.count) {\n        return false\n    }\n    return true\n  }\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("在 react v15.5 版本引入了 PureComponent")])]),e._v(" "),n("p",[e._v("React 在进行组件更新时，如果发现这个组件是一个 PureComponent，它会将组件现在的 state 和 props 和其下一个 state 和 props 进行浅比较，如果它们的值没有变化，就不会进行更新。要想让你的组件成为 PureComponent，只需要 extends React.PureComponent 即可.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import React from 'react';\n\nclass Test extends React.PureComponent {\n    constructor(props) {\n        super(props);\n        this.state = {\n            count: 0\n        }\n    }\n\n    componentWillUpdate(nextProps, nextState) {\n        console.log('componentWillUpdate')\n    }\n\n    componentDidUpdate(prevProps, prevState) {\n        console.log('componentDidUpdate')\n    }\n\n    render() {\n        return (\n            <div>\n            { this.state.count }\n            <button onClick = {\n                () => this.setState({ count: 1 })\n            }> Click Me </button>\n            </div >\n        );\n    }\n}\n\nexport default Test;\n")])])]),n("p",[e._v("对于函数组件，它们没有诸如 state 的东西去保存它们本地的状态( 虽然在 React Hooks 中函数组件可以使用 useState 去使用状态), 所以我们不能像在类组件中使用 shouldComponentUpdate 等生命函数去控制函数组件的重渲染。当然，我们也不能使用 extends React.PureComponent 了，因为它压根就不是一个类。那么 react 函数组件中就引入了 react.memo")]),e._v(" "),n("h2",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[e._v("#")]),e._v(" 使用方法")]),e._v(" "),n("p",[e._v("纯函数组件频繁渲染 props 时")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import React from 'react';\n\nconst TestC = (props) => {\n  console.log('Rendering Test :', props)\n  return (\n      <div>\n      { props.count }\n      </>\n  )\n}\nTestC = React.memo(Test);\n")])])]),n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export default function memo<Props>(\n  type: React$ElementType,\n  compare?: (oldProps: Props, newProps: Props) => boolean,\n) {\n  if (__DEV__) {\n    if (!isValidElementType(type)) {\n      warningWithoutStack(\n        false,\n        'memo: The first argument must be a component. Instead ' +\n          'received: %s',\n        type === null ? 'null' : typeof type,\n      );\n    }\n  }\n  return {\n    $$typeof: REACT_MEMO_TYPE,\n    type,\n    compare: compare === undefined ? null : compare,\n  };\n}\n")])])]),n("p",[e._v("可以看到，最终返回的是一个对象，这个对象带有一些标志属性，在 react Fiber 的过程中会做相应的处理。")]),e._v(" "),n("p",[e._v("在 ReactFiberBeginWork.js 中可以看到：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("if (updateExpirationTime < renderExpirationTime) {\n  // This will be the props with resolved defaultProps,\n  // unlike current.memoizedProps which will be the unresolved ones.\n  const prevProps = currentChild.memoizedProps;\n  // Default to shallow comparison\n  let compare = Component.compare;\n  compare = compare !== null ? compare : shallowEqual;\n  if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {\n    return bailoutOnAlreadyFinishedWork(\n      current,\n      workInProgress,\n      renderExpirationTime,\n    );\n  }\n}\n")])])]),n("p",[e._v("根据传入的 compare 函数比较 prevProps 和 nextProps ，最终决定生成对象，并影响渲染效果。")]),e._v(" "),n("p",[e._v("其实就是在实现 shouldComponentUpdate 生命周期，之前的 PureComponent 是在 class 组件中使用，现在的 memo 是让函数式组件可以实现相同效果")])])}),[],!1,null,null,null);t.default=r.exports}}]);