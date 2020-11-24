module.exports = {
    block: 'page',
    title: 'Пустая',
    content: [
        require('./common/header.bemjson'),
        {block: 'navbar', content: 'ссылка'},
        require('./common/footer.bemjson'),
    ],
};
