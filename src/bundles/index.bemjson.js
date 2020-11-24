module.exports = {
    block: 'page',
    title: 'Пустая',
    content: [
        require('./common/header.bemjson'),
        {block: 'navbar'},
        require('./common/footer.bemjson'),
    ],
};
