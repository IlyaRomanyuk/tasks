module.exports = function(bh) {
  bh.match('logo__link', function(ctx) {
    ctx.tag('a').
    content('logo').
    attr('href', '#');
  }, true);
};


