/**
 * Make an implementation of HTMLElement and HTMLSelectElement
 * Well, can't give enough description
 *
 * Just study the solution below
 */

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items) {
  this.items = items || [];
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items = this.items.filter((i) => item !== i);
  };
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;
// Object.assign(HtmlSelectElement.prototype, new HtmlElement());

// A better implementation
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement();
console.log(e);
const s = new HtmlSelectElement();
console.log(s);
