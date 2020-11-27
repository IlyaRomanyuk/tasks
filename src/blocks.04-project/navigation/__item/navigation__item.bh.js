module.exports = function(bh) {
  bh.match('navigation__item', function(ctx, json) {
    ctx.tag('li');
  });
};

