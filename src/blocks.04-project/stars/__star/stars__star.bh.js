module.exports = function(bh) {
  bh.match('stars__star', function(ctx) {
    ctx.tag('i');
  }, true);
};
