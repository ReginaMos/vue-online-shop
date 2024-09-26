export default {
    data() {
        return {
            products: [
              {
                id: 1,
                type: 't-shirt', 
                image: 'https://5.imimg.com/data5/IN/EK/BA/SELLER-30607000/plain-white-t-shirts.jpg',
                name: 'White T-short',
                article: 'TW',
                available: 20,
                price: 150000,
                fav: false
              },
              {
                id: 2,
                type: 't-shirt', 
                image: 'https://calientestore.com/cdn/shop/files/Basic_Powder_Blue_T-shirt_-_Caliente_T-shirts_Polos_Collection_2.webp?v=1717151560&width=1445',
                name: 'Blue T-short',
                article: 'TB',
                available: 15,
                price: 150000,
                fav: false
              },
              {
                id: 3,
                type: 't-shirt', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpD-ye0lQOBMB4xzlTrkW5zSaqsgZxW7J6mw&s',
                name: 'Red T-short',
                article: 'TR',
                available: 35,
                price: 150000,
                fav: false
              },
              {
                id: 4,
                type: 't-shirt', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthpA8rt0cFQdj6p7x5PYDYlHA7nCmt1bc6w&s',
                name: 'Black T-short',
                article: 'TW',
                available: 10,
                price: 150000,
                fav: false
              },
              {
                id: 5,
                type: 'jeans', 
                image: 'https://isto.pt/cdn/shop/products/Everyday_Denim_Blue_1.jpg?v=1668613349',
                name: 'Classic blue jeans',
                article: 'JB',
                available: 16,
                price: 550000,
                fav: false
              },
              {
                id: 6,
                type: 'jeans', 
                image: 'https://www.radpresent.com/cdn/shop/products/product-image-514824720.jpg?v=1599814675&width=416',
                name: 'Black jeans',
                article: 'JB',
                available: 11,
                price: 650000,
                fav: false
              },
              {
                id: 7,
                type: 'jeans', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmv_sn4gMuXEAmmrIXAYYLu5lnWrgzwOPVg&s',
                name: 'Dark blue jeans',
                article: 'JD',
                available: 7,
                price: 600000,
                fav: false
              },
              {
                id: 8,
                type: 'skirt', 
                image: 'https://media.s-bol.com/qrJrnMB7XolG/5m6NXR/310x840.jpg',
                name: 'Blue jeans skirt',
                article: 'SJ',
                available: 15,
                price: 250000,
                fav: false
              },
              {
                id: 9,
                type: 'skirt', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2jzo2zme-yZR8qScsDBScj-Rh5m7FPFVSw&s',
                name: 'Magenta skirt',
                article: 'SM',
                available: 20,
                price: 250000,
                fav: false
              },
              {
                id: 10,
                type: 'skirt', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1mT2pFkCe6p8PapB-ojGpdAWBXpEvUoO-w&s',
                name: 'White skirt',
                article: 'SW',
                available: 8,
                price: 350000,
                fav: false
              },
              {
                id: 11,
                type: 'skirt', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0vkm0UUTjOVasCKjPMuBL6s-vOGp8Jk7D5emvY6uy52cHXL9D_xQXOy1S__MLsBUj_s&usqp=CAU',
                name: 'Yellow skirt',
                article: 'SY',
                available: 12,
                price: 250000,
                fav: false
              },
              {
                id: 12,
                type: 'skirt', 
                image: 'https://www.chicwish.com/media/catalog/product/cache/789a34736ead3066d85296b038a5aa03/7/1/71106c.1.3.jpg',
                name: 'Green skirt',
                article: 'SG',
                available: 21,
                price: 200000,
                fav: false
              },
              {
                id: 13,
                type: 'hoodie', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV89Zi_sBhHUHCQZTIe2whVOzEoMR9vZb4Yg&s',
                name: 'Pink hoodie',
                article: 'HP',
                available: 10,
                price: 350000,
                fav: false
              },
              {
                id: 14,
                type: 'hoodie', 
                image: 'https://hebe.lv/media/product/bde/hebe-hoodie-violet-for-adult-ss24420-fc1.jpg',
                name: 'Violet hoodie',
                article: 'HV',
                available: 14,
                price: 300000,
                fav: false
              },
              {
                id: 15,
                type: 'hoodie', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRx21vzhrIKDE9tnf9qyWKzL-gZb_lPiEDQ&s',
                name: 'Black hoodie',
                article: 'HB',
                available: 12,
                price: 350000,
                fav: false
              },
              {
                id: 16,
                type: 'hoodie', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEt5EpMi0OykZDoeChGm3_foULTHv-J_vdQ&s',
                name: 'Blue hoodie',
                article: 'HBl',
                available: 3,
                price: 270000,
                fav: false
              },
              {
                id: 17,
                type: 'shirt', 
                image: 'https://down-vn.img.susercontent.com/file/30d96188b33211e83780f66227c3b48c',
                name: 'White shirt',
                article: 'SW',
                available: 17,
                price: 370000,
                fav: false
              },
              {
                id: 18,
                type: 'shirt', 
                image: 'https://fashionclinik.com/wp-content/uploads/2023/06/IMG-20231211-WA0086.jpg',
                name: 'Black shirt',
                article: 'SB',
                available: 9,
                price: 380000,
                fav: false
              },
            ],
          }
    },
}