<template>
    <div>
        <div class="catalog">
            <div class="list-items">
                <ItemComponent v-for="item in filterByHeader"
                    :key = "item.id"
                    :elem="item"

                    @addToCart="addToCart"
                />
            </div>
        </div>
    </div>
</template>

<script>

import ItemComponent from '@/components/CatalogItemComponent.vue'
// import products from '@/mixins/shop.js'
import { mapActions } from 'vuex';

export default {
    components: {
        ItemComponent,
    },

    // mixins: [products],

    data() {
        return {
            article: '',
        }
    },

    methods: {
        ...mapActions([
            'ADD_TO_CART',
        ]),

        addToCart(data) {
            this.ADD_TO_CART(data);
        },
    },

    computed: {
        countElem() {                      
            return this.$store.state.cart.length;
        },

        filterByHeader() {
            if(this.$store.state.headerFilter == '') return this.$store.state.products;
            return this.$store.state.products.filter(item => item.type === this.$store.state.headerFilter);
        },

    }
}

</script>

<style lang="sass" scoped>

@import ../style/pages/catalog
        
</style>