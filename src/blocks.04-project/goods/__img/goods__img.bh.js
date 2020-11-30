module.exports = function(bh) {
  bh.match('goods__img', function(ctx) {
    ctx.tag('img');
  }, true);
};
