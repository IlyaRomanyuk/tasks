module.exports = function(bh) {
    bh.match('navbar', function(ctx, json) {
        let linkArr = [...new Array(5)];
        ctx.tag('div'),
            linkArr.map((value, index) => {
                ctx.content({
                    tag: 'a',
                    elem: 'link',
                    content: `link ${index}`,
                });
            });
    }, true);
};
