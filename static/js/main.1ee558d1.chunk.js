(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports={list:"Statistics_list__3SpCY"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(7),o=n.n(a),i=(n(14),n(8)),r=n(2),s=n(3),u=n(5),l=n(4),b=(n(15),n(0)),h=function(t){var e=t.title,n=t.children;t.total;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:e}),n]})},d=(n(17),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){return t.props.onChangeState("good")},children:"Good"}),Object(b.jsx)("button",{onClick:function(){return t.props.onChangeState("neutral")},children:"Neutral"}),Object(b.jsx)("button",{onClick:function(){return t.props.onChangeState("bad")},children:"Bad"})]})}}]),n}(c.Component)),j=n(9),O=n.n(j),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){console.log(this.props);var t=this.props,e=t.good,n=t.neutral,c=t.bad,a=t.total,o=t.positivePercentage;return Object(b.jsxs)("ul",{className:O.a.list,children:[Object(b.jsxs)("li",{children:["Good: ",e]}),Object(b.jsxs)("li",{children:["Neutral: ",n]}),Object(b.jsxs)("li",{children:["Bad: ",c]}),Object(b.jsxs)("li",{children:["Total: ",a]}),Object(b.jsxs)("li",{children:["positive Percentage: ",o,"%"]})]})}}]),n}(c.Component),f=(n(18),function(){return Object(b.jsx)("div",{children:"No feedback given"})}),g=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t}return Object(s.a)(n,[{key:"changeState",value:function(t){this.setState((function(e){return Object(i.a)({},t,e[t]+1)})),console.log(this.state)}},{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.round(this.state.good/this.countTotalFeedback()*100)||0}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{title:"feedbackOptions",children:Object(b.jsx)(d,{onChangeState:this.changeState.bind(this)})}),Object(b.jsx)(h,{title:"statistics",total:this.countTotalFeedback(),children:this.countTotalFeedback()?Object(b.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(b.jsx)(f,{})})]})}}]),n}(c.Component);o.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.1ee558d1.chunk.js.map