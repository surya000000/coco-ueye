import Input from "./components/input";

const components = [
    Input
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const cocouiVersion = { version: process.env.VERSION };

export {
    Input
};
