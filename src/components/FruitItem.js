import { Component } from "../core/Jamie";

export default class FruitItem extends Component {
  constructor(payLoad) {
    super({
      tagName: "li",
      props: payLoad.props,
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <span>${this.props.name}</span>
      <span>${this.props.price}</span>
    `;

    this.el.addEventListener("click", () => {
      console.log(this.props.name, this.props.price);
    });
  }
}
