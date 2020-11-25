module.exports = function(bh) {
  bh.match('transparent', function(ctx) {
    ctx.tag('fieldset');
  }, true);
};
