import Vue from 'vue';
import VueI18n from 'vue-i18n';
// import messages from './messages';

Vue.use(VueI18n);

export default new VueI18n({
	locale: 'en', // default language
	// messages
    messages: {
        ru: {
            header: {
                catalog: 'Каталог',
                categories: ['Категории', 'Всё', 'Юбки', 'Джинсы', 'Футболки', 'Толстовки', 'Рубашки'],
            },

            item: {
                btn: 'Добавить',
                count: 'Количество',
                total: 'Всего',
                delete: 'Удалить',
                summary: 'Стоимость',
                avail: 'У нас есть только',
                cartElem: 'Вы еще ничего не добавили в корзину',

            },
        },
        en: {
            header: {
                catalog: 'Catalog',
                categories: ['Our categories', 'All', 'Skirts', 'Jeans', 'T-shirts', 'Hoodies', 'Shorts'],
            },

            item: {
                btn: 'Add to cart',
                count: 'Count',
                total: 'Total',
                delete: 'Delete',
                summary: 'Summary',
                avail: 'Sorry, we have only',
                cartElem: 'You haven`t anything in the cart',
            },
        },
    }
});