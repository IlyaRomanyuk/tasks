module.exports = function(bh) {
  bh.match('search__input', function(ctx) {
    ctx.tag('input').attrs({placeholder: 'Search text', type: 'text'});
  }, true);
};
