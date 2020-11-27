module.exports = function(bh) {
  bh.match('navigation__list', function(ctx, json) {
    ctx.tag('ul');
  });
};

