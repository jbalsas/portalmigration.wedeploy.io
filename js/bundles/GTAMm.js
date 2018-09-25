var pageComponent=webpackJsonppageComponent([8],{148:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),s=n(i),u=o(1),c=n(u);o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10);var d=o(149),h=n(d),p=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s.default);c.default.register(p,h.default),e.default=p},149:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.GTAMm=void 0;var i,s=o(0),u=n(s),c=o(1),d=n(c);goog.loadModule(function(t){function e(t,e,n){var i=function(){r("article",null,null,"id","before-after"),r("h3"),s("How does it look like now (7.1)"),a("h3"),r("p"),r("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_contextual_actions_old.png"),a("img"),a("p"),r("h3"),s("Changes for 7.2"),a("h3"),r("p"),r("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_contextual_actions_new.png"),a("img"),a("p"),r("table"),r("thead"),r("tr"),r("th"),s("Change"),a("th"),r("th"),s("Reason"),a("th"),a("tr"),a("thead"),r("tbody"),r("tr"),r("td"),s("① Quick Actions state depends on the current selection"),a("td"),r("td"),s("When a user selects different items, it's preferred to show only the globally allowed operations"),a("td"),a("tr"),r("tr"),r("td"),s("① Actions state depends on the current selection"),a("td"),r("td"),s("When a user selects different items, it's preferred to show only the globally allowed operations"),a("td"),a("tr"),a("tbody"),a("table"),a("article"),r("article",null,null,"id","management-toolbar-selectable-with-contextual-actions"),r("h4"),s("How to apply it?"),a("h4"),r("table"),r("thead"),r("tr"),r("th"),s("_"),a("th"),r("th"),s("Action"),a("th"),r("th"),s("Mandatory"),a("th"),a("tr"),a("thead"),r("tbody"),r("tr"),r("td"),r("a",null,null,"href","#step-1"),s("1"),a("a"),a("td"),r("td"),s("Locate the code in your application"),a("td"),r("td"),s("✔"),a("td"),a("tr"),r("tr"),r("td"),r("a",null,null,"href","#step-2"),s("2"),a("a"),a("td"),r("td"),s('Add the allowed "actions" list to the row data'),a("td"),r("td"),s("✔"),a("td"),a("tr"),a("tbody"),a("table"),r("h3"),s("[1] Locate the code in your application "),l("a",null,null,"id","step-1"),a("h3"),r("p"),s("Locate the code responsible for rendering the "),r("strong"),s("search-container-row"),a("strong"),s(" in your application. It should resemble something like the following snippet found in "),r("a",null,null,"href","https://github.com/liferay/liferay-portal/blob/master/modules/apps/blogs/blogs-web/src/main/resources/META-INF/resources/blogs_admin/view_entries.jsp#L93-L98"),s("blogs_admin/view_entries.jsp"),a("a"),s(":"),a("p"),u({code:'<liferay-ui:search-container\n    id="blogEntries"\n    rowChecker="<%= new EmptyOnClickRowChecker(renderResponse) %>"\n    searchContainer="<%= entriesSearchContainer %>"\n>\n    <liferay-ui:search-container-row\n        className="com.liferay.blogs.model.BlogsEntry"\n        escapedModel="<%= true %>"\n        keyProperty="entryId"\n        modelVar="entry"\n    >\n    ...\n    </liferay-ui:search-container-row>\n\n    <liferay-ui:search-iterator\n        displayStyle="<%= displayStyle %>"\n        markupView="lexicon"\n    />\n</liferay-ui:search-container>',mode:"text/html"},null,n),r("h3"),s('[2] Add the allowed "actions" list to the row data tag '),l("a",null,null,"id","step-2"),a("h3"),r("p"),s('Make the necessary checks to retrieve the row entry available actions and set an "actions" entry in the row data with the comma-separated list of actions for that row'),a("p"),u({code:'<%\nMap<String, Object> rowData = new HashMap<>();\n\n/**\n * Set a comma-separated list of action ids (see your actionDropdownItems)\n * rowData.put("actions", "checkin,download,move");\n */\n\nrowData.put("actions", myDisplayContext.getAvailableActions(entry)));\n\nrow.setData(rowData);\n%>',mode:"text/html"},null,n),r("p"),s("Keep in mind that the actions should match the "),r("code"),s("id"),a("code"),s("s for the actions you are passing to the toolbar as "),r("code"),s("actionDropdownItems"),a("code"),a("p"),a("article"),r("article",null,null,"id","who-has-it-ready"),r("h3"),s("Who has done it already?"),a("h3"),r("table"),r("thead"),r("tr"),r("th"),s("LPS"),a("th"),r("th"),s("Pull Request"),a("th"),r("th"),s("Master"),a("th"),a("tr"),a("thead"),r("tbody"),r("tr"),r("td"),r("a",null,null,"href","https://issues.liferay.com/browse/LPS-85197"),s("LPS-85197"),a("a"),a("td"),r("td"),r("a",null,null,"href","https://github.com/brianchandotcom/liferay-portal/pull/63070"),s("https://github.com/brianchandotcom/liferay-portal/pull/63070"),a("a"),a("td"),r("td"),s("✔"),a("td"),a("tr"),r("tr"),r("td"),r("a",null,null,"href","https://issues.liferay.com/browse/LPS-85198"),s("LPS-85198"),a("a"),a("td"),r("td"),r("a",null,null,"href","https://github.com/brianchandotcom/liferay-portal/pull/63231"),s("https://github.com/brianchandotcom/liferay-portal/pull/63231"),a("a"),a("td"),r("td"),s("✔"),a("td"),a("tr"),r("tr"),r("td"),r("a",null,null,"href","https://issues.liferay.com/browse/LPS-85199"),s("LPS-85199"),a("a"),a("td"),r("td"),r("a",null,null,"href","https://github.com/brianchandotcom/liferay-portal/pull/63214"),s("https://github.com/brianchandotcom/liferay-portal/pull/63214"),a("a"),a("td"),r("td"),s("✔"),a("td"),a("tr"),r("tr"),r("td"),r("a",null,null,"href","https://issues.liferay.com/browse/LPS-85200"),s("LPS-85200"),a("a"),a("td"),r("td"),r("a",null,null,"href","https://github.com/brianchandotcom/liferay-portal/pull/63234");s("https://github.com/brianchandotcom/liferay-portal/pull/63234"),a("a"),a("td"),r("td"),s("✔"),a("td"),a("tr"),r("tr"),r("td"),r("a",null,null,"href","https://issues.liferay.com/browse/LPS-85201"),s("LPS-85201"),a("a"),a("td"),r("td"),r("a",null,null,"href","https://github.com/brianchandotcom/liferay-portal/pull/63249"),s("https://github.com/brianchandotcom/liferay-portal/pull/63249"),a("a"),a("td"),r("td"),s("✔"),a("td"),a("tr"),r("tr"),r("td"),r("a",null,null,"href","https://issues.liferay.com/browse/LPS-85202"),s("LPS-85202"),a("a"),a("td"),r("td"),r("a",null,null,"href","https://github.com/brianchandotcom/liferay-portal/pull/63253"),s("https://github.com/brianchandotcom/liferay-portal/pull/63253"),a("a"),a("td"),r("td"),s("✔"),a("td"),a("tr"),a("tbody"),a("table"),a("article"),r("input",null,null,"type","hidden","value",t.page.title),a("input"),r("input",null,null,"type","hidden","value",t.site.title),a("input")};c(o.$$assignDefaults({content:i},t),null,n)}goog.module("GTAMm.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),r=n.elementOpen,a=n.elementClose,l=n.elementVoid,s=(n.elementOpenStart,n.elementOpenEnd,n.text),u=(n.attr,d.default.getTemplate("ElectricCode.incrementaldom","render")),c=d.default.getTemplate("lexiconMigrationGuide.incrementaldom","render");return t.render=e,goog.DEBUG&&(e.soyTemplateName="GTAMm.render"),t.render.params=["page","site"],t.render.types={page:"?",site:"?"},t.templates=i=t,t});var h=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(u.default);d.default.register(h,i),e.GTAMm=h,e.templates=i,e.default=i}},[148]);