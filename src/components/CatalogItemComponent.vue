<template>
    <div>
        <div class="item">
            <div class="icons">
                <i class="fa-solid fa-copy" @click="copyText"></i>
                <i :class="['fa-heart', {'fa-regular' : !elem.fav}, {'fa-solid heart': elem.fav}]" @click="changeHeart"></i>
            </div>
            <img :src="elem.image" alt="item-img">
            <h2 class="mt-1">{{ elem.name }}</h2>
            <h3 class="price">{{ priceChange(elem.price) }}</h3>
            <button class="btn btn-primary" @click="addToCart">{{ $t('item.btn') }}</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        elem: Object
    },

    methods: {
        ...mapActions([
            'CHANGE_HEART',
        ]),

        priceChange(amount) {
            let res = '';
            let str_amount = String(amount);
            let length = str_amount.length;
            let counter = 0;

            for(let i = length; i > 0; i--) {
                if(counter % 3 === 0) {
                    res+=' ';
                    counter = 0;
                }

                res+= str_amount[i-1];
                counter+= 1;
            }

            return res.split('').reverse().join('');
        },

        changeHeart() {
           this.CHANGE_HEART(this.elem.id);
        },

        addToCart() {
            let cartElem = {
                title: this.elem.name,
                price: this.elem.price,
                image: this.elem.image,
                id: this.elem.id,
                count: 1,
                available: this.elem.available,
            }

            this.$emit('addToCart', cartElem);
        },

        copyText() {
            navigator.clipboard.writeText(this.elem.article);

        },
    }
}

</script>

<style lang="sass" scoped>

@import ../style/pages/catalog-item

</style>