import BrushTimeline from './timeline';

const install = function (Vue) {
  Vue.component(BrushTimeline.name, BrushTimeline);
};

BrushTimeline.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default BrushTimeline;
