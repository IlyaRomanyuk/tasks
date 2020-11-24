module.exports = function(bh) {
    bh.match('pagination', function(ctx, json) {
        ctx.tag('ul');
        let props = Object.assign({
            amount: 3,
            active: 0,
            controls: true,
        }, json.props ? json.props : {});
        if (props.amount) {
            let content = [...new Array(props.amount)].map((item, index) => [
                {elem: 'item', props: {active: index === props.active}, content: index + 1},
            ]);
            if (props.controls) {
                content = [
                    {elem: 'item', content: '&laquo;'},
                    content,
                    {elem: 'item', content: '&raquo;'},
                ];
            }
            ctx.content(content);
        }
    });
};
