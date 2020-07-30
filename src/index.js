import Input from "./components/input";
import FullCalendar from "./components/full-calendar";
import Card from "./components/card";

const components = [
    Input,
    FullCalendar,
    Card,
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
    Input,
    Card,
    FullCalendar,
};
