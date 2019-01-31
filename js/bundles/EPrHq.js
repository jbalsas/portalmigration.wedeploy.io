var pageComponent=webpackJsonppageComponent([3],{169:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),s=o(l),d=n(1),c=o(d);n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11);var p=n(170),u=o(p),m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);c.default.register(m,u.default),t.default=m},170:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.EPrHq=void 0;var l,s=n(0),d=o(s),c=n(1),p=o(c);goog.loadModule(function(e){function t(e,t,o){var l=function(){a("article",null,null,"id","before-after"),a("h3"),s("How does it look like now (7.0)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_view_types_old.png"),r("img"),r("p"),a("h3"),s("Changes for Lexicon 2.0 (7.1)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_view_types_new.png"),r("img"),r("p"),r("article"),a("article",null,null,"id","management-toolbar-with-creation-menu"),a("h4"),s("How to apply it?"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),s("_"),r("th"),a("th"),s("Action"),r("th"),a("th"),s("Mandatory"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("a",null,null,"href","#step-2-1"),s("1"),r("a"),r("td"),a("td"),s("Locate the code in your application"),r("td"),a("td"),s("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-2-2"),s("2"),r("a"),r("td"),a("td"),s("Use "),a("code"),s("clay:management-toolbar"),r("code"),s(" instead of the old "),a("code"),s("liferay-frontend:management-bar"),r("code"),s(" tag"),r("td"),a("td"),s("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-3"),s("2"),r("a"),r("td"),a("td"),s("Move the definitions into a Display Context"),r("td"),a("td"),s("✘"),r("td"),r("tr"),r("tbody"),r("table"),a("h3"),s("[1] Locate the code in your application "),i("a",null,null,"id","step-1-1"),r("h3"),a("p"),s("Locate the code responsible for rendering the "),a("strong"),s("management-bar"),r("strong"),s(" in your application. It should resemble something like the following snippet found in "),a("a",null,null,"href","https://github.com/liferay/liferay-portal/blob/fe9dfcc0275660a0fe9aafb50ae6b169236f67cf/modules/apps/web-experience/asset/asset-tags-admin-web/src/main/resources/META-INF/resources/view.jsp#L28"),s("asset-tags-admin-web/view.jsp"),r("a"),s(":"),r("p"),d({code:'<liferay-frontend:management-bar\n    disabled="<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>"\n    includeCheckBox="<%= true %>"\n    searchContainerId="assetTags"\n>\n    ...\n\n    <liferay-frontend:management-bar-buttons>\n        <liferay-portlet:actionURL name="changeDisplayStyle" varImpl="changeDisplayStyleURL">\n            <portlet:param name="redirect" value="<%= currentURL %>" />\n        </liferay-portlet:actionURL>\n\n        <liferay-frontend:management-bar-display-buttons\n            displayViews=\'<%= new String[] {"icon", "descriptive", "list"} %>\'\n            portletURL="<%= changeDisplayStyleURL %>"\n            selectedDisplayStyle="<%= assetTagsDisplayContext.getDisplayStyle() %>"\n        />\n\n        ...\n\n    </liferay-frontend:management-bar-buttons>\n\n    ...\n\n</liferay-frontend:management-bar>',mode:"text/html"},null,o),a("h3"),s("[2] Use "),a("code"),s("clay:management-toolbar"),r("code"),s(" instead of the old "),a("code"),s("liferay-frontend:management-bar"),r("code"),s(" tag "),i("a",null,null,"id","step-1-2"),r("h3"),a("p"),s("Start by adding the following imports to the imports section of your "),a("code"),s("init.jsp"),r("code"),s(" file:"),r("p"),d({code:'// Import the clay tld file to be able to use the new tag\n<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>\n\n// Import the ViewTypeItemList utility class to create the action items model\n<%@ page import="com.liferay.frontend.taglib.clay.servlet.taglib.util.JSPViewTypeItemList" %>',mode:"text/html"},null,o),a("p"),s("Don't forget to add the dependencies with to the "),a("code"),s("frontend-taglib-clay"),r("code"),s(" and "),a("code"),s("fronteng.taglib.soy"),r("code"),s(" module in your "),a("code"),s("build.gradle"),r("code"),s(" file:"),r("p"),d({code:'compileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-clay")\ncompileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-soy")',mode:"text/html"},null,o),a("h4"),s("Implement the new taglib"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),s("Parameter"),r("th"),a("th"),s("Description"),r("th"),a("th"),s("Default"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("code"),s("itemsTotal"),r("code"),r("td"),a("td"),s("Is the total number of items that appears in the dataset to reflect it in the results bar and in the active state."),r("td"),a("td"),s("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),s("namespace"),r("code"),r("td"),a("td"),s("If passed the params "),a("code"),s("infoPanelId"),r("code"),s(", "),a("code"),s("searchFormName"),r("code"),s(", "),a("code"),s("searchInputName"),r("code"),s(" and "),a("code"),s("searchContainerId"),r("code"),s(" will be automatically namespaced."),r("td"),a("td"),s("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),s("searchContainerId");r("code"),r("td"),a("td"),s("The id of the searchContainer the management toolbar will be connected to."),r("td"),a("td"),s("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),s("selectable"),r("code"),r("td"),a("td"),s("To show or not the checkbox to interact with the dataset. Previous "),a("code"),s("includeCheckBox"),r("code"),s("."),r("td"),a("td"),a("code"),s("true"),r("code"),r("td"),r("tr"),a("tr"),a("td"),a("code"),s("viewTypeItems"),r("code"),r("td"),a("td"),s("Is the list of dropdownItems to show in the views list."),r("td"),a("td"),s("_"),r("td"),r("tr"),r("tbody"),r("table"),d({code:'<clay:management-toolbar\n    disabled=<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>\n    namespace="<%= renderResponse.getNamespace() %>"\n    searchContainerId="assetTags"\n    selectable="<%= true %>"\n    viewTypeItems="<%=\n        new JSPViewTypeItemList(pageContext, baseURL, selectedType) {\n            {\n                addCardViewTypeItem();\n                addListViewTypeItem();\n                addTableViewTypeItem();\n            }\n        }\n    %>"\n/>',mode:"text/html"},null,o),a("h3"),s("[3] Move the definitions into a Display Context "),i("a",null,null,"id","step-3"),r("h3"),a("div",null,null,"class","alert alert-info"),s("This step is "),a("em"),s("optional"),r("em"),s(" but "),a("strong"),s("recommended"),r("strong"),r("div"),a("p"),s("If your application already supports it (or even if it doesn't), consider moving the "),a("code"),s("Java"),r("code"),s(" portion that generates the navigation items model into a "),a("code"),s("*DisplayContext"),r("code"),s(" pattern to keep your jsps cleaner and server-free"),r("p"),d({code:'<clay:management-toolbar\n    disabled=<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>\n    namespace="<%= renderResponse.getNamespace() %>"\n    searchContainerId="assetTags"\n    selectable="<%= true %>"\n    viewTypeItems="<%= assetTagsDisplayContext.getViewTypeItems() %>"\n/>',mode:"text/html"},null,o),r("article"),a("input",null,null,"type","hidden","value",e.page.title),r("input"),a("input",null,null,"type","hidden","value",e.site.title),r("input")};c(n.$$assignDefaults({content:l},e),null,o)}goog.module("EPrHq.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),a=o.elementOpen,r=o.elementClose,i=o.elementVoid,s=(o.elementOpenStart,o.elementOpenEnd,o.text),d=(o.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),c=p.default.getTemplate("lexiconMigrationGuide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="EPrHq.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var u=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(d.default);p.default.register(u,l),t.EPrHq=u,t.templates=l,t.default=l}},[169]);