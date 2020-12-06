module.exports = {
    block: 'page',
    title: 'Scroll',
    content: [
        {
            cls: 'container', content: [
                {
                    cls: 'row', content: [
                        {
                            block: 'scroll', content: [
                                ['country', 'city', 'quantity'].map((val, index) => {
                                    return {
                                        elem: 'item', content: [
                                            { elem: 'select', tag: 'select', attrs: { 'id': val } },
                                        ]
                                    };
                                }),
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
