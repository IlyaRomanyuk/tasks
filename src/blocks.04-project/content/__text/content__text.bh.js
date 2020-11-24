module.exports = function(bh) {
  bh.match('content__text', function(ctx) {
    ctx.tag('p');
  }, true);
};
