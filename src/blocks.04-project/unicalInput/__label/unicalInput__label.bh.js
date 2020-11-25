module.exports = function(bh) {
  bh.match('unicalInput__label', function(ctx) {
    ctx.tag('label');
  }, true);
};
