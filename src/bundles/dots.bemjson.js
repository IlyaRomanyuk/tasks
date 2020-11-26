module.exports = {
  block: 'page',
  title: 'TextDots',
  content: [
    {block: 'dots', content: [
        {elem: 'content', content: [
            [...new Array(4)].map((val, index) => {
              return {
                elem: 'item', content: [
                  {elem: 'image'},
                  {elem: 'title', content: 'это название какого-то тут нового товара'},
                  {elem: 'button', content: ('Add +')},
                ],
              };
            }),
          ]},
      ]},
  ],
};
