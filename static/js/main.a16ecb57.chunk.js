(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),i=a.n(c),s=(a(14),a(1)),r=a(2),l=a(5),u=a(3),h=a(6),m=a(4),d=(n.Component,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={cityName:"a",mainTemp:2,main:"",apiRes:{}},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,this.state.cityName),o.a.createElement("p",null,this.state.mainTemp," \u2103"))}}]),t}(n.Component)),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={name:"a",description:"b",collectionId:e.collectionId,location:e.location,apiRes:{}},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"fetchData",value:function(e){var t=this,a={method:"GET",headers:{"user-key":"dfb3484d191ae8bed61de303469acbec"}};fetch("https://developers.zomato.com/api/v2.1/collections?city_id="+e,a).then((function(e){return e.json()})).then((function(e){t.setState({name:e.collections[t.state.collectionId].collection.title,description:e.collections[t.state.collectionId].collection.description,apiRes:e})}),(function(e){t.setState({error:e})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"restaurant"},o.a.createElement("h1",null,this.props.data.collection.title),o.a.createElement("p",null,this.props.data.collection.description))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={name:"a",venue:"b",location:"c",date:""},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"fetchData",value:function(e){var t=this;fetch("https://api.songkick.com/api/3.0/metro_areas/"+e+"/calendar.json?apikey=b7gkiDLuqicUVMIA").then((function(e){return e.json()})).then((function(a){var n=a.resultsPage.results.event[t.state.collectionId],o=n.location.city,c=n.venue.displayName,i=n.displayName;t.setState({name:i,venue:c,location:o,locationId:e,date:"",apiRes:{}})}),(function(e){t.setState({error:e})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"restaurant"},o.a.createElement("p",null,this.props.data.displayName),o.a.createElement("p",null,this.props.data.location.city),o.a.createElement("p",null,this.props.data.venue.displayName))}}]),t}(n.Component),v=(a(15),a(16),0),k=0,y="",b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).changeLocation=function(){a.fetchZomatoLocation(y),a.fetchSongKickLocation(y)},a.state={searchQuery:"auckland"},a.keyDown=a.keyDown.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"fetchSongKickLocation",value:function(e){var t=this;fetch("https://api.songkick.com/api/3.0/search/locations.json?query="+e+"&apikey=b7gkiDLuqicUVMIA").then((function(e){return e.json()})).then((function(e){k=e.resultsPage.results.location[0].metroArea.id,console.log(k),t.fetchSongKick(k)}),(function(e){t.setState({error:e})}))}},{key:"fetchSongKick",value:function(e){var t=this;fetch("https://api.songkick.com/api/3.0/metro_areas/"+e+"/calendar.json?apikey=b7gkiDLuqicUVMIA").then((function(e){return e.json()})).then((function(e){t.setState({songKickData:e.resultsPage.results})}),(function(e){t.setState({error:e})}))}},{key:"fetchZomatoLocation",value:function(e){var t=this;fetch("https://developers.zomato.com/api/v2.1/cities?q="+e,{method:"GET",headers:{"user-key":"dfb3484d191ae8bed61de303469acbec"}}).then((function(e){return e.json()})).then((function(e){v=e.location_suggestions[0].id,console.log(v),t.fetchZomato(v)}),(function(e){console.log(e)}))}},{key:"fetchZomato",value:function(e){var t=this;fetch("https://developers.zomato.com/api/v2.1/collections?city_id="+e,{method:"GET",headers:{"user-key":"dfb3484d191ae8bed61de303469acbec"}}).then((function(e){return e.json()})).then((function(e){t.setState({zomatoData:e.collections})}),(function(e){t.setState({error:e})}))}},{key:"fetchAllData",value:function(e){this.fetchZomato(e),this.fetchSongKick(e)}},{key:"componentDidMount",value:function(){}},{key:"handleType",value:function(e){y=e.target.value}},{key:"keyDown",value:function(e){13==e.keyCode&&this.changeLocation()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("button",{onClick:this.changeLocation},"Search"),o.a.createElement("input",{id:"searchInput",onChange:this.handleType,onKeyDown:this.keyDown,type:"text"}),o.a.createElement(d,null),o.a.createElement("h1",null,"Eat"),this.state.zomatoData?o.a.createElement("div",{className:"restaurantGrid"},o.a.createElement(p,{data:this.state.zomatoData[0]}),o.a.createElement(p,{data:this.state.zomatoData[1]}),o.a.createElement(p,{data:this.state.zomatoData[2]})):o.a.createElement("p",null,"Loading..."),o.a.createElement("h1",null,"Music"),this.state.songKickData?o.a.createElement("div",{className:"restaurantGrid"},o.a.createElement(f,{data:this.state.songKickData.event[0]}),o.a.createElement(f,{data:this.state.songKickData.event[1]}),o.a.createElement(f,{data:this.state.songKickData.event[2]})):o.a.createElement("p",null,"Loading...")))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a16ecb57.chunk.js.map