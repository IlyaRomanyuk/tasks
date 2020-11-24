module.exports = {
    block: 'page',
    title: 'Пустая',
    content: [
        require('./common/header.bemjson'),
        {block: 'navbar', content: 'кнопка'},
        require('./common/footer.bemjson'),
    ],
};
