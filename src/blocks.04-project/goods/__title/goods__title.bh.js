module.exports = function(bh) {
  bh.match('goods__title', function(ctx) {
    ctx.tag('h4');
  }, true);
};
