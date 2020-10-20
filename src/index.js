import BrushTimeline from './timeline';

/* istanbul ignore next */
BrushTimeline.install = function (Vue) {
  Vue.component(BrushTimeline.name, BrushTimeline);
};

export default BrushTimeline;
