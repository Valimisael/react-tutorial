(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a(7),s=a.n(c),i=a(9),h=a(2),l=a(3),o=a(5),u=a(4),j=function(){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Surname"})]})})},b=function(e){var t=e.characterData.map((function(t,a){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.name}),Object(n.jsx)("td",{children:t.surname}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return e.removeCharacter(a)},children:"Delete"})})]},a)}));return Object(n.jsx)("tbody",{children:t})},m=function(e){console.log(e);var t=e.characterData,a=e.removeCharacter;return Object(n.jsxs)("table",{children:[Object(n.jsx)(j,{}),Object(n.jsx)(b,{characterData:t,removeCharacter:a})]})},d=a(8),O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",surname:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.surname;return Object(n.jsxs)("form",{children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name"}),Object(n.jsx)("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),Object(n.jsx)("label",{htmlFor:"surname",children:"Surname"}),Object(n.jsx)("input",{type:"text",name:"surname",id:"surname",value:a,onChange:this.handleChange}),Object(n.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(r.Component),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(i.a)(e.state.characters),[t])})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.characters;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(m,{characterData:e,removeCharacter:this.removeCharacter}),Object(n.jsx)(O,{handleSubmit:this.handleSubmit})]})}}]),a}(r.Component);a(15);s.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4dd4ba8a.chunk.js.map