(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7Qib":function(e,a,t){"use strict";t.d(a,"a",(function(){return n.a})),t.d(a,"b",(function(){return r.b})),t.d(a,"c",(function(){return l}));var n=t("ElpU"),r=t("BYIe"),l={getImageMap:function(e,a,t,n){return void 0===t&&(t=!1),void 0===n&&(n=3),e.reduce((function(e,r){var l=r.node.relativePath.match(a)[0];if(t)if(e.hasOwnProperty(l))e[l].length<=n&&e[l].push(r.node.childImageSharp.fluid);else{var c=[];c.push(r.node.childImageSharp.fluid),e[l]=c}else e[l]=r.node.childImageSharp.fluid;return e}),{})}}},F2CN:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return d}));var n=t("q1tI"),r=t.n(n),l=t("Kvkj"),c=t("7Qib"),i=t("IP2g"),u=t("7vrA");a.default=function(e){var a=e.data,t=a.allMarkdownRemark.edges||[],n=a.allFile.edges||[],d=c.c.getImageMap(n,/\/[work].*\/|$/);return r.a.createElement(l.b,null,r.a.createElement(c.a,{title:"Resume"}),r.a.createElement(l.c,{title:"Resume"}," ",r.a.createElement("a",{href:"../../alex-krall-resume.pdf",target:"_blank",download:!0},r.a.createElement(i.a,{style:{fontSize:"2rem"},icon:["fas","file-download"],className:"icons file"}))),r.a.createElement(u.a,{className:"pt-3",fluid:!0},r.a.createElement("h2",{className:"m-4"},"Experience"),r.a.createElement("hr",{className:"w-75"}),t.map((function(e){var a=e.node;return r.a.createElement("div",{key:a.id},r.a.createElement(l.e,{frontmatter:a.frontmatter,image:d[a.fields.slug],html:a.html}),r.a.createElement("hr",{className:"w-75"}))}))))};var d="1891162391"}}]);
//# sourceMappingURL=component---src-pages-resume-js-20ab6447dd7949083755.js.map