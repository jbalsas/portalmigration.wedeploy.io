var pageComponent=webpackJsonppageComponent([4],{161:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),d=n(i),s=o(1),c=n(s);o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11);var p=o(162),u=n(p),m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(d.default);c.default.register(m,u.default),t.default=m},162:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.BRbaB=void 0;var i,d=o(0),s=n(d),c=o(1),p=n(c);goog.loadModule(function(e){function t(e,t,n){var i=function(){a("article",null,null,"id","before-after"),a("h3"),d("How does it look like now (7.0)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_search_old.png"),r("img"),r("p"),a("h3"),d("Changes for Lexicon 2.0 (7.1)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_search_new.png"),r("img"),r("p"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_search_results_new.png"),r("img"),r("p"),a("table"),a("thead"),a("tr"),a("th"),d("Change"),r("th"),a("th"),d("Reason"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),d("① Fills all the bar if only search is present"),r("td"),a("td"),d("Lexicon wants the main management toolbar section to be the search form."),r("td"),r("tr"),r("tbody"),r("table"),r("article"),a("article",null,null,"id","management-toolbar-with-search"),a("h4"),d("How to apply it?"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),d("_"),r("th"),a("th"),d("Action"),r("th"),a("th"),d("Mandatory"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("a",null,null,"href","#step-1"),d("1"),r("a"),r("td"),a("td"),d("Locate the code in your application"),r("td"),a("td"),d("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-2"),d("2"),r("a"),r("td"),a("td"),d("Use "),a("code"),d("clay:management-toolbar"),r("code"),d(" instead of the old "),a("code"),d("liferay-frontend:management-bar"),r("code"),d(" tag"),r("td"),a("td"),d("✔"),r("td"),r("tr"),r("tbody"),r("table"),a("h3"),d("[1] Locate the code in your application "),l("a",null,null,"id","step-1"),r("h3"),a("p"),d("Locate the code responsible for rendering the "),a("strong"),d("management-bar"),r("strong"),d(" in your application. It should resemble something like the following snippet found in "),a("a",null,null,"href","https://github.com/liferay/liferay-portal/blob/fe9dfcc0275660a0fe9aafb50ae6b169236f67cf/modules/apps/collaboration/wiki/wiki-web/src/main/resources/META-INF/resources/item/selector/wiki_pages.jsp#L67"),d("wiki-web/item/selector/wiki_pages.jsp"),r("a"),d(":"),r("p"),s({code:"<liferay-frontend:management-bar>\n    <liferay-frontend:management-bar-filters>\n        <li>\n            <liferay-item-selector:search />\n        </li>\n    </liferay-frontend:management-bar-filters>\n</liferay-frontend:management-bar>",mode:"text/html"},null,n),a("h3"),d("[2] Use "),a("code"),d("clay:management-toolbar"),r("code"),d(" instead of the old "),a("code"),d("liferay-frontend:management-bar"),r("code"),d(" tag "),l("a",null,null,"id","step-2"),r("h3"),a("p"),d("Start by adding the following imports to the imports section of your "),a("code"),d("init.jsp"),r("code"),d(" file:"),r("p"),s({code:'// Import the clay tld file to be able to use the new tag\n<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>',mode:"text/html"},null,n),a("p"),d("Don't forget to add the dependencies with to the "),a("code"),d("frontend-taglib-clay"),r("code"),d(" and "),a("code"),d("fronteng.taglib.soy"),r("code"),d(" module in your "),a("code"),d("build.gradle"),r("code"),d(" file:"),r("p"),s({code:'compileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-clay")\ncompileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-soy")',mode:"text/html"},null,n),a("h4"),d("Implement the new taglib"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),d("Parameter"),r("th"),a("th"),d("Description"),r("th"),a("th"),d("Default"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("code"),d("clearResultsURL"),r("code"),r("td"),a("td"),d("Is the URL to reset the search."),r("td"),a("td"),d("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("disabled"),r("code"),r("td"),a("td"),d("To disable or not the management toolbar. Usually should be disabled when there're no results"),r("td"),a("td"),d("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("namespace"),r("code"),r("td"),a("td");d("If passed the params "),a("code"),d("infoPanelId"),r("code"),d(", "),a("code"),d("searchFormName"),r("code"),d(", "),a("code"),d("searchInputName"),r("code"),d(" and "),a("code"),d("searchContainerId"),r("code"),d(" will be automatically namespaced."),r("td"),a("td"),d("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("searchActionURL"),r("code"),r("td"),a("td"),d("Is the action URL to send the search form."),r("td"),a("td"),d("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("searchFormName"),r("code"),r("td"),a("td"),d("The name of the form."),r("td"),a("td"),d("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("searchInputName"),r("code"),r("td"),a("td"),d("The name of the search input."),r("td"),a("td"),a("code"),d("DisplayTerms.KEYWORDS"),r("code"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("searchValue"),r("code"),r("td"),a("td"),d("The value of the search input."),r("td"),a("td"),a("code"),d("ParamUtil.getString(request, searchInputName)"),r("code"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("selectable"),r("code"),r("td"),a("td"),d("To show or not the checkbox to interact with the dataset. Previous "),a("code"),d("includeCheckBox"),r("code"),d("."),r("td"),a("td"),a("code"),d("true"),r("code"),r("td"),r("tr"),a("tr"),a("td"),a("code"),d("totalItems"),r("code"),r("td"),a("td"),d("Is the total number of items that appears in the dataset to reflect it in the results bar and in the active state."),r("td"),a("td"),d("_"),r("td"),r("tr"),r("tbody"),r("table"),s({code:'<clay:management-toolbar\n    clearResultsURL="<%= searchURL %>"\n    disabled="<%= isDisabled %>"\n    namespace="<%= renderResponse.getNamespace() %>"\n    searchActionURL="<%= searchURL %>"\n    searchFormName="fm"\n    searchInputName="<%= DisplayTerms.KEYWORDS %>"\n    searchValue="<%= ParamUtil.getString(request, searchInputName) %>"\n    selectable="<%= false %>"\n    totalItems="<%= totalItems %>"\n/>',mode:"text/html"},null,n),a("h3"),d("[3] Move the definitions into a Display Context "),l("a",null,null,"id","step-3"),r("h3"),a("div",null,null,"class","alert alert-info"),d("This step is "),a("em"),d("optional"),r("em"),d(" but "),a("strong"),d("recommended"),r("strong"),r("div"),a("p"),d("If your application already supports it (or even if it doesn't), consider moving the "),a("code"),d("Java"),r("code"),d(" portion that generates the navigation items model into a "),a("code"),d("*DisplayContext"),r("code"),d(" pattern to keep your jsps cleaner and server-free"),r("p"),s({code:'<clay:management-toolbar\n    clearResultsURL="<%= myAppDisplayContext.getSearchURL() %>"\n    disabled=<%= myAppDisplayContext.isDisabled() %>\n    namespace="<%= renderResponse.getNamespace() %>"\n    searchActionURL="<%= myAppDisplayContext.getSearchURL() %>"\n    searchFormName="<%= myAppDisplayContext.getFormName %>"\n    searchInputName="<%= myAppDisplayContext.getSearchInputName %>"\n    searchValue="<%= myAppDisplayContext.getSearchValue %>"\n    selectable="<%= myAppDisplayContext.isSelectable() %>"\n    totalItems="<%= myAppDisplayContext.getTotalItems() %>"\n/>',mode:"text/html"},null,n),r("article"),a("input",null,null,"type","hidden","value",e.page.title),r("input"),a("input",null,null,"type","hidden","value",e.site.title),r("input")};c(o.$$assignDefaults({content:i},e),null,n)}goog.module("BRbaB.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),a=n.elementOpen,r=n.elementClose,l=n.elementVoid,d=(n.elementOpenStart,n.elementOpenEnd,n.text),s=(n.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),c=p.default.getTemplate("lexiconMigrationGuide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="BRbaB.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var u=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(s.default);p.default.register(u,i),t.BRbaB=u,t.templates=i,t.default=i}},[161]);