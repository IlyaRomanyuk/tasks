module.exports = function(bh) {
  bh.match('navigation__nav', function(ctx, json) {
    ctx.tag('nav');
  });
};

