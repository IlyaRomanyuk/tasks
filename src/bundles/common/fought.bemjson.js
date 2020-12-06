module.exports = [
    {
        block: 'modal', cls: 'fade', attrs: { 'id': 'ID4' }, content: [
            {
                elem: 'dialog', cls: 'modal-dialog-centered modal-lg', content: [
                    {
                        elem: 'header', content: [
                            { elem: 'title', content: 'Второе модальное окно' },
                            { elem: 'close', content: { block: 'fi', mods: { icon: 'close' } } },
                        ]
                    },
                    {
                        elem: 'body', content: [
                            { tag: 'p', content: 'Содержимое второго модального окна' },
                        ]
                    },
                    {
                        elem: 'footer', content: [
                            { block: 'btn', content: 'Сохранить' },
                        ]
                    },
                ]
            },
        ]
    },
];
