module.exports = function(bh) {
  bh.match('transparent__title', function(ctx) {
    ctx.tag('legend');
  }, true);
};
