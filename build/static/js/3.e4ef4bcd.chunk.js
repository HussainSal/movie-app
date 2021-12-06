(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[3],{50:function(e,t,a){e.exports={MovieDetails:"MovieDetails_MovieDetails__2yOme",InnerContainer:"MovieDetails_InnerContainer__2yy4X",Heading:"MovieDetails_Heading__mIeP7",TagLine:"MovieDetails_TagLine__2W0-T",Details:"MovieDetails_Details__naP4I",ImageContainer:"MovieDetails_ImageContainer__3Q4PJ",InnerDetails:"MovieDetails_InnerDetails__Jnk74",TrailerBtn:"MovieDetails_TrailerBtn__3FDt-",Genres:"MovieDetails_Genres__5pAxO",smallDetails:"MovieDetails_smallDetails__29Y28",MovieText:"MovieDetails_MovieText__1jXDq",Credits:"MovieDetails_Credits__2p1O5",Similar:"MovieDetails_Similar__3SiW0",HeadingSimilar:"MovieDetails_HeadingSimilar__E9Lc6",SimilarResults:"MovieDetails_SimilarResults__l23Az"}},53:function(e,t,a){"use strict";a.r(t);var s=a(5),i=a.n(s),n=a(9),r=a(4),c=a(1),l=a.n(c),o=a(2),d=a(13),p=a(50),m=a.n(p),j=a(0);var u=function(e){var t="https://image.tmdb.org/t/p/w500";return Object(j.jsx)("div",{className:m.a.MovieDetails,children:Object(j.jsxs)("div",{className:m.a.InnerContainer,children:[Object(j.jsxs)("h1",{className:m.a.Heading,children:[e.details.title," (",e.details.release_date,")"]}),Object(j.jsx)("p",{className:m.a.TagLine,children:e.details.tagline}),Object(j.jsxs)("div",{className:m.a.Details,children:[Object(j.jsx)("span",{className:m.a.ImageContainer,children:Object(j.jsx)("img",{src:e.details.image?"".concat(t,"/").concat(e.details.image):"https://www.movienewsletters.net/photos/000000h1.jpg",alt:"movieImg",style:{filter:e.loading?"blur(3px)":"blur(0)"}})}),Object(j.jsxs)("div",{className:m.a.InnerDetails,children:[Object(j.jsxs)("span",{className:m.a.Genres,children:[Object(j.jsx)("h3",{children:"Genres :"})," ",Object(j.jsx)("h3",{children:e.details.genres&&e.details.genres.map((function(t,a){return"".concat(t.name," ").concat(a<e.details.genres.length-1?",":""," ")}))})]}),Object(j.jsxs)("span",{className:m.a.smallDetails,children:[Object(j.jsxs)("p",{children:["Status : ",e.details.status]}),Object(j.jsxs)("p",{children:["Release Date : ",e.details.release_date]}),Object(j.jsxs)("p",{children:["Rating : ",Math.ceil(e.details.rating)]}),Object(j.jsxs)("p",{children:["TagLink : ",e.details.tagline]})]}),Object(j.jsx)("span",{className:m.a.MovieText,children:Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"description :"})," ",e.text]})}),Object(j.jsx)("div",{className:m.a.Credits,children:e.movieCastDetail&&e.movieCastDetail.map((function(a,s){return Object(j.jsxs)("span",{id:s,children:[Object(j.jsx)("img",{src:a.profile_path?"".concat(t).concat(a.profile_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2O_mIRhxseMzEZB_rvzjC92FQmBsVxY3wIrFnGM-Oh6azjRI_InZDtPmihRINHJGVVO4&usqp=CAU",alt:"action img",style:{filter:e.loading?"blur(3px)":"blur(0)"}}),Object(j.jsx)("p",{children:a.name||a.original_name})]},a.id)}))}),Object(j.jsx)("button",{className:m.a.TrailerBtn,children:Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(e.VideoId),target:"_blank",rel:"noreferrer",children:"Watch Trailer"})})]})]}),Object(j.jsxs)("div",{className:m.a.Similar,children:[Object(j.jsxs)("h1",{className:"".concat(m.a.Heading," ").concat(m.a.HeadingSimilar),children:["Similar ","tv"===e.type?"Tv Series":"Movies"]}),Object(j.jsx)(d.a,{className:m.a.SimilarResults,movies:e.similar,type:"tv"===e.type?"Tv Series":"Movie"})]})]})})};function v(){console.log("[specific.js]");var e=Object(c.useState)(),t=Object(r.a)(e,2),a=t[0],s=t[1],d=Object(c.useState)(),p=Object(r.a)(d,2),m=p[0],v=p[1],h=Object(c.useState)(),b=Object(r.a)(h,2),g=b[0],_=b[1],x=Object(c.useState)(),f=Object(r.a)(x,2),O=f[0],D=f[1],y=Object(c.useState)(!1),I=Object(r.a)(y,2),w=I[0],M=I[1],S=Object(o.f)();return Object(c.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a&&s({image:"https://www.movienewsletters.net/photos/000000h1.jpg"}),M(!0),e.next=4,fetch("https://api.themoviedb.org/3/".concat(S.type,"/").concat(S.movieId,"?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,s({title:n.title||n.original_title||n.name,genres:n.genres,image:n.poster_path,release_date:n.release_date||n.last_air_date,status:n.status,tagline:n.tagline,rating:n.vote_average,text:n.overview}),M(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(n.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!1),e.next=3,fetch("https://api.themoviedb.org/3/".concat(S.type,"/").concat(S.movieId,"/credits?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,v(a.cast);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(n.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/".concat(S.type,"/").concat(S.movieId,"/videos?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,_(a.results[a.results.length-1]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(n.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/".concat(S.type,"/").concat(S.movieId,"/similar?api_key=847ab230a96a2f52bc3f647f23dc84a4&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,D(a.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),r(),c(),document.getElementById("App")&&document.getElementById("Nav").scrollIntoView({behavior:"smooth"})}),[S.movieId,S.type]),Object(j.jsx)(l.a.Fragment,{children:a&&Object(j.jsx)(u,{text:a.text,movieCastDetail:m,details:a,VideoId:g&&g.key,type:S.type,similar:O,loading:w})})}t.default=l.a.memo(v)}}]);
//# sourceMappingURL=3.e4ef4bcd.chunk.js.map