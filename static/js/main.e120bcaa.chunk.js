(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(10),r=a.n(i),l=(a(18),a(8)),d=a(12),c=a(3),s=a(4),u=a(6),m=a(5),h=a(1),p=a(7),b=a(2),v=(a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isEditing:!1,task:a.props.item},a.handleUpdate=a.handleUpdate.bind(Object(h.a)(a)),a.handleRemove=a.handleRemove.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleToggle=a.handleToggle.bind(Object(h.a)(a)),a.toggleForm=a.toggleForm.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleToggle",value:function(e){this.props.toggleCompleted(this.props.id)}},{key:"render",value:function(){var e;return e=this.state.isEditing?n.a.createElement("div",{className:"Todo"},n.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},n.a.createElement("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),n.a.createElement("button",null,"Save!"))):n.a.createElement("div",{className:"Todo"},n.a.createElement("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.handleToggle},this.props.item),n.a.createElement("div",{className:"Todo-buttons"},n.a.createElement("button",{onClick:this.toggleForm},n.a.createElement("i",{className:"fas fa-pen"})),n.a.createElement("button",{onClick:this.handleRemove},n.a.createElement("i",{className:"fas fa-trash"})))),n.a.createElement("div",null,e)}}]),t}(o.Component)),g=a(11),f=a.n(g),T=(a(22),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={item:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Object(l.a)({},this.state,{id:f()(),completed:!1});this.props.createTodo(t),this.setState({item:""})}},{key:"render",value:function(){return n.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},n.a.createElement("label",{htmlFor:"item"},"New Todo"),n.a.createElement("input",{type:"text",name:"item",placeholder:"new todo",value:this.state.item,onChange:this.handleChange,id:"todoItem"}),n.a.createElement("button",null,"Add Todo!"))}}]),t}(o.Component)),j=(a(23),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={todoArr:[]},a.createTodo=a.createTodo.bind(Object(h.a)(a)),a.removeTodo=a.removeTodo.bind(Object(h.a)(a)),a.updateTodo=a.updateTodo.bind(Object(h.a)(a)),a.toggleComplete=a.toggleComplete.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"removeTodo",value:function(e){this.setState({todoArr:this.state.todoArr.filter((function(t){return t.id!==e}))})}},{key:"createTodo",value:function(e){this.setState({todoArr:[].concat(Object(d.a)(this.state.todoArr),[e])})}},{key:"updateTodo",value:function(e,t){var a=this.state.todoArr.map((function(a){return a.id===e?Object(l.a)({},a,{item:t}):a}));this.setState({todoArr:a})}},{key:"toggleComplete",value:function(e){var t=this.state.todoArr.map((function(t){return t.id===e?Object(l.a)({},t,{completed:!t.completed}):t}));this.setState({todoArr:t})}},{key:"renderTodo",value:function(){var e=this;return this.state.todoArr.map((function(t){return n.a.createElement("ul",null,n.a.createElement(v,{key:t.id,id:t.id,item:t.item,completed:t.completed,removeTodo:e.removeTodo,updateTodo:e.updateTodo,toggleCompleted:e.toggleComplete}))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"TodoList"},n.a.createElement("h1",null,"React Todo List",n.a.createElement("span",null,"A Simple React Todo App.")),this.renderTodo(),n.a.createElement(T,{createTodo:this.createTodo,updateTodo:!0}))}}]),t}(o.Component));a(24);var O=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.e120bcaa.chunk.js.map