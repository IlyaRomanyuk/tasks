module.exports = function(bh) {
  bh.match('filter__title', function(ctx) {
    ctx.tag('h3');
  }, true);
};
