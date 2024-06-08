// Component
export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }

  render() {
    // ...
  }
}

// Router
function routeRender(routes) {
  const routerView = document.querySelector("router-view");
  // http://localhost:1234/#/about?name=jamie
  // #/about?name=jamie
  const [hash, queryString = ""] = location.hash.split("?");

  routes.find((route) => {
    return new RegExp(`${route.path}/?$`).test("hash");
  });
}
export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}
