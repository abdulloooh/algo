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

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items = this.items.filter((i) => item !== i);
  };
  this.render = function (sources) {
    if (sources) this.items = sources;
    return `<select>
        ${this.items.map((item) => `<option>${item}</option>`).join("\n")}
    </select>`;
  };
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;
// Object.assign(HtmlSelectElement.prototype, new HtmlElement());

// A better implementation
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// const e = new HtmlElement();
// console.log(e);
// const s = new HtmlSelectElement();
// console.log(s);

function HtmlImageElement(src) {
  if (src) this.src = src;

  this.render = function (src) {
    if (src) this.src = src;
    if (!this.src) return "<img></img>";
    return `<img src="${this.src}"></img>`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://"),
];

for (let element of elements) console.log(element.render());
//////POLYMORPHISM
