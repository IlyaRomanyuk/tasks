module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('./common/header.bemjson'),
    {block: 'navbar', content: [
        {block: 'logo', content: [
            {elem: 'link'},
          ]},
      ]},
    require('./common/footer.bemjson'),
  ],
};
