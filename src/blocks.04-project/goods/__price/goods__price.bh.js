module.exports = function(bh) {
  bh.match('goods__price', function(ctx) {
    ctx.tag('p');
  }, true);
};
