(function(t){function e(e){for(var i,n,s=e[0],l=e[1],u=e[2],v=0,d=[];v<s.length;v++)n=s[v],o[n]&&d.push(o[n][0]),o[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},o={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/open-movies-information/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("64a9"),o=a.n(i);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-navbar-brand",{attrs:{href:"#"}},[t._v("About")]),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",{staticClass:"ml-auto"})],1)],1),a("MoviesPage",{attrs:{title:"Rank of popular movies and the details"}}),a("section",{attrs:{id:"lab_social_icon_footer"}},[a("b-row",[a("b-col",{staticClass:"mr-auto p-5",attrs:{cols:"auto"}},[a("footer",{staticClass:"page-footer font-small blue"},[a("div",{staticClass:"footer-copyright text-center py-2"},[a("b",[t._v("© 2019 Wales Chang")])])])]),a("b-col",{staticClass:"p-5",attrs:{cols:"auto"}},[a("div",{staticClass:"text-center center-block"},[a("a",{attrs:{href:"https://github.com/weican/cards-ui"}},[a("i",{staticClass:"fa fa-github-square fa-3x social",attrs:{id:"social-gb"}})]),a("a",{attrs:{href:"https://www.linkedin.com/in/wales-chang-41250b63/p"}},[a("i",{staticClass:"fa fa-linkedin-square fa-3x social",attrs:{id:"social-li"}})])])])],1)],1)],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-jumbotron",{attrs:{"header-level":"5",header:t.title,lead:t.subtitle}}),a("b-container",{staticClass:"p-4",attrs:{fluid:""}},[a("b-row",{staticClass:"mb-4"},[a("b-col",{staticClass:"shadow p-3 mb-5 mr-4 bg-white rounded"},[a("b-card",{attrs:{title:t.selectedMovie.title}},[a("b-row",[a("b-col",[a("b-img",{attrs:{thumbnail:"",fluid:"",src:t.selectedMovie.poster_path,alt:"Thumbnail"}})],1),a("b-col",[a("figure",[a("chart",{ref:"gauge",staticStyle:{width:"100%",height:"100%"},attrs:{options:t.setVoteOption}})],1),a("p",{staticClass:"card-text text-left"},[t._v("\n                    "+t._s(t.selectedMovie.overview)+"\n                  ")])])],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("small",{staticClass:"text-muted"},[t._v("Release date: "+t._s(t.selectedMovie.releaseData))])])],1)],1),a("b-col",{staticClass:"shadow p-3 mb-5 bg-white rounded"},[a("b-card",[a("figure",[a("chart",{ref:"bar",attrs:{options:t.setMostPopOption},on:{mouseover:t.mostPopMouseOver}})],1)])],1)],1),a("b-row",{staticClass:"mb-4"},[a("b-col",{staticClass:"shadow p-3 mb-5 mr-4 bg-white rounded"},[a("b-card",[a("figure",[a("chart",{ref:"bar",attrs:{options:t.setBudgetAndRevenueOption}})],1)])],1),a("b-col",{staticClass:"shadow p-3 mb-5 bg-white rounded"},[a("b-card",{attrs:{title:"Movie Genre List"}},[a("b-list-group",t._l(t.selectedMovieGenre,function(e){return a("b-list-group-item",{attrs:{button:""},on:{mouseover:function(a){t.genreMouseOver(e.category_name)}}},[a("i",{staticClass:"fa fa-bar-chart",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(e.category_name)+" \n                ")])}),1)],1)],1)],1)],1)],1)},s=[],l=a("e814"),u=a.n(l),c=a("5d73"),v=a.n(c),d=a("2d7d"),f=a.n(d),h=a("bc3a"),p=a.n(h),g=a("9ca8"),b=(a("627c"),a("94b1"),a("007d"),a("07e6"),{name:"LineChart",components:{chart:g["a"]},data:function(){return{subtitle:"Providing movies information for you",movieData:[],baseImgUrl:"https://image.tmdb.org/t/p/w500/",hostUrl:"https://open-movies-backend.herokuapp.com/",genreList:new f.a,selectedMovieGenre:[],selectedMovie:{title:"",overview:"",poster_path:"",releaseData:""},setMostPopOption:{title:{text:"Most popurlity movies in 2018",textStyle:{fontSize:22}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",axisLabel:{textStyle:{color:"#999"}}},yAxis:{type:"category",data:[],axisLabel:{formatter:function(t){return t.length>10?t.substring(0,10)+"...":t}}}},setBudgetAndRevenueOption:{title:{text:"Budget/Rev chart",textStyle:{fontSize:22}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis"},calculable:!0,xAxis:[{axisLabel:{rotate:45,formatter:function(t){return t.length>10?t.substring(0,10)+"...":t}},type:"category"}],yAxis:[{type:"value"}]},setVoteOption:{series:[{name:"Vote avgerage",type:"gauge",splitNumber:-1,radius:"90%",axisLine:{lineStyle:{width:10}},axisLabel:{show:!1},axisTick:{show:!1},pointer:{show:!1},lineStyle:{color:[[0,"#1d60ac"],[1,"#f6f7fa"]]},data:[{value:0}]}]}}},props:{title:String},mounted:function(){this.getMoviesInfo()},methods:{mostPopMouseOver:function(t){this.updateMoiveInfo(t.dataIndex)},updateMoiveInfo:function(t){if(this.selectedMovie.title=this.movieData[this.movieData.length-t-1].title,this.movieData[this.movieData.length-t-1].overview.length<=230)this.selectedMovie.overview=this.movieData[this.movieData.length-t-1].overview;else for(var e="",a=200;a<this.movieData[this.movieData.length-t-1].overview.length;a++)if(e=this.movieData[this.movieData.length-t-1].overview[a]," "==e||"."==e){this.selectedMovie.overview=this.movieData[this.movieData.length-t-1].overview.substring(0,a)+"...";break}this.selectedMovie.poster_path=this.baseImgUrl+this.movieData[this.movieData.length-t-1].poster_path,this.selectedMovie.releaseData=this.movieData[this.movieData.length-t-1].release_date,this.setVoteOption.series[0].data=[{value:10*this.movieData[this.movieData.length-t-1].vote_avg}],this.setVoteOption.series[0].detail={formatter:function(t){return t+"%"},textStyle:{fontSize:"20"}},this.setVoteOption.series[0].axisLine={lineStyle:{color:[[this.movieData[this.movieData.length-t-1].vote_avg/10,"#1d60ac"],[1,"#f6f7fa"]]}},this.selectedMovieGenre=this.genreList[this.movieData[this.movieData.length-t-1].genre_id],this.updateBudgetAndRevenueChart(this.selectedMovieGenre[0].category_name)},genreMouseOver:function(t){this.updateBudgetAndRevenueChart(t)},updateBudgetAndRevenueChart:function(t){var e=[];for(var a in this.genreList){var i=this.genreList[a],o=!0,r=!1,n=void 0;try{for(var s,l=v()(i);!(o=(s=l.next()).done);o=!0){var c=s.value;c.category_name==t&&e.push(a)}}catch(D){r=!0,n=D}finally{try{o||null==l.return||l.return()}finally{if(r)throw n}}}var d=new f.a,h=!0,p=!1,g=void 0;try{for(var b,m=v()(this.movieData);!(h=(b=m.next()).done);h=!0){var y=b.value;d.set(y.movie_id,{title:y.title,budget:y.budget,revenue:y.revenue})}}catch(D){p=!0,g=D}finally{try{h||null==m.return||m.return()}finally{if(p)throw g}}var w=[],x=[],_=[];for(var M in e)w.push(d.get(u()(e[M])).budget),x.push(d.get(u()(e[M])).revenue),_.push(d.get(u()(e[M])).title);this.setBudgetAndRevenueOption.title={text:t+" budeget and revenue",subtext:""},this.setBudgetAndRevenueOption.xAxis=[{data:_}],this.setBudgetAndRevenueOption.series=[{name:"budget",type:"bar",data:w},{name:"revenue",type:"bar",data:x}]},getMoviesInfo:function(){var t=this;p.a.get(this.hostUrl+"getAll").then(function(e){t.movieData=e.data;var a=e.data.map(function(t){return t.title}),i=e.data.map(function(t){return t.pop});t.setMostPopOption.series={data:i.reverse(),type:"bar",itemStyle:{normal:{color:new g["a"].graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{color:new g["a"].graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}}},a=a.reverse().map(function(t){return{value:t,textStyle:{align:"right"}}}),t.setMostPopOption.yAxis={type:"category",data:a}}).then(function(){p.a.get(t.hostUrl+"getGenre").then(function(e){t.genreList=e.data,t.updateMoiveInfo(t.movieData.length-1)})})}}}),m=b,y=(a("e9ae"),a("2877")),w=Object(y["a"])(m,n,s,!1,null,"54b4e5cc",null);w.options.__file="MoviesPage.vue";var x=w.exports,_={name:"app",components:{MoviesPage:x}},M=_,D=(a("034f"),Object(y["a"])(M,o,r,!1,null,null,null));D.options.__file="App.vue";var O=D.exports,C=a("9f7b");a("f9e3"),a("2dd8"),a("7f10");i["a"].config.productionTip=!1,i["a"].use(C["a"]),new i["a"]({render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,a){},e509:function(t,e,a){},e9ae:function(t,e,a){"use strict";var i=a("e509"),o=a.n(i);o.a}});