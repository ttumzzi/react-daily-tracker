(this["webpackJsonpdaily-traker-app"]=this["webpackJsonpdaily-traker-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),i=(a(16),a(10)),o=a(2),s=a(3),d=a(5),h=a(4),u=a(6),m=(a(17),a(18),a(19),a(1)),f=a.n(m);a(21);function p(e){var t=e.month,n=e.date,r=e.index,l=e.checkDates,i=e.startDate,o=e.id,s=e.handleCheck,d="".concat(t,".").concat(n),h=a(22),u=["date"];return f()().format("YYYY.M.D")===d?u.push("today"):i===d&&u.push("start-date"),l.includes(n)&&u.push("checked-date"),c.a.createElement("div",{className:h(u),onClick:function(){return s(o,n)},key:"".concat(n,"-").concat(r)},c.a.createElement("b",null,0===n?"":n))}var k=function(e){for(var t=e.month,a=e.checkDates,n=e.startDate,r=e.id,l=e.handleCheck,i=[],o=f()().startOf("month").get("day"),s=f()().daysInMonth(),d=0;d<o;d++)i.push(0);for(var h=0;h<s;h++)i.push(h+1);for(var u=[],m=0;m<i.length/7;m++)u.push(c.a.createElement("div",{className:"calendar-row",key:m},i.slice(7*m,7*m+7).map((function(e,i){return c.a.createElement(p,{key:"".concat(e,"_").concat(i),month:t,date:e,index:i,checkDates:a,startDate:n,id:r,handleCheck:l})}))));return u};function v(){return c.a.createElement("div",{className:"days"},["S","M","T","W","T","F","S"].map((function(e,t){return c.a.createElement("div",{className:"day",key:t},e)})))}var E=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.month,a=e.checkDates,n=e.startDate,r=e.id,l=e.handleCheck;return c.a.createElement("div",{className:"calendar-root"},c.a.createElement(v,null),c.a.createElement(k,{month:t,checkDates:a,startDate:n,id:r,handleCheck:l}))}}]),t}(n.Component);function D(e){var t=e.id,a=e.month,n=e.title,r=e.checkDates,l=e.startDate,i=e.handleCheck;return c.a.createElement("div",null,c.a.createElement("div",{className:"item-header"},c.a.createElement("h2",null,n)),c.a.createElement("div",{className:"item-calendar"},c.a.createElement(E,{month:a,checkDates:r,startDate:l,id:t,handleCheck:i})))}function b(e){var t=e.id,a=e.handleEdit,n=e.handleDelete,r=e.handleSettingOpen;return c.a.createElement("div",{className:"setting"},c.a.createElement("button",{onClick:function(){a(t),r()}},"edit title"," ",c.a.createElement("span",{role:"img","aria-label":"edit"},"\u270f\ufe0f")),c.a.createElement("button",{onClick:function(){n(t),r()}},"delete"," ",c.a.createElement("span",{role:"img","aria-label":"edit"},"\ud83d\uddd1\ufe0f")))}var O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleSettingOpen=function(){var e=a.state.settingOpen;a.setState({settingOpen:!e})},a.state={settingOpen:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.month,n=e.title,r=e.checkDates,l=e.startDate,i=e.handleCheck,o=e.handleEdit,s=e.handleDelete,d=this.state.settingOpen;return c.a.createElement("div",{className:"tracker-box",onDoubleClick:this.handleSettingOpen},d?c.a.createElement(b,{id:t,handleEdit:o,handleSettingOpen:this.handleSettingOpen,handleDelete:s}):c.a.createElement(D,{id:t,month:a,title:n,checkDates:r,startDate:l,handleCheck:i}))}}]),t}(n.Component),y=(a(23),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.month,a=e.data,n=e.handleCheck,r=e.handleEdit,l=e.handleDelete;return c.a.createElement("div",{className:"tracker-list"},a.map((function(e){return c.a.createElement(O,{key:e.id,month:t,title:e.title,id:e.id,checkDates:e.checkDates,startDate:e.startDate,handleCheck:n,handleEdit:r,handleDelete:l})})))}}]),t}(n.Component)),g=(a(24),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.month,a=e.handleMonth;return c.a.createElement("div",{className:"month"},c.a.createElement("button",{onClick:function(){return a("-")}},c.a.createElement("h2",null,"<")),c.a.createElement("h2",null,t),t!==f()().format("YYYY.M")&&c.a.createElement("button",{onClick:function(){return a("+")}},c.a.createElement("h2",null,">")))}}]),t}(n.Component));a(25);var C=function(e){return c.a.createElement("div",{className:"direction"},c.a.createElement("button",{className:"explanation-button",onClick:function(){alert("Create a new habit and track it every day.\nDouble Click on the calendar for editing!\ud83d\ude00")}},c.a.createElement("span",{role:"img","aria-label":"direction"},"\ud83d\udca1")),c.a.createElement("div",{className:"direction-elem"},c.a.createElement("big",{style:{color:"rgb(255, 0, 170)"}},"\u25cf"),"start date"),c.a.createElement("div",{className:"direction-elem"},c.a.createElement("big",{style:{color:"rgb(59, 243, 182)"}},"\u25cf"),"today"))},j=function(e){function t(){var e;Object(o.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).handleLoadData=function(e){return localStorage.getItem(e)},e.handleSaveData=function(t){localStorage.setItem(e.state.month,JSON.stringify(t))},e.handleAddItem=function(){var t=prompt("Add new habit to traking \ud83d\ude0a"),n=a(26);if(""!==t&&null!==t){var c=e.state.data;e.setState({data:c.concat({id:n.generate(),title:t,checkDates:[],startDate:f()().format("YYYY.M.D")})},(function(){e.handleSaveData(e.state.data)}))}},e.handleCheck=function(t,a){var n=e.state.data,c=e.state.month,r=f()().format("YYYY.M"),l=f()().format("D");if(c===r&&a>parseInt(l))return null;e.setState({data:n.map((function(e){return e.id===t?{id:e.id,title:e.title,checkDates:e.checkDates.concat(a),startDate:e.startDate}:e}))},(function(){e.handleSaveData(e.state.data)}))},e.handleMonth=function(t){var a=e.state.month,n=parseInt(a.split(".")[0]),c=parseInt(a.split(".")[1]),r="";r="+"===t?12===c?"".concat(n+1,".1"):"".concat(n,".").concat(c+1):1===c?"".concat(n-1,".12"):"".concat(n,".").concat(c-1);var l=e.handleLoadData(r),i=JSON.parse(l);i=null===i?[]:i,e.setState({month:r,data:e.state.data.slice(0,0).concat(i)})},e.handleEdit=function(t){var a=prompt("Write your new title. \ud83d\ude00"),n=e.state.data;""!==a&&null!==a&&e.setState({data:n.map((function(e){return e.id===t?Object(i.a)({},e,{title:a}):e}))},(function(){e.handleSaveData(e.state.data)}))},e.handleDelete=function(t){var a=e.state.data;window.confirm("Do you really want to delete this habit?\ud83d\ude02")&&e.setState({data:a.filter((function(e){return e.id!==t}))},(function(){e.handleSaveData(e.state.data)}))};var n=f()().format("YYYY.M"),c=e.handleLoadData(n),r=JSON.parse(c);return e.state={month:n,data:null===r?[]:r},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"full-page"},c.a.createElement(C,null),c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"app-title"},"Daily tracker"),this.state.month===f()().format("YYYY.M")&&c.a.createElement("button",{className:"add-item-button",onClick:this.handleAddItem},"\u2714 Add item")),c.a.createElement(g,{month:this.state.month,handleMonth:this.handleMonth}),c.a.createElement("div",{className:"tracker"},c.a.createElement(y,{month:this.state.month,data:this.state.data,handleCheck:this.handleCheck,handleEdit:this.handleEdit,handleDelete:this.handleDelete})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b2e94674.chunk.js.map