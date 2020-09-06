const render = (virtualNode) => {
  const $el = document.createElement(virtualNode.tagName);
  for (const [k, v] of Object.entries(virtualNode.attrs)) {
    $el.setAttribute(k, v);
  }
  //   e.g. <div id="app"><img></div>
  for (const child of virtualNode.children) {
    $el.appendChild(render(child));
  }
  //   console.log("In render.js ---> $el: ", $el);
  return $el;
};

export default render;
