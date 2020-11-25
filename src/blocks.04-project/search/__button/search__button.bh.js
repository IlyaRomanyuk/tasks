module.exports = function(bh) {
  bh.match('search__button', function(ctx) {
    ctx.tag('button');
  }, true);
};
