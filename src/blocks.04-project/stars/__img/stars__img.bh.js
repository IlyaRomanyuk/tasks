module.exports = function(bh) {
  bh.match('stars__img', function(ctx) {
    ctx.tag('img');
  }, true);
};
