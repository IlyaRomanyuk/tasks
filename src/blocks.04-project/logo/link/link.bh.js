module.exports = function(bh) {
  bh.match('link', function(ctx) {
    ctx.tag('a');
    ctx.content('logo');
  }, true);
};


