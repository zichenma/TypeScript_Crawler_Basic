"use strict";
var Components;
(function (Components) {
    var SubComponents;
    (function (SubComponents) {
        var Test = (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    var Dell;
    (function (Dell) {
        Dell.teacher = {
            name: 'dell'
        };
    })(Dell = Home.Dell || (Home.Dell = {}));
    var Page = (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
