module.exports = function(bh) {
  bh.match('imageRhombus__img', function(ctx) {
    ctx.tag('img').attr('src', 'http://placehold.it/350x350');
  }, true);
};
