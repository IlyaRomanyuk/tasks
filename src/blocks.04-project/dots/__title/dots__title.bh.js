module.exports = function(bh) {
  bh.match('dots__title', function(ctx) {
    ctx.tag('p');
  }, true);
};
