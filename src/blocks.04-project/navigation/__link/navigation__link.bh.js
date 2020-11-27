module.exports = function(bh) {
  bh.match('navigation__link', function(ctx, json) {
    ctx.tag('a').attrs({href: '#'});
  });
};

