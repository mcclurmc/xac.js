Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g,h,i="",j=c.helperMissing,k=this.escapeExpression;return e.buffer.push('<header class="navigation">\n    <nav>\n        '),g={},h={hash:{},contexts:[b],types:["STRING"],hashTypes:g,data:e},e.buffer.push(k((f=c.outlet,f?f.call(b,"menu",h):j.call(b,"outlet","menu",h)))),e.buffer.push('\n    </nav>\n</header>\n\n<div class="content" role="main">\n    <div class="content-main">\n        '),g={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push('\n    </div>\n</div>\n\n<footer class="footer">\n   '),g={},h={hash:{},contexts:[b],types:["STRING"],hashTypes:g,data:e},e.buffer.push(k((f=c.outlet,f?f.call(b,"footer",h):j.call(b,"outlet","footer",h)))),e.buffer.push("\n</footer>"),i}),Ember.TEMPLATES.dashboard=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div class="content-wrap">\n    <h1>Dashboard</h1>\n\n    <div class="content-block warning">\n        <span class="warning-icon"></span>\n        <p>Running version '),g={},e.buffer.push(i(c._triageMustache.call(b,"buildVersion",{hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push(' - XAC is still work in progress and under \'rapid\' development - passwords are stored plain in local storage use with caution!</p>\n    </div>\n\n    <div class="dashboard-block">\n        <div class="dashboard-block-content">\n            <h3>Overview</h3>\n            <dl>\n                <dt>Pools:</dt>\n                <dd>'),g={unescaped:"STRING"},f=c._triageMustache.call(b,"pools",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashTypes:g,data:e}),(f||0===f)&&e.buffer.push(f),e.buffer.push("</dd>\n                <dt>Servers:</dt>\n                <dd>"),g={unescaped:"STRING"},f=c._triageMustache.call(b,"servers",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashTypes:g,data:e}),(f||0===f)&&e.buffer.push(f),e.buffer.push('</dd>\n                <dt>VM\'s:</dt>\n                <dd>-</dd>\n                <dt>Shared Repositories:</dt>\n                <dd>-</dd>\n                <dt>Virtual Interfaces:</dt>\n                <dd>-</dd>\n            </dl>\n        </div>\n    </div>\n\n    <div class="dashboard-block">\n        <div class="dashboard-block-content">\n            <h3>Resources</h3>\n            <dl>\n                <dt>vCPUs:</dt>\n                <dd>-</dd>\n                <dt>Memory:</dt>\n                <dd>-</dd>\n            </dl>\n        </div>\n    </div>\n\n\n</div>'),h}),Ember.TEMPLATES.footer=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push(' <div class="footer-content">\n        <p>Xen API Console; Build '),f={},e.buffer.push(h(c._triageMustache.call(b,"buildVersion",{hash:{},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('  |  <a href="https://github.com/HPieters/xac.js" target="_blank" title="Get the source at github">Get the source at github.</a>  |  <a href="https://github.com/HPieters/xac.js/issues" target="_blank" title="Report a issue">Report a issue</a>  |   <a href="https://github.com/HPieters/xac.js/issues" target="_blank" title="Feature request">Feature request</a></p>\n    </div>'),g}),Ember.TEMPLATES.help=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("<h2>Help</h2>")}),Ember.TEMPLATES.menu=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push(' <span class="dashboard"></span> Dashboard')}function g(a,b){b.buffer.push(' <span class="overview"></span> Overview ')}function h(a,b){var d,e,f="";return b.buffer.push(' <span class="server"></span> Hosts (<em class="no-servers">'),e={unescaped:"STRING"},d=c._triageMustache.call(a,"serverCount",{hash:{unescaped:"true"},contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("</em>)"),f}function i(a,b){var d,e,f="";return b.buffer.push(' <span class="notifications"></span>Notfications (<em class="no-notifications">'),e={unescaped:"STRING"},d=c._triageMustache.call(a,"notifications",{hash:{unescaped:"true"},contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("</em>)"),f}function j(a,b){b.buffer.push('  <span class="settings"></span>Settings')}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var k,l,m,n,o="",p=this,q=c.helperMissing;return e.buffer.push("<ul>\n    <hr />\n        <li>"),m={},n={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["STRING"],hashTypes:m,data:e},k=c.linkTo,l=k?k.call(b,"dashboard",n):q.call(b,"linkTo","dashboard",n),(l||0===l)&&e.buffer.push(l),e.buffer.push("</li>\n        <li>"),m={},n={hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b],types:["STRING"],hashTypes:m,data:e},k=c.linkTo,l=k?k.call(b,"overview",n):q.call(b,"linkTo","overview",n),(l||0===l)&&e.buffer.push(l),e.buffer.push("</li>\n        <li>"),m={},n={hash:{},inverse:p.noop,fn:p.program(5,h,e),contexts:[b],types:["STRING"],hashTypes:m,data:e},k=c.linkTo,l=k?k.call(b,"servers",n):q.call(b,"linkTo","servers",n),(l||0===l)&&e.buffer.push(l),e.buffer.push("</li>\n        <li>"),m={},n={hash:{},inverse:p.noop,fn:p.program(7,i,e),contexts:[b],types:["STRING"],hashTypes:m,data:e},k=c.linkTo,l=k?k.call(b,"notifications",n):q.call(b,"linkTo","notifications",n),(l||0===l)&&e.buffer.push(l),e.buffer.push('</li>\n    <hr />\n</ul>\n\n<!--\n<ul class="navigation-middle">\n    <hr />\n\n    <hr />\n</ul>\n\n<ul class="navigation-bottom">\n    <hr />\n        <li>'),m={},n={hash:{},inverse:p.noop,fn:p.program(9,j,e),contexts:[b],types:["STRING"],hashTypes:m,data:e},k=c.linkTo,l=k?k.call(b,"settings",n):q.call(b,"linkTo","settings",n),(l||0===l)&&e.buffer.push(l),e.buffer.push("</li>\n    <hr />\n</ul>\n-->"),o}),Ember.TEMPLATES.notifications=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="content-wrap"><div class="content-block">\n    <h1>Notifications</h1>\n\n\n\n</div></div>')}),Ember.TEMPLATES.overview=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i="";return b.buffer.push('\n                <li class="active">'),f={},h={hash:{},inverse:l.noop,fn:l.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"overview.view","pool",h):m.call(a,"linkTo","overview.view","pool",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n            "),i}function g(a,b){var d,e="";return b.buffer.push('<h3 class="overview-item-header">'),d={},b.buffer.push(k(c._triageMustache.call(a,"pool.poolName",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h3><p>"),d={},b.buffer.push(k(c._triageMustache.call(a,"pool.serverCount",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</p>"),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j="",k=this.escapeExpression,l=this,m=c.helperMissing;return e.buffer.push('<div class="overview-content">\n    <div class="overview-list">\n        <div class="overview-header">\n            <h4>Pools</h4>\n        </div>\n        <ul>\n            '),i={},h=c.each.call(b,"pool","in","controller",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n        </ul>\n    </div>\n\n    "),i={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:i,data:e}))),e.buffer.push("\n</div>"),j}),Ember.TEMPLATES["overview/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="overview-list">\n        <div class="overview-header">\n            <h4>Servers</h4>\n        </div>\n        <ul>\n                <li class="active"><h3 class="overview-item-header"></h3></li>\n         </ul>\n    </div>')}),Ember.TEMPLATES["overview/view"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return b.buffer.push('\n            <li class="active"><h3 class="overview-item-header"> '),d={},b.buffer.push(j(c._triageMustache.call(a,"server.hostUrl",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h3></li>\n        "),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i="",j=this.escapeExpression,k=this;return e.buffer.push('<div class="overview-list">\n    <div class="overview-header">\n        <h4>Servers</h4>\n    </div>\n    <ul>\n        '),h={},g=c.each.call(b,"server","in","servers",{hash:{},inverse:k.noop,fn:k.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n\n    </ul>\n</div>"),i}),Ember.TEMPLATES["partials/reveal"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push('<div id="reveal-main" class="reveal-modal">\n  <div class="reveal-content">\n    '),f={},e.buffer.push(h(c._triageMustache.call(b,"content",{hash:{},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('\n  </div>\n  <a class="close-reveal-modal">&#215;</a>\n</div>\n'),g}),Ember.TEMPLATES["pools/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("test")}),Ember.TEMPLATES.servers=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i="";return b.buffer.push("\n                "),f={tagName:"STRING"},h={hash:{tagName:"li"},inverse:q.noop,fn:q.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"view.index","server",h):r.call(a,"linkTo","view.index","server",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n            "),i}function g(a,b){var d,e,f,g,i="";return b.buffer.push(" "),f={},g={hash:{},inverse:q.noop,fn:q.program(3,h,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"view.index","server",g):r.call(a,"linkTo","view.index","server",g),(e||0===e)&&b.buffer.push(e),i}function h(a,b){var d,e="";return b.buffer.push('<h3 class="overview-item-header">'),d={},b.buffer.push(p(c._triageMustache.call(a,"server.hostUrl",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h3>"),e}function i(a,b){var d,e,f,g;f={},g={hash:{},inverse:q.noop,fn:q.program(6,j,b),contexts:[a],types:["STRING"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"servers.new",g):r.call(a,"linkTo","servers.new",g),e||0===e?b.buffer.push(e):b.buffer.push("")}function j(a,b){b.buffer.push("Add a new server")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var k,l,m,n,o="",p=this.escapeExpression,q=this,r=c.helperMissing;return e.buffer.push('<div class="overview-content">\n    <div class="overview-list">\n        <div class="overview-header">\n            <h4>Servers</h4>\n        </div>\n        <ul>\n            '),m={},k=c.each.call(b,"server","in","controller",{hash:{},inverse:q.noop,fn:q.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashTypes:m,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push("\n            "),m={tagName:"STRING","class":"STRING"},n={hash:{tagName:"li","class":"inline-button"},inverse:q.noop,fn:q.program(5,i,e),contexts:[b],types:["STRING"],hashTypes:m,data:e},k=c.linkTo,l=k?k.call(b,"servers.new",n):r.call(b,"linkTo","servers.new",n),(l||0===l)&&e.buffer.push(l),e.buffer.push("\n\n        </ul>\n    </div>\n\n    "),m={},e.buffer.push(p(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:m,data:e}))),e.buffer.push("\n</div>"),o}),Ember.TEMPLATES["servers/index"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i="";return b.buffer.push("\n    <li>"),f={},b.buffer.push(k(c._triageMustache.call(a,"server.hostUrl",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push(" - "),f={},h={hash:{},inverse:l.noop,fn:l.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"servers.edit","server",h):m.call(a,"linkTo","servers.edit","server",h),(e||0===e)&&b.buffer.push(e),b.buffer.push(" - <button "),f={},b.buffer.push(k(c.action.call(a,"deleteServer","server",{hash:{},contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b}))),b.buffer.push(">delete</button> - ("),f={},b.buffer.push(k(c._triageMustache.call(a,"server.versionMayor",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push("."),f={},b.buffer.push(k(c._triageMustache.call(a,"server.versionMinor",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push(") "),f={},b.buffer.push(k(c._triageMustache.call(a,"server.version",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push("</li>\n    "),i}function g(a,b){b.buffer.push("edit")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j="",k=this.escapeExpression,l=this,m=c.helperMissing;return e.buffer.push("<!--<ul>\n    "),i={},h=c.each.call(b,"server","in","controller",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</ul>-->\n\n<p>Please select a server from the menu on the right</p>"),j}),Ember.TEMPLATES["servers/new"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("\n    <p>Failed to authenticate with server</p>\n")}function g(a,b){b.buffer.push(" Cancel ")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j,k,l="",m=this,n=this.escapeExpression,o=c.helperMissing;return j={},h=c["if"].call(b,"authFailed",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n\n    <form>\n        <fieldset>\n            <ul class="createServerInput">\n                <li>\n                    <label for="hostUrl">Host Address:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.HostUrlField",{hash:{viewName:"hostUrl",id:"hostUrl",placeholder:"IP Address",valueBinding:"hostUrl"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push('\n                </li>\n                <li>\n                    <label for="hostName">Host Username:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostName",id:"hostName",placeholder:"SSH Username",valueBinding:"hostName"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push('\n                </li>\n                <li>\n                    <label for="hostPassword">Host Password:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostPassword",id:"hostPassword",placeholder:"SSH Password",valueBinding:"hostPassword"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push("\n                </li>\n                <li>\n                    <!--"),j={"class":"STRING"},k={hash:{"class":"cancel"},inverse:m.noop,fn:m.program(3,g,e),contexts:[b],types:["STRING"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"servers.index",k):o.call(b,"linkTo","servers.index",k),(i||0===i)&&e.buffer.push(i),e.buffer.push('-->\n                    <input type="submit" name="submit" id="add-server" value="Add Server" '),j={},e.buffer.push(n(c.action.call(b,"createServer",{hash:{},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push(" />\n                </li>\n            </ul>\n        </fieldset>\n    </form>\n"),l}),Ember.TEMPLATES.settings=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="content-block">\n    <h2>Settings</h2>\n</div>')}),Ember.TEMPLATES.view=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Information")}function g(a,b){b.buffer.push("Edit")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j,k,l="",m=this.escapeExpression,n=this,o=c.helperMissing;return e.buffer.push("<div>\n    <h1>"),j={},e.buffer.push(m(c._triageMustache.call(b,"content.hostUrl",{hash:{},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push("</h1>\n    <ul>\n        <li>"),j={},k={hash:{},inverse:n.noop,fn:n.program(1,f,e),contexts:[b],types:["ID"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"view.index",k):o.call(b,"linkTo","view.index",k),(i||0===i)&&e.buffer.push(i),e.buffer.push("</li>\n        <li>"),j={},k={hash:{},inverse:n.noop,fn:n.program(3,g,e),contexts:[b,b],types:["ID","ID"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"view.edit","content",k):o.call(b,"linkTo","view.edit","content",k),(i||0===i)&&e.buffer.push(i),e.buffer.push("</li>\n        <li>"),j={},k={hash:{},inverse:n.noop,fn:n.program(1,f,e),contexts:[b],types:["ID"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"view.delete",k):o.call(b,"linkTo","view.delete",k),(i||0===i)&&e.buffer.push(i),e.buffer.push('</li>\n    </ul>\n    <div class="container">\n        '),j={},e.buffer.push(m(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push("\n    </div>\n</div>"),l}),Ember.TEMPLATES["view/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("Container")}),Ember.TEMPLATES["view/new"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("\n    <p>Failed to authenticate with server</p>\n")}function g(a,b){b.buffer.push(" Cancel ")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j,k,l="",m=this,n=this.escapeExpression,o=c.helperMissing;return j={},h=c["if"].call(b,"authFailed",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n\n    <form>\n        <fieldset>\n            <ul class="createServerInput">\n                <li>\n                    <label for="hostUrl">Host Address:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.HostUrlField",{hash:{viewName:"hostUrl",id:"hostUrl",placeholder:"IP Address",valueBinding:"hostUrl"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push('\n                </li>\n                <li>\n                    <label for="hostName">Host Username:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostName",id:"hostName",placeholder:"SSH Username",valueBinding:"hostName"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push('\n                </li>\n                <li>\n                    <label for="hostPassword">Host Password:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostPassword",id:"hostPassword",placeholder:"SSH Password",valueBinding:"hostPassword"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push("\n                </li>\n                <li>\n                    <!--"),j={"class":"STRING"},k={hash:{"class":"cancel"},inverse:m.noop,fn:m.program(3,g,e),contexts:[b],types:["STRING"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"servers.index",k):o.call(b,"linkTo","servers.index",k),(i||0===i)&&e.buffer.push(i),e.buffer.push('-->\n                    <input type="submit" name="submit" id="add-server" value="Add Server" '),j={},e.buffer.push(n(c.action.call(b,"createServer",{hash:{},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push(" />\n                </li>\n            </ul>\n        </fieldset>\n    </form>\n"),l});