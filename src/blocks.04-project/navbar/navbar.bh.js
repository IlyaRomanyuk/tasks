module.exports = function(bh) {
    bh.match('navbar', function(ctx, json) {
        ctx.tag('div'),
            ctx.content({
                tag: 'a',
                elem: 'link',
                content: `link`,
            });
    }, true);
};
