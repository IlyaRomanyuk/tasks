module.exports = function(bh) {
  bh.match('dots__image', function(ctx) {
    ctx.tag('img').attrs({src: 'http://placehold.it/75x75'});
  }, true);
};
