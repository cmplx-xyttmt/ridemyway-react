(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},45:function(e,t,a){e.exports=a(84)},81:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(37),i=a.n(s),c=a(15),o=a(86),l=a(2),u=a.n(l),d=a(4),p=a(7),m=a(8),f=a(10),h=a(9),E=a(11),g=a(87),b=a(85),v=a(88),w=(a(22),a(16)),R=a.n(w),y=function(){return r.a.createElement("div",{className:"center-block"},r.a.createElement("div",{className:"preloader-wrapper small active valign-wrapper"},r.a.createElement("div",{className:"spinner-layer spinner-red-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"})))))},O=a(3),N=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).validate=function(e){var t={};return e.username?e.username.length<5&&(t.username="Make sure your username has at least 5 characters"):t.username="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<5&&(t.password="Make sure your password has at least 5 characters"):t.password="Required",e.confirmPassword?e.confirmPassword!==e.password&&(t.password="Passwords don't match",t.confirmPassword=t.password):t.confirmPassword="Required",t},a.signUpUser=function(e){(0,a.props.signUp)(e)},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(O.d,{initialValues:{username:"",email:"",password:"",confirmPassword:""},validate:function(t){return e.validate(t)},onSubmit:function(t){return e.signUpUser(t)},className:"row"},r.a.createElement(O.c,{className:"col s6 offset-s3"},r.a.createElement("div",{className:"input-field"},r.a.createElement("i",{className:"material-icons prefix white-text"},"person"),r.a.createElement(O.b,{id:"username",type:"text",name:"username",className:"white-text validate"}),r.a.createElement("label",{htmlFor:"username",className:"pink-text text-accent-4"},"Username"),r.a.createElement(O.a,{name:"username",className:"helper-text red-text","data-error":"wrong",component:"span"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("i",{className:"material-icons prefix white-text"},"email"),r.a.createElement(O.b,{id:"email",type:"email",name:"email",className:"white-text"}),r.a.createElement("label",{htmlFor:"email",className:"pink-text text-accent-4"},"Email"),r.a.createElement(O.a,{name:"email",className:"helper-text red-text","data-error":"wrong",component:"span"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("i",{className:"material-icons prefix white-text"},"lock"),r.a.createElement(O.b,{id:"password",type:"password",name:"password",className:"white-text"}),r.a.createElement("label",{htmlFor:"password",className:"pink-text text-accent-4"},"Password"),r.a.createElement(O.a,{name:"password",className:"helper-text red-text","data-error":"wrong",component:"span"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("i",{className:"material-icons prefix white-text"},"lock"),r.a.createElement(O.b,{id:"confirmPassword",type:"password",name:"confirmPassword",className:"white-text testing"}),r.a.createElement("label",{htmlFor:"confirmPassword",className:"pink-text text-accent-4"},"Confirm Password"),r.a.createElement(O.a,{name:"confirmPassword",className:"helper-text red-text","data-error":"wrong",component:"span"})),r.a.createElement("button",{type:"submit",className:"button btn grey"},"sign up")))}}]),t}(r.a.Component),x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).validate=function(e){var t={};return e.username?e.username.length<5&&(t.username="Make sure your username has at least 5 characters"):t.username="Required",e.password?e.password.length<5&&(t.password="Make sure your password has at least 5 characters"):t.password="Required",t},a.loginUser=function(){var e=Object(d.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.login,e.next=3,n(t);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(O.d,{initialValues:{username:"",password:""},validate:function(t){return e.validate(t)},onSubmit:function(t){return e.loginUser(t)},className:"row"},r.a.createElement(O.c,{className:"col s6 offset-s3"},r.a.createElement("div",{className:"input-field"},r.a.createElement("i",{className:"material-icons prefix white-text"},"person"),r.a.createElement(O.b,{id:"username",type:"text",name:"username",className:"white-text validate"}),r.a.createElement("label",{htmlFor:"username",className:"pink-text text-accent-4"},"Username"),r.a.createElement(O.a,{name:"username",className:"helper-text red-text","data-error":"wrong",component:"span"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("i",{className:"material-icons prefix white-text"},"lock"),r.a.createElement(O.b,{id:"password",type:"password",name:"password",className:"white-text"}),r.a.createElement("label",{htmlFor:"password",className:"pink-text text-accent-4"},"Password"),r.a.createElement(O.a,{name:"password",className:"helper-text red-text","data-error":"wrong",component:"span"})),r.a.createElement("button",{type:"submit",className:"button btn grey"},"login")))}}]),t}(r.a.Component),k=a(41),j=a.n(k),S="https://ridemywayapidb.herokuapp.com/ridemyway/api/v1",q={baseURL:S};localStorage.getItem("token")&&(q={baseURL:S,headers:{Authorization:localStorage.getItem("token")}});var I=j.a.create(q),_=function(e){return{type:"TOGGLE_AUTH_VIEW",payload:{isLoading:1===e,isOnSignUpView:2===e,isOnLoginView:3===e}}},T=function(e){return{type:"SIGNUP_FAILED",payload:e}},V=function(e){return{type:"LOGIN_FAILED",payload:e}},U=function(e,t,a){e(t("Failed to connect to server. Please check your internet connection")),e(_(a))},A=function(e){return function(){var t=Object(d.a)(u.a.mark(function t(a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(_(1)),t.next=3,I.post("/auth/login",e).then(function(t){localStorage.setItem("token",t.data.access_token),localStorage.setItem("user",e.username),a({type:"LOGIN",payload:t.data})}).catch(function(e){a(_(3)),a(V(e.response.data.message))}).catch(function(){U(a,V,3)});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},C=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).signUpSuccessToasts=0,a.logInSuccessToasts=0,a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.auth,n=t.history;a.errors!==e.errors&&a.errors&&R.a.toast({html:a.errors,classes:"red darken-3"}),a.signUpSuccess&&0===this.signUpSuccessToasts&&(R.a.toast({html:"You've signed up successfully. Please login to confirm your account",classes:"green"}),this.signUpSuccessToasts+=1),a.loginSuccess&&0===this.logInSuccessToasts&&(R.a.toast({html:"You've logged in successfully",classes:"green"}),this.logInSuccessToasts+=1,n.push("/rides"))}},{key:"render",value:function(){var e=this.props,t=e.auth,a=e.toggleAuthView,n=e.signUp,s=e.login,i=t.isLoading,c=t.isOnSignUpView,o=t.isOnLoginView;return r.a.createElement("div",{className:"intro-container"},r.a.createElement("div",{className:"intro"},r.a.createElement("div",{className:"intro-heading"},r.a.createElement("h1",null,"RIDE MY WAY")),!i&&!c&&!o&&r.a.createElement("div",null,r.a.createElement("p",{className:"intro-info",id:"info"},"Looking for a ride?",r.a.createElement("br",null),"Or looking for someone to ride with?",r.a.createElement("br",null),"Sign up today."),r.a.createElement("p",null,r.a.createElement("button",{id:"login-button",type:"button",className:"button btn grey",onClick:function(){return a(3)}},"login"),r.a.createElement("button",{id:"signup-button",type:"button",className:"button btn grey",onClick:function(){return a(2)}},"Sign Up"))),r.a.createElement("div",null,i&&r.a.createElement(y,null),c&&r.a.createElement("div",{className:"center-block row"},r.a.createElement(N,{signUp:n}),r.a.createElement("p",{className:"message orange-text flow-text col s12",style:{fontSize:"small"}},"Already registered?",r.a.createElement("span",{className:"red-text darken-4 login-prompt",role:"button",tabIndex:"0",onClick:function(){return a(3)},style:{cursor:"pointer"}},"login"))),o&&r.a.createElement("div",{className:"center-block row"},r.a.createElement(x,{login:s}),r.a.createElement("p",{className:"message orange-text flow-text col s12",style:{fontSize:"small"}},"Not yet registered?",r.a.createElement("span",{className:"red-text darken-4 sign-up-prompt",role:"button",tabIndex:"0",onClick:function(){return a(2)},style:{cursor:"pointer"}},"sign up"))))))}}]),t}(r.a.Component),L=Object(c.b)(function(e){return{auth:e.authentication}},function(e){return{toggleAuthView:function(t){return e(_(t))},signUp:function(t){return e((a=t,function(){var e=Object(d.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(1)),e.next=3,I.post("/auth/signup",a).then(function(e){t({type:"SIGN_UP",payload:e.data}),t(_(3))}).catch(function(e){t(_(2)),t(T(e.response.data.message))}).catch(function(){U(t,T,2)});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));var a},login:function(){var t=Object(d.a)(u.a.mark(function t(a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(A(a)));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(C),D=function(e){return{type:"FETCHING",payload:e}},F=function(e){return{type:"TOGGLE_NAV_VIEW",payload:{isViewingAllRides:1===e,isViewingOwnRides:2===e,isViewingRideRequests:3===e}}},G=function(e){return function(){var t=Object(d.a)(u.a.mark(function t(a){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(D(!0)),I.defaults.headers.common.Authorization=localStorage.getItem("token"),n=e?"user/rides":"rides",t.next=5,I.get(n).then(function(e){a({type:"SET_RIDES",payload:e.data}),a(D(!1))}).catch(function(e){a({type:"FETCHING_RIDES_FAILED",payload:e.response.data}),a(D(!1))}).catch(function(){});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},P=function(e,t,a){return function(){var n=Object(d.a)(u.a.mark(function n(r){var s;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(D(!0)),s="users/rides/".concat(e,"/requests/").concat(t),n.next=4,I.put(s,a).then(function(e){r({type:"REQUEST_RESPONSE",payload:e.data}),r(D(!1))}).catch(function(e){r({type:"ERROR_REQUEST_RESPONSE",payload:e.response.data}),r(D(!1))}).catch(function(){});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},M=function(e){function t(e){var a;Object(p.a)(this,t);var n=(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).props,r=n.rides,s=n.fetchRides,i=n.toggleNav;return r.rides||(i(1),s()),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(d.a)(u.a.mark(function e(t){var a,n,r,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,n=a.rides,r=a.fetchRides,s=a.requests,!n.createdRide||n.createdRide===t.rides.createdRide){e.next=5;break}return R.a.toast({html:"Ride created successfully",classes:"green"}),e.next=5,r();case 5:if(n.errorsCreatingRide&&n.errorsCreatingRide!==t.rides.errorsCreatingRide&&R.a.toast({html:"Error creating ride, please try again",classes:"red darken-3"}),!n.isViewingOwnRides||n.isViewingOwnRides===t.rides.isViewingOwnRides){e.next=11;break}return e.next=9,r(!0);case 9:e.next=14;break;case 11:if(!n.isViewingAllRides||n.isViewingAllRides===t.rides.isViewingAllRides){e.next=14;break}return e.next=14,r();case 14:!s.errors||t.requests.errors&&s.errors.message===t.requests.errors.message||R.a.toast({html:s.errors.message,classes:"red darken-3"}),!s.rideRequest||t.requests.rideRequest&&s.rideRequest===t.requests.rideRequest||R.a.toast({html:"Successfully requested this ride",classes:"green"}),!s.requestResponse||t.requests.requestResponse&&s.requestResponse===t.requests.requestResponse||R.a.toast({html:s.requestResponse.status,classes:"green"});case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(){var e=Object(d.a)(u.a.mark(function e(t){var a,n,r,s,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,n=a.requestRide,r=a.rides,s=a.fetchRequests,i=a.toggleNav,!r.isViewingAllRides){e.next=6;break}return e.next=4,n(t);case 4:e.next=10;break;case 6:if(!r.isViewingOwnRides){e.next=10;break}return i(3),e.next=10,s(t);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"requestResponse",value:function(){var e=Object(d.a)(u.a.mark(function e(t,a){var n,r,s,i,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,r=n.requests,s=n.respondToRequest,i=n.fetchRequests,c=r.rideId,e.next=4,s(c,t,{decision:a});case 4:i(c);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.rides,n=t.requests;if(a.isFetching||!a.rides)return r.a.createElement("div",{className:"valign-wrapper"},r.a.createElement(y,null));var s=a.rides,i=n.rideRequests,c=a.isViewingOwnRides?"My Ride Offers":"All Ride Offers",o=a.isViewingRideRequests?"Ride Requests for this ride offer":c;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"intro-heading"},o),r.a.createElement("table",{className:"responsive-table highlight"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,a.isViewingRideRequests?"Requester Name":"Offerer Name"),r.a.createElement("th",null,a.isViewingRideRequests?"Accept":"Origin"),r.a.createElement("th",null,a.isViewingRideRequests?"Reject":"Destination"),!a.isViewingRideRequests&&r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,(a.isViewingOwnRides||a.isViewingAllRides)&&s.slice(0).reverse().map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.origin),r.a.createElement("td",null,t.destination),r.a.createElement("td",null,t.price),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn",id:"ride-click-button".concat(t.id),onClick:function(){return e.handleClick(t.id)}},"".concat(a.isViewingOwnRides?"View Requests":"Request Ride"))))}),a.isViewingRideRequests&&i.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"".concat("t"===t.accepted?"disabled":""," btn green-text"),id:"accept-button",onClick:function(){return e.requestResponse(t.id,"accept")}},"Accept")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"".concat("t"===t.rejected?"disabled":""," btn red-text"),id:"reject-button",onClick:function(){return e.requestResponse(t.id,"reject")}},"Reject")))})))))}}]),t}(r.a.Component),Q=Object(c.b)(function(e){return{rides:e.rideOffers,requests:e.rideRequests}},function(e){return{fetchRides:function(t){return e(G(t))},toggleNav:function(t){return e(F(t))},requestRide:function(t){return e(function(e){return function(){var t=Object(d.a)(u.a.mark(function t(a){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(D(!0)),n="rides/".concat(e,"/requests"),t.next=4,I.post(n).then(function(e){a({type:"SET_CREATED_RIDE_REQUEST",payload:e.data}),a(D(!1))}).catch(function(e){a({type:"ERROR_CREATING_RIDE_REQUEST",payload:e.response.data}),a(D(!1))}).catch(function(){});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}(t))},fetchRequests:function(t){return e(function(e){return function(){var t=Object(d.a)(u.a.mark(function t(a){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(D(!0)),n="users/rides/".concat(e,"/requests"),t.next=4,I.get(n).then(function(t){a({type:"SET_RIDE_REQUESTS",payload:{requests:t.data,rideId:e}}),a(D(!1))}).catch(function(e){a({type:"FETCHING_RIDE_REQUESTS_FAILED",payload:e.response.data}),a(D(!1))}).catch(function(){});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}(t))},respondToRequest:function(){var t=Object(d.a)(u.a.mark(function t(a,n,r){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(P(a,n,r)));case 1:case"end":return t.stop()}},t,this)}));return function(e,a,n){return t.apply(this,arguments)}}()}})(M),H=(a(81),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).validate=function(e){var t={};return e.destination||(t.destination="Required"),e.origin||(t.origin="Required"),null===e.price?t.price="Required":(e.price<0||e.price>Math.pow(2,31))&&(t.price="Price must be between 0 and ".concat(Math.pow(2,31))),t},a.createRideOffer=function(){var e=Object(d.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.createRide,e.next=3,n(t);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"modal-content black-text"},r.a.createElement("h4",{className:"intro-heading"},"Create a ride offer"),r.a.createElement(O.d,{initialValues:{origin:"",destination:"",price:0},validate:function(t){return e.validate(t)},onSubmit:function(t){return e.createRideOffer(t)}},r.a.createElement(O.c,null,r.a.createElement("div",{className:"input-field"},r.a.createElement(O.b,{id:"origin",type:"text",name:"origin",className:"validate"}),r.a.createElement("label",{htmlFor:"origin",className:"pink-text text-accent-4"},"Origin"),r.a.createElement(O.a,{name:"origin",className:"helper-text red-text","data-error":"wrong",component:"span"})),r.a.createElement("div",{className:"input-field"},r.a.createElement(O.b,{id:"destination",type:"text",name:"destination",className:"validate"}),r.a.createElement("label",{htmlFor:"destination",className:"pink-text text-accent-4 active"},"Destination"),r.a.createElement(O.a,{name:"destination",className:"helper-text red-text","data-error":"wrong",component:"span"})),r.a.createElement("div",{className:"input-field"},r.a.createElement(O.b,{id:"price",type:"number",name:"price",className:"validate"}),r.a.createElement("label",{htmlFor:"price",className:"pink-text text-accent-4"},"Price"),r.a.createElement(O.a,{name:"price",className:"helper-text red-text","data-error":"wrong",component:"span"})),r.a.createElement("button",{type:"submit",className:"modal-close btn"},"Create"))))}}]),t}(r.a.Component)),W=Object(c.b)(null,function(e){return{createRide:function(t){return e(function(e){return function(){var t=Object(d.a)(u.a.mark(function t(a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(D(!0)),t.next=3,I.post("users/rides",e).then(function(e){a({type:"SET_CREATED_RIDE",payload:e.data}),a(D(!1))}).catch(function(e){a({type:"ERROR_CREATING_RIDE",payload:e.response.data}),a(D(!1))}).catch(function(){});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(H),z=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".modal");R.a.Modal.init(e,{})}},{key:"logout",value:function(){var e=this.props,t=e.history,a=e.logoutAct;localStorage.removeItem("token"),localStorage.removeItem("user"),a(),t.push("/")}},{key:"render",value:function(){var e=this,t=this.props,a=t.rides,n=t.toggleNavView;return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav-wrapper nav row"},r.a.createElement("div",{className:"brand-logo col offset-s1"},"Ride My Way",r.a.createElement("i",{className:"material-icons left"},"directions_car")),r.a.createElement("ul",{className:"nav-content right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!",id:"ride-offers-button",onClick:function(){return n(1)},className:"".concat(a.isViewingAllRides?"active":"")},"Ride offers")),r.a.createElement("li",null,r.a.createElement("a",{href:"#modal1",className:"modal-trigger"},"Create Ride Offer")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!",id:"my-ride-offers-button",onClick:function(){return n(2)},className:"".concat(a.isViewingOwnRides?"active":"")},"My Ride offers")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!",id:"logout-button",onClick:function(){return e.logout()}},"Logout"))))),r.a.createElement("div",{className:"modal",id:"modal1"},r.a.createElement(W,null)))}}]),t}(r.a.Component),Y=Object(v.a)(Object(c.b)(function(e){return{rides:e.rideOffers}},function(e){return{toggleNavView:function(t){return e(F(t))},logoutAct:function(){return e({type:"LOGOUT"})}}})(z)),Z=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=Object(d.a)(u.a.mark(function e(){var t,a,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.determineLoggedInState,n=t.history,r=t.rides,e.next=3,a();case 3:r.rides?n.push("/rides"):n.push("/");case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.history,n=t.rides,r=t.location;n.rides&&n.rides!==e.rides.rides&&"/"===r.pathname&&a.push("/rides")}},{key:"render",value:function(){var e=this.props.rides;return r.a.createElement("div",null,e.rides&&r.a.createElement(Y,null),r.a.createElement(g.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:L}),r.a.createElement(b.a,{exact:!0,path:"/rides",component:Q})))}}]),t}(n.Component),J=Object(v.a)(Object(c.b)(function(e){return{rides:e.rideOffers}},function(e){return{determineLoggedInState:function(){var t=localStorage.getItem("token");t&&""!==t&&e(G())}}})(Z)),B=a(18),$=a(44),K=a(5),X=Object(B.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_AUTH_VIEW":return Object(K.a)({},e,{isLoading:t.payload.isLoading,errors:t.payload.isLoading?void 0:e.errors,isOnSignUpView:t.payload.isOnSignUpView,isOnLoginView:t.payload.isOnLoginView});case"SIGN_UP":return Object(K.a)({},e,{user:t.payload,errors:void 0,isLoading:!1,signUpSuccess:!0,loginSuccess:!1});case"SIGNUP_FAILED":return Object(K.a)({},e,{errors:t.payload,isLoading:!1,user:void 0});case"LOGIN":return Object(K.a)({},e,{errors:void 0,isLoading:!1,user:t.payload,loginSuccess:!0,signUpSuccess:!1});case"LOGIN_FAILED":return Object(K.a)({},e,{errors:t.payload,isLoading:!1,user:void 0});case"LOGOUT":return{};default:return e}},rideOffers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RIDES":return Object(K.a)({},e,{rides:t.payload.rides,errors:t.payload,isFetching:!1});case"FETCHING":var a=e.createdRide,n=e.errorsCreatingRide;return t.payload&&(a=void 0,n=void 0),Object(K.a)({},e,{isFetching:t.payload,createdRide:a,errorsCreatingRide:n});case"FETCHING_RIDES_FAILED":return Object(K.a)({},e,{errors:t.payload,isFetching:!1});case"SET_CREATED_RIDE":return Object(K.a)({},e,{createdRide:t.payload,isFetching:!1,errorsCreatingRide:void 0});case"ERROR_CREATING_RIDE":return Object(K.a)({},e,{errorsCreatingRide:t.payload,isFetching:!1});case"TOGGLE_NAV_VIEW":return Object(K.a)({},e,{isViewingAllRides:t.payload.isViewingAllRides,isViewingOwnRides:t.payload.isViewingOwnRides,isViewingRideRequests:t.payload.isViewingRideRequests});case"LOGOUT":return{};default:return Object(K.a)({},e)}},rideRequests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CREATED_RIDE_REQUEST":return Object(K.a)({},e,{rideRequest:t.payload,errors:void 0});case"ERROR_CREATING_RIDE_REQUEST":return Object(K.a)({},e,{rideRequest:void 0,errors:t.payload});case"SET_RIDE_REQUESTS":return Object(K.a)({},e,{rideRequests:t.payload.requests.ride_requests,errors:void 0,rideId:t.payload.rideId});case"FETCHING_RIDE_REQUESTS_FAILED":return Object(K.a)({},e,{errors:t.payload,rideRequests:void 0});case"REQUEST_RESPONSE":return Object(K.a)({},e,{errors:void 0,requestResponse:t.payload});case"ERROR_REQUEST_RESPONSE":return Object(K.a)({},e,{errors:t.payload,requestResponse:void 0});case"LOGOUT":return{};default:return Object(K.a)({},e)}}}),ee=Object(B.d)(X,Object(B.a)($.a));i.a.render(r.a.createElement(c.a,{store:ee},r.a.createElement(o.a,null,r.a.createElement(J,null))),document.getElementById("root"))}},[[45,2,1]]]);
//# sourceMappingURL=main.d4182d94.chunk.js.map