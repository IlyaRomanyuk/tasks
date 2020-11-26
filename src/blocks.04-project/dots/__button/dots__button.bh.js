module.exports = function(bh) {
  bh.match('dots__button', function(ctx) {
    ctx.tag('button');
  }, true);
};

