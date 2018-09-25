var pageComponent=webpackJsonppageComponent([7],{150:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=n(0),i=o(d),s=n(1),c=o(s);n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10);var u=n(151),p=o(u),m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(i.default);c.default.register(m,p.default),t.default=m},151:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.dmGCI=void 0;var d,i=n(0),s=o(i),c=n(1),u=o(c);goog.loadModule(function(e){function t(e,t,o){var d=function(){a("article",null,null,"id","before-after"),a("h3"),i("How does it look like now (7.0)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_creation_menu_old.png"),r("img"),r("p"),a("h3"),i("Changes for Lexicon 2.0 (7.1)"),r("h3"),a("p"),a("img",null,null,"class","img img-thumbnail","src","/images/lexiconMigration/management_toolbar_creation_menu_new.png"),r("img"),r("p"),a("table"),a("thead"),a("tr"),a("th"),i("Change"),r("th"),a("th"),i("Reason"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),i("① Add Menu is now part of the Management Toolbar"),r("td"),a("td"),i("See "),a("a",null,null,"href","../add_menu.html"),i("Add Menu"),r("a"),i("."),r("td"),r("tr"),r("tbody"),r("table"),r("article"),a("article",null,null,"id","management-toolbar-with-creation-menu"),a("h4"),i("How to apply it?"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),i("_"),r("th"),a("th"),i("Action"),r("th"),a("th"),i("Mandatory"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("a",null,null,"href","#step-1"),i("1"),r("a"),r("td"),a("td"),i("Locate the code in your application"),r("td"),a("td"),i("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-2"),i("2"),r("a"),r("td"),a("td"),i("Use "),a("code"),i("clay:management-toolbar"),r("code"),i(" instead of the old "),a("code"),i("liferay-frontend:management-bar"),r("code"),i(" tag"),r("td"),a("td"),i("✔"),r("td"),r("tr"),a("tr"),a("td"),a("a",null,null,"href","#step-3"),i("3"),r("a"),r("td"),a("td"),i("Move the creation menu definition into a Display Context"),r("td"),a("td"),i("✘"),r("td"),r("tr"),r("tbody"),r("table"),a("h3"),i("[1] Locate the code in your application "),l("a",null,null,"id","step-1"),r("h3"),a("p"),i("Locate the code responsible for rendering the "),a("strong"),i("management-bar"),r("strong"),i(" in your application. It should resemble something like the following snippet found in "),a("a",null,null,"href","https://github.com/liferay/liferay-portal/blob/fe9dfcc0275660a0fe9aafb50ae6b169236f67cf/modules/apps/web-experience/asset/asset-tags-admin-web/src/main/resources/META-INF/resources/view.jsp#L28"),i("asset-tags-admin-web/view.jsp"),r("a"),i(":"),r("p"),s({code:'<liferay-frontend:management-bar\n    disabled="<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>"\n    includeCheckBox="<%= true %>"\n    searchContainerId="assetTags"\n>\n    ...\n\n    <liferay-frontend:management-bar-buttons>\n        ...\n\n        <c:if test="<%= assetTagsDisplayContext.isShowAddButton() %>">\n            <portlet:renderURL var="editTagURL">\n                <portlet:param name="mvcPath" value="/edit_tag.jsp" />\n            </portlet:renderURL>\n\n            <liferay-frontend:add-menu\n                inline="<%= true %>"\n            >\n                <liferay-frontend:add-menu-item\n                    title=\'<%= LanguageUtil.get(request, "add-tag") %>\'\n                    url="<%= editTagURL.toString() %>"\n                />\n            </liferay-frontend:add-menu>\n        </c:if>\n    </liferay-frontend:management-bar-buttons>\n...\n\n</liferay-frontend:management-bar>',mode:"text/html"},null,o),a("h3"),i("[2] Use "),a("code"),i("clay:management-toolbar"),r("code"),i(" instead of the old "),a("code"),i("liferay-frontend:management-bar"),r("code"),i(" tag "),l("a",null,null,"id","step-2"),r("h3"),a("p"),i("Start by adding the following imports to the imports section of your "),a("code"),i("init.jsp"),r("code"),i(" file:"),r("p"),s({code:'// Import the clay tld file to be able to use the new tag\n<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>\n\n// Import the CreationMenu utility class to create the creation menu model\n<%@ page import="com.liferay.frontend.taglib.clay.servlet.taglib.util.JSPCreationMenu" %>',mode:"text/html"},null,o),a("p"),i("Don't forget to add the dependencies with to the "),a("code"),i("frontend-taglib-clay"),r("code"),i(" and "),a("code"),i("fronteng.taglib.soy"),r("code"),i(" module in your "),a("code"),i("build.gradle"),r("code"),i(" file:"),r("p"),s({code:'compileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-clay")\ncompileOnly project(":apps:foundation:frontend-taglib:frontend-taglib-soy")',mode:"text/html"},null,o),a("h4"),i("Implement the new taglib"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),i("Parameter"),r("th"),a("th"),i("Description"),r("th"),a("th"),i("Default"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),a("code"),i("creationMenu"),r("code"),r("td"),a("td"),i("Is the list of dropdownItems to show in the creation menu. If only one item is present add button will be a link instead a dropdown."),r("td"),a("td"),i("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("disabled"),r("code"),r("td"),a("td");i("To disable or not the management toolbar. Usually should be disabled when there're no results"),r("td"),a("td"),i("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("itemsTotal"),r("code"),r("td"),a("td"),i("Is the total number of items that appears in the dataset to reflect it in the results bar and in the active state."),r("td"),a("td"),i("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("namespace"),r("code"),r("td"),a("td"),i("If passed the params "),a("code"),i("infoPanelId"),r("code"),i(", "),a("code"),i("searchFormName"),r("code"),i(", "),a("code"),i("searchInputName"),r("code"),i(" and "),a("code"),i("searchContainerId"),r("code"),i(" will be automatically namespaced."),r("td"),a("td"),i("_"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("selectable"),r("code"),r("td"),a("td"),i("To show or not the checkbox to interact with the dataset. Previous "),a("code"),i("includeCheckBox"),r("code"),i("."),r("td"),a("td"),a("code"),i("true"),r("code"),r("td"),r("tr"),a("tr"),a("td"),a("code"),i("showCreationMenu"),r("code"),r("td"),a("td"),i("To show or not the add content button."),r("td"),a("td"),i("If "),a("code"),i("creationMenu"),r("code"),i(" != null "),a("code"),i("true"),r("code"),i(" else "),a("code"),i("false"),r("code"),i("."),r("td"),r("tr"),r("tbody"),r("table"),s({code:'<clay:management-toolbar\n    creationMenu="<%= \n        new JSPCreationMenu(pageContext) {\n            {\n                addPrimaryDropdownItem(\n                    dropdownItem -> {\n                        dropdownItem.setHref(\n                            _renderResponse.createRenderURL(), "mvcPath",\n                            "/edit_tag.jsp");\n                        dropdownItem.setLabel("add-tag");\n                    });\n            }\n        }\n    %>"\n    disabled="<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>"\n    itemsTotal="<%= assetTagsDisplayContext.getItemsTotal() %>"\n    namespace="<%= renderResponse.getNamespace() %>"\n    selectable="<%= false %>"\n    showCreationMenu="<%= assetTagsDisplayContext.isShowAddButton() %>"\n/>',mode:"text/html"},null,o),a("h3"),i("[3] Move the definitions into a Display Context "),l("a",null,null,"id","step-3"),r("h3"),a("div",null,null,"class","alert alert-info"),i("This step is "),a("em"),i("optional"),r("em"),i(" but "),a("strong"),i("recommended"),r("strong"),r("div"),a("p"),i("If your application already supports it (or even if it doesn't), consider moving the "),a("code"),i("Java"),r("code"),i(" portion that generates the navigation items model into a "),a("code"),i("*DisplayContext"),r("code"),i(" pattern to keep your jsps cleaner and server-free"),r("p"),s({code:'<clay:management-toolbar\n    creationMenu="<%= assetTagsDisplayContext.getCreationMenu() %>"\n    disabled="<%= assetTagsDisplayContext.isDisabledTagsManagementBar() %>\n    itemsTotal="<%= assetTagsDisplayContext.getItemsTotal() %>"\n    namespace="<%= renderResponse.getNamespace() %>"\n    selectable="<%= true %>"\n    showCreationMenu="<%= assetTagsDisplayContext.isShowAddButton() %>"\n/>',mode:"text/html"},null,o),r("article"),a("input",null,null,"type","hidden","value",e.page.title),r("input"),a("input",null,null,"type","hidden","value",e.site.title),r("input")};c(n.$$assignDefaults({content:d},e),null,o)}goog.module("dmGCI.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),a=o.elementOpen,r=o.elementClose,l=o.elementVoid,i=(o.elementOpenStart,o.elementOpenEnd,o.text),s=(o.attr,u.default.getTemplate("ElectricCode.incrementaldom","render")),c=u.default.getTemplate("lexiconMigrationGuide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="dmGCI.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=d=e,e});var p=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),t}(s.default);u.default.register(p,d),t.dmGCI=p,t.templates=d,t.default=d}},[150]);