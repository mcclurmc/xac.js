Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g,h,i="",j=c.helperMissing,k=this.escapeExpression;return e.buffer.push('<header class="navigation">\n    <nav>\n        '),g={},h={hash:{},contexts:[b],types:["STRING"],hashTypes:g,data:e},e.buffer.push(k((f=c.outlet,f?f.call(b,"menu",h):j.call(b,"outlet","menu",h)))),e.buffer.push('\n    </nav>\n</header>\n\n<div class="content" role="main">\n    <div class="content-main">\n        '),g={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push('\n</div>\n</div>\n\n<footer class="footer">\n   '),g={},h={hash:{},contexts:[b],types:["STRING"],hashTypes:g,data:e},e.buffer.push(k((f=c.outlet,f?f.call(b,"footer",h):j.call(b,"outlet","footer",h)))),e.buffer.push("\n</footer>"),i}),Ember.TEMPLATES.dashboard=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("<div class=\"content-block\">\n    <h1>Dashboard</h1>\n\n    <p>\n        To use the parlance of our times. Dolor sit amet, consectetur adipiscing elit praesent ac magna. He lives in North Hollywood on Radford, near the In-and-Out Burger. Justo pellentesque ac lectus quis elit blandit fringilla. And I'm talkin' about the Dude here —sometimes there's a man who, wal, he's the man for his time'n place, he fits right in there—and that's the Dude, in Los Angeles. A ut turpis praesent felis ligula, malesuada suscipit.\n    </p>\n\n</div>")}),Ember.TEMPLATES.footer=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push(' <div class="footer-content">\n        <p>Xen API Console; Build '),f={},e.buffer.push(h(c._triageMustache.call(b,"buildVersion",{hash:{},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('  |  <a href="https://github.com/HPieters/xac.js" target="_blank" title="Get the source at github">Get the source at github.</a>  |  <a href="https://github.com/HPieters/xac.js/issues" target="_blank" title="Report a issue">Report a issue</a>  |   <a href="https://github.com/HPieters/xac.js/issues" target="_blank" title="Feature request">Feature request</a></p>\n    </div>'),g}),Ember.TEMPLATES.help=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("<h2>Help</h2>")}),Ember.TEMPLATES.menu=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push(' <span class="dashboard"></span> Dashboard')}function g(a,b){var d,e,f="";return b.buffer.push(' <span class="server"></span> Servers (<em class="no-servers">'),e={unescaped:"STRING"},d=c._triageMustache.call(a,"serverCount",{hash:{unescaped:"true"},contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("</em>)"),f}function h(a,b){b.buffer.push(' <span class="notifications"></span>Notfications')}function i(a,b){b.buffer.push('  <span class="settings"></span>Settings')}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var j,k,l,m,n="",o=this,p=c.helperMissing;return e.buffer.push("<ul>\n    <hr />\n    <li>"),l={},m={hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["STRING"],hashTypes:l,data:e},j=c.linkTo,k=j?j.call(b,"dashboard",m):p.call(b,"linkTo","dashboard",m),(k||0===k)&&e.buffer.push(k),e.buffer.push("</li>\n    <li>"),l={},m={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["STRING"],hashTypes:l,data:e},j=c.linkTo,k=j?j.call(b,"servers",m):p.call(b,"linkTo","servers",m),(k||0===k)&&e.buffer.push(k),e.buffer.push('</li>\n    <hr />\n</ul>\n\n<ul class="navigation-middle">\n    <hr />\n    <li>'),l={},m={hash:{},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["STRING"],hashTypes:l,data:e},j=c.linkTo,k=j?j.call(b,"notifications",m):p.call(b,"linkTo","notifications",m),(k||0===k)&&e.buffer.push(k),e.buffer.push('</li>\n    <hr />\n</ul>\n\n<ul class="navigation-bottom">\n    <hr />\n        <li>'),l={},m={hash:{},inverse:o.noop,fn:o.program(7,i,e),contexts:[b],types:["STRING"],hashTypes:l,data:e},j=c.linkTo,k=j?j.call(b,"settings",m):p.call(b,"linkTo","settings",m),(k||0===k)&&e.buffer.push(k),e.buffer.push("</li>\n    <hr />\n</ul>"),n}),Ember.TEMPLATES.notifications=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="content-block">\n    <h1>Notifications</h1>\n\n\n\n</div>')}),Ember.TEMPLATES["partials/reveal"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push('<div id="reveal-main" class="reveal-modal">\n  <div class="reveal-content">\n    '),f={},e.buffer.push(h(c._triageMustache.call(b,"content",{hash:{},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('\n  </div>\n  <a class="close-reveal-modal">&#215;</a>\n</div>\n'),g}),Ember.TEMPLATES.servers=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("List")}function g(a,b){b.buffer.push("Add Server")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j,k,l="",m=this,n=c.helperMissing,o=this.escapeExpression;return e.buffer.push('<div class="content-block">\n    <h1>Servers</h1>\n    '),j={unescaped:"STRING"},h=c._triageMustache.call(b,"amount",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n    <p>Servers are the main components within XAC, hook up all your servers here and let us do some magic voodoo</p>\n    <p>\n        <nav>\n            "),j={},k={hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["STRING"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"servers.index",k):n.call(b,"linkTo","servers.index",k),(i||0===i)&&e.buffer.push(i),e.buffer.push(" |\n            "),j={},k={hash:{},inverse:m.noop,fn:m.program(3,g,e),contexts:[b],types:["STRING"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"servers.new",k):n.call(b,"linkTo","servers.new",k),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n        </nav>\n    </p>\n\n    "),j={},e.buffer.push(o(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push("\n\n</div>\n\n"),l}),Ember.TEMPLATES["servers/index"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i="";return b.buffer.push("\n    <li>"),f={},b.buffer.push(k(c._triageMustache.call(a,"server.hostUrl",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push(" - "),f={},h={hash:{},inverse:l.noop,fn:l.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"servers.edit","server",h):m.call(a,"linkTo","servers.edit","server",h),(e||0===e)&&b.buffer.push(e),b.buffer.push(" - <button "),f={},b.buffer.push(k(c.action.call(a,"deleteServer","server",{hash:{},contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b}))),b.buffer.push(">delete</button> </li>\n    "),i}function g(a,b){b.buffer.push("edit")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j="",k=this.escapeExpression,l=this,m=c.helperMissing;return e.buffer.push("<ul>\n    "),i={},h=c.each.call(b,"server","in","controller",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</ul>"),j}),Ember.TEMPLATES["servers/new"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push('<form>\n    <fieldset>\n        <label for="hostUrl">Host Address:\n        '),f={id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(h(c.view.call(b,"Ember.TextField",{hash:{id:"hostUrl",placeholder:"IP Address",valueBinding:"hostUrl"},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('\n        </label>\n        <label for="hostName">Host Username:\n        '),f={id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(h(c.view.call(b,"Ember.TextField",{hash:{id:"hostName",placeholder:"SSH Username",valueBinding:"hostName"},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('\n        </label>\n        <label for="hostPassword">Host Password:\n        '),f={id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(h(c.view.call(b,"Ember.TextField",{hash:{id:"hostPassword",placeholder:"SSH Password",valueBinding:"hostPassword"},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('\n        </label>\n        <input type="submit" name="submit" value="Submit" '),f={},e.buffer.push(h(c.action.call(b,"createServer",{hash:{},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push(" />\n    </fieldset>\n</form>"),g}),Ember.TEMPLATES.settings=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="content-block">\n    <h2>Settings</h2>\n</div>')});