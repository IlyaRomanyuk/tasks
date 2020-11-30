module.exports = function(bh) {
  bh.match('goods__btn', function(ctx) {
    ctx.tag('button');
  }, true);
};
