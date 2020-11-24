module.exports = function(bh) {
  bh.match('logo-link', function(ctx, json) {
    ctx.tag('a'),
  });
};

