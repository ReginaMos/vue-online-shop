<template>
    <div>
        <div class="elements" v-if="CART.length">
            <div class="elem">
                <CartItemComponent v-for="item in getCart"
                :key="item.id"
                :elem="item"
                />
            </div>
            
            <h3 class="sum mt-3">{{ $t('item.summary') }}: {{ totalCount }}</h3>
        </div>
        <h2 v-else> {{ $t('item.cartElem') }}</h2>
    </div>
</template>

<script>

import CartItemComponent from '@/components/CartItemComponent.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        CartItemComponent
    },

    methods: {
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
    },

    computed: {
        ...mapGetters([
            'CART',
            'SUM_CART'
        ]),

        getCart() {
            return this.CART;
        },

        totalCount() {
            return this.priceChange(this.SUM_CART);
        }
    }
}

</script>

<style lang="sass" scoped>

@import ../style/pages/cart

</style>