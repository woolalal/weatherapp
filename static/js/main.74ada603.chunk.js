(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(5),c=n.n(r),a=n(4),i=n.n(a),o=n(6),u=n(2),p=n(0),l=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["Country Name: ",e.name]}),Object(p.jsxs)("p",{children:["Current Temperature: ",e.temperature," \xb0C"]}),Object(p.jsxs)("p",{children:["Feels like: ",e.feelslike," \xb0C"]}),Object(p.jsxs)("p",{children:["Weather Description: ",e.description]}),Object(p.jsxs)("p",{children:["Wind Speed: ",e.wind," m/s"]}),Object(p.jsxs)("p",{children:["Sunrise Time: ",e.sunrise]}),Object(p.jsxs)("p",{children:["Sunset Time: ",e.sunset]})]})},d=function(e){return Object(p.jsxs)("div",{className:"forecast-container",children:[Object(p.jsxs)("p",{children:["Date: ",e.date]}),Object(p.jsxs)("p",{children:["Weather Temperature: ",e.temperature," \xb0C"]}),Object(p.jsxs)("p",{children:["Weather Feels Like: ",e.feelslike," \xb0C"]}),Object(p.jsxs)("p",{children:["Sunrise Time: ",e.sunrises]}),Object(p.jsxs)("p",{children:["Sunset Time: ",e.sunset]}),e.description.map((function(e){return Object(p.jsxs)("p",{children:["Weather Description: ",e.description]},e.id)})),e.description.map((function(e){return Object(p.jsx)("img",{src:"http://openweathermap.org/img/wn/"+e.icon+"@2x.png",alt:"weather-img"},e.id)}))]})},j=(n(13),"ca01d0a48305d933ddc756062be418ab");var h=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(""),a=Object(u.a)(c,2),h=a[0],m=a[1],b=Object(s.useState)("Singapore"),O=Object(u.a)(b,2),x=O[0],f=O[1],w=Object(s.useState)([]),g=Object(u.a)(w,2),S=g[0],v=g[1],y=Object(s.useState)(""),D=Object(u.a)(y,2),N=D[0],k=D[1];function T(){return(T=Object(o.a)(i.a.mark((function e(){var t,n,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(x,"&appid=").concat(j,"&units=metric"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log([n]),r([n]),e.next=10,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n.coord.lat,"&lon=").concat(n.coord.lon,"&exclude=hourly&appid=").concat(j,"&units=metric"));case 10:return s=e.sent,e.next=13,s.json();case 13:c=e.sent,console.log(c),v(c.daily);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){T.apply(this,arguments)}();var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear();k(e=n+"/"+t+"/"+s)}),[x]),Object(p.jsxs)("div",{className:"weather",children:[Object(p.jsx)("h3",{children:"Enter country/city name to search weather for"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(""),f(h)},className:"weatherform",children:[Object(p.jsx)("input",{type:"text",placeholder:"Country Name",className:"search-input",onChange:function(e){console.log(e.target.value),m(e.target.value)},value:h}),Object(p.jsx)("button",{className:"search-btn",children:"Search"}),Object(p.jsx)("h4",{children:N})]}),n.map((function(e){return Object(p.jsx)(l,{name:e.name,temperature:e.main.temp,feelslike:e.main.feels_like,description:e.weather[0].description,wind:e.wind.speed,sunrise:new Date(1e3*e.sys.sunrise).toLocaleTimeString("en-IN"),sunset:new Date(1e3*e.sys.sunset).toLocaleTimeString("en-IN")},e.id)})),Object(p.jsx)("div",{className:"forecast-section",children:S.map((function(e){return Object(p.jsx)(d,{date:new Date(1e3*e.dt).toLocaleDateString("en-US"),temperature:e.temp.day,feelslike:e.feels_like.day,description:e.weather,sunrises:new Date(1e3*e.sunrise).toLocaleTimeString("en-IN"),sunset:new Date(1e3*e.sunset).toLocaleTimeString("en-IN")},e.dt)}))})]})};c.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.74ada603.chunk.js.map