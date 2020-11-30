module.exports = {
  block: 'page',
  title: 'goods',
  content: [
    {block: 'goods', content: [
        {elem: 'inner', content: [
            [
              {
                url: '300x300',
                title: 'Apple iPhone 4S 32Gb',
                price: '400$',
              },

              {
                url: '300x400',
                title: 'Apple iPhone 6S 64Gb',
                price: '700$',
              },

              {
                url: '300x200',
                title: 'Apple iPhone 5S 32Gb',
                price: '500$',
              },

              {
                url: '300x300',
                title: 'Apple iPhone 5C 8Gb',
                price: '250$',
              },

              {
                url: '300x300',
                title: 'Apple iPhone 10 32Gb',
                price: '1000$',
              },

              {
                url: '300x200',
                title: 'Apple iPhone 7 32Gb',
                price: '670$',
              },
            ].map((val) => {
            return {elem: 'item', content: [
                {elem: 'img', attrs: {src: `http://placehold.it/${val.url}`}},
                {elem: 'title', content: val.title},
                {elem: 'price', content: `price: ${val.price}`},
                {elem: 'btn', content: ('Save'), cls: 'btn  btn-success'},
              ]};
          }),
          ]},
      ]},
  ],
};
