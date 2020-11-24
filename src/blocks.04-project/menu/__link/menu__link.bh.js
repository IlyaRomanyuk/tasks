module.exports = function(bh) {
  bh.match('menu__link', function(ctx) {
    ctx.tag('a').
    attr('href', '#');
  }, true);
};
