module.exports = function(bh) {
  bh.match('content__title', function(ctx) {
    ctx.tag('h1');
  }, true);
};
