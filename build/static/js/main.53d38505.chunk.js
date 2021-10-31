(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);n(10),n(11);var a=n(1),c=n.n(a),s=n(7),r=n.n(s),i=n(9),l=n(8),b=n(2),d=n(3),o=n(5),h=n(4),j=n(0),u=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).styles={width:"18rem"},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)("div",{className:"card mb-2",style:this.styles,children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title mb-4",children:this.props.card.name}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsxs)("button",{className:"btn btn-sm btn-primary mr-2",children:[Object(j.jsx)("i",{className:"fa fa-table mr-2"})," Add to table"]}),Object(j.jsxs)("button",{onClick:function(){return e.props.onDelete(e.props.card.id)},className:"btn btn-sm btn-danger",children:[Object(j.jsx)("i",{className:"fa fa-backward"})," Pass it"]})]})]})})})}},{key:"formatCount",value:function(){var e=this.state.cartValue;return 0===e?Object(j.jsx)("span",{className:"badge badge-light",children:"Empty"}):e}}]),n}(c.a.Component),m=u,f=function(e){var t=e.counter,n=e.onIncrement;return Object(j.jsxs)("div",{className:"budget-select mb-2",children:[Object(j.jsxs)("button",{className:"btn btn-sm btn-primary ml-2",onClick:function(){return n(t)},children:[Object(j.jsx)("i",{className:"fa fa-plus"})," Set capacity"]}),Object(j.jsxs)("span",{className:"badge badge-dark ml-2",children:[" ",t.capacity," "]})]})},p=[{fishID:"5b21ca3eeb7f6fbccd471820",name:"Sea"},{fishID:"5b21ca3eeb7f6fbccd471821",name:"Deshi"},{fishID:"5b21ca3eeb7f6fbccd471822",name:"Shutki"},{fishID:"5b21ca3eeb7f6fbccd471823",name:"Fishlet"}];var O=[{fishID:"5b21ca3eeb7f6fbccd471809",title:"Coral",category:{fishID:"5b21ca3eeb7f6fbccd471820",name:"Sea"},quantity:0,price:500,netWeight:4},{fishID:"5b21ca3eeb7f6fbccd471810",title:"Rupchada",category:{fishID:"5b21ca3eeb7f6fbccd471822",name:"Deshi"},quantity:0,price:1e3,netWeight:3},{fishID:"5b21ca3eeb7f6fbccd471811",title:"Suri",category:{fishID:"5b21ca3eeb7f6fbccd471823",name:"Shutki"},quantity:0,price:1e3,netWeight:3}];function v(){return O}var x=Object.values(O).reduce((function(e,t){return e+t.netWeight}),0);var g=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={mainTitle:"Machbazaar.com",subTitle:"Online fish selling platform.",imageUrl:"https:/picsum.photos/90",fishes:v()},e.styles={borderRadius:"50%",marginRight:"15px"},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-12 mt-5 d-flex justify-content-start align-items-center",children:[Object(j.jsx)("h3",{className:"mr-4",children:"Types"}),this.categoryMap()]})})})}},{key:"categoryMap",value:function(){return Object(j.jsxs)("div",{children:[this.props.header.category.map((function(e){return Object(j.jsxs)("button",{className:"btn btn-light border shadow mb-2 mr-4",children:[e.name," "]})}))," "]})}},{key:"btnDanger",value:function(){return 0===this.state.cartValue?"btn btn-lg btn-danger shadow text-white":"btn btn-lg btn-success shadow text-white"}},{key:"formatCount",value:function(){var e=this.props.counter.cartValue;return 0===e?Object(j.jsx)("span",{className:"badge badge-light",children:"Empty"}):e}}]),n}(c.a.Component),y=g,N=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={reviews:["Good one","Bad one","Satisfied","Loved it"]},e.styles={borderRadius:"50%",marginRight:"15px"},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("h4",{children:["Reviews",0!==this.state.reviews.length&&Object(j.jsxs)("span",{children:[" (",this.state.reviews.length,")"]})]}),0===this.state.reviews.length&&Object(j.jsx)("p",{children:"There are no reviews."}),this.reviewMap()]})}},{key:"reviewMap",value:function(){return 0===this.state.reviews.length?Object(j.jsx)("p",{children:"Please add reviews."}):Object(j.jsxs)("ul",{children:[this.state.reviews.map((function(e){return Object(j.jsx)("li",{children:e},e)}))," "]})}}]),n}(c.a.Component),k=N,w=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={fishes:v()},e.styles={borderRadius:"50%",marginRight:"15px"},e.deleteItem=function(t){var n=e.state.fishes.filter((function(e){return e.fishID!==t.fishID}));e.setState({fishes:n})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-12 col-12",children:Object(j.jsxs)("table",{className:"table table-striped border",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Category"}),Object(j.jsx)("th",{children:"Weight(kg)"}),Object(j.jsx)("th",{children:"Unit Price"}),Object(j.jsx)("th",{children:"Sub"}),Object(j.jsx)("th",{})]})}),Object(j.jsxs)("tbody",{children:[this.state.fishes.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.title}),Object(j.jsx)("td",{children:t.category.name}),Object(j.jsx)("td",{children:t.netWeight}),Object(j.jsx)("td",{children:t.price}),Object(j.jsx)("td",{children:t.netWeight*t.price}),Object(j.jsx)("td",{children:Object(j.jsxs)("button",{onClick:function(){return e.deleteItem(t)},className:"btn btn-sm btn-danger",children:[" ",Object(j.jsx)("i",{className:"fa fa-trash"})]})})]},t.fishID)})),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:"Total weight:"}),Object(j.jsx)("td",{children:this.props.tables.totalWeight}),Object(j.jsx)("td",{children:"Grand Total:"}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{})]})]})]})})})})}},{key:"counteWeight",value:function(){var e=this.state.netWeight;return 0===e?"0":e}},{key:"categoryMap",value:function(){return Object(j.jsx)("div",{children:this.state.categories.map((function(e){return Object(j.jsxs)("button",{className:"btn btn-light border shadow mb-2 mr-4",children:[" ",e.name," "]})}))})}}]),n}(c.a.Component),D=w,I=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.headers,a=t.counter;t.cards,t.tables,t.onIncrement,t.onDelete,t.onReset;return Object(j.jsxs)("div",{className:"container mt-4",children:[Object(j.jsx)("div",{className:"header-type-div mb-4",children:n.map((function(t){return Object(j.jsx)(y,{header:t,category:e.getCategories},t.id)}))}),Object(j.jsxs)("div",{className:"d-flex justify-content-start",children:[Object(j.jsxs)("div",{className:"counters-div mr-5",children:[a.map((function(t){return Object(j.jsx)(f,{counter:t,onIncrement:e.props.onIncrement,onDelete:e.props.onDelete,onReset:e.props.onReset},t.id)})),Object(j.jsx)("div",{className:"reset-div",children:Object(j.jsxs)("button",{className:"btn btn-sm btn-dark",onClick:this.props.onReset,children:[Object(j.jsx)("i",{className:"fa fa-undo"})," Reset capacity"]})})]}),Object(j.jsx)("div",{className:"card-div",children:this.props.cards.map((function(t){return Object(j.jsx)(m,{card:t,onDelete:e.props.onDelete},t.id)}))}),Object(j.jsx)("div",{className:"table-div",children:this.props.tables.map((function(t){return Object(j.jsx)(D,{tables:t,onDelete:e.props.onDelete},t.id)}))})]}),Object(j.jsx)("div",{className:"review-div",children:Object(j.jsx)(k,{})})]})}}]),n}(c.a.Component),C=I,S=function(e){var t=e.count;return Object(j.jsxs)("nav",{className:"navbar navbar-light bg-light mb-4",children:[Object(j.jsx)("a",{href:"#",className:"navbar-brand",children:"Machbazaar CMS"}),Object(j.jsx)("p",{children:"Counter-app"}),Object(j.jsxs)("p",{className:"nav-link font-weight-bold",children:["Your inventory has ",t," capacity counter(s)"]})]})},R=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).state={headers:[{id:1,category:p.filter((function(e){return e})),value:9}],counter:[{id:1,capacity:5},{id:2,capacity:10},{id:3,capacity:20}],tables:[{id:1,value:5,totalWeight:x,count:v()}],cards:[{id:1,name:"Ilish 2kg"},{id:2,name:"Shutki 5kg"}]},e.incrementHandler=function(t){var n=Object(l.a)(e.state.counter),a=n.indexOf(t);n[a]=Object(i.a)({},t),n[a].capacity++,e.setState({counter:n})},e.deleteHandler=function(t){var n=e.state.cards.filter((function(e){return e.id!==t}));e.setState({cards:n})},e.resetHandler=function(){var t=e.state.counter.map((function(e){return e.capacity=0,e}));e.setState({counter:t})},e.getCounterLength=function(){return e.state.counter.length},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)(S,{count:this.getCounterLength()}),Object(j.jsx)("main",{className:"container",children:Object(j.jsx)(C,{headers:this.state.headers,counter:this.state.counter,tables:this.state.tables,cards:this.state.cards,onIncrement:this.incrementHandler,onDelete:this.deleteHandler,onReset:this.resetHandler})})]})}}]),n}(a.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},M=document.getElementById("root");r.a.render(Object(j.jsx)(R,{}),M),W()}},[[17,1,2]]]);
//# sourceMappingURL=main.53d38505.chunk.js.map