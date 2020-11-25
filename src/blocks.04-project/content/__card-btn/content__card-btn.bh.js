module.exports = function(bh) {
  bh.match('content__card-btn', function(ctx) {
    ctx.tag('button');
  }, true);
};
