module.exports = function(bh) {
  bh.match('unicalInput__element', function(ctx) {
    ctx.tag('input');
  }, true);
};
