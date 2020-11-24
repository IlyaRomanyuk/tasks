module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('./common/header.bemjson'),
    {block: 'navbar', content: [
        {block: 'logo', content: [
            {block: 'logo-link'},
          ]},
        {block: 'menu'},
      ]},
    require('./common/footer.bemjson'),
  ],
};
