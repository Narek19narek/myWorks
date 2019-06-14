//function $(tagName) {
//    return document.createElement(tagName);
//}

HTMLElement.prototype.attr = function (attrName, attrVal) {
    return (this.setAttribute(attrName, attrVal), this);
}

HTMLElement.prototype.text = function (text) {
    return (this.innerText = text, this);
}

HTMLElement.prototype.html = function (html) {
    return (this.innerHTML = html, this);

}

HTMLElement.prototype.append = function () {
    for (let i = 0; i < arguments.length; i++) {
        this.appendChild(arguments[i]);
    }
    return this;
}

HTMLElement.prototype.addClass = function (className) {
    return (this.classList.add(className), this);
}

HTMLElement.prototype.removeClass = function (className) {
    return (this.classList.remove(className), this);
}

HTMLElement.prototype.toggleClass = function (className) {
   return ((this.classList.contains(className)) ?
        this.classList.remove(className) :
        this.classList.add(className), this);
}

HTMLElement.prototype.on = function (event, handler) {
    return (event = `on${event}`, this[event] = handler, this);
}

HTMLElement.prototype.click = function (handler) {
    return (this['on'+click] = handler, this);
}

HTMLElement.prototype.off = function (event) {
    return (event = `on${event}`, this[event] = null, this);
}

HTMLElement.prototype.empty = function () {
   return (this.innerHTML = '', this);
}

HTMLElement.prototype.css = function(propertyName, value) {
    return value ? (this.style[propertyName] = value, this) : (this.style[propertyName]);
}

//HTMLElement.prototype.childrenddddd = function () {
//    return this.children;
//}   

HTMLElement.prototype.hasClass = function (className) {
   return this.classList.contains(className);
}

HTMLElement.prototype.parent = function () {
    return this.parentElement;
}

function $(selector) {
    var elements;
    if ('.' === selector[0]) {
        var className = selector.substring(1, selector.length);
        elements = document.getElementsByClassName(className);
        return elements;
    } else if ('<' === selector[0] && '>' === selector[selector.length - 1]) {
        var tagName = selector.substring(1, selector.length - 1);
        return document.createElement(tagName);
    }
}

