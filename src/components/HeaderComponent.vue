<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="header-content">
                    <router-link to="/" class="no-line"><span @click="clickAll">{{ $t('header.catalog') }}</span></router-link>
                    <span class="dropdown">{{ $t('header.categories[0]') }}
                        <ul class="dropdown-content">
                            <li @click="clickAll">{{ $t('header.categories[1]') }}</li>
                            <li @click="clickSkirt">{{ $t('header.categories[2]') }}</li>
                            <li @click="clickJeans">{{ $t('header.categories[3]') }}</li>
                            <li @click="clickTshirt">{{ $t('header.categories[4]') }}</li>
                            <li @click="clickHoodie">{{ $t('header.categories[5]') }}</li>
                            <li @click="clickShirt">{{ $t('header.categories[6]') }}</li>
                        </ul>
                    </span>
                    <router-link to="/cart" class="no-line">
                        <div class="cart-part">                      
                            <div class="cart-item">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div class="count-elem">{{ countElem }}</div>
                        </div>
                    </router-link>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations} from 'vuex';

export default {
    methods: {
        ...mapMutations([
            'CHANGE_FILTER',
        ]),
        
        clickAll() {
            this.CHANGE_FILTER('');
        },

        clickSkirt() {
            this.CHANGE_FILTER('skirt');
        },

        clickJeans() {
            this.CHANGE_FILTER('jeans');
        },

        clickTshirt() {
            this.CHANGE_FILTER('t-shirt');
        },

        clickHoodie() {
            this.CHANGE_FILTER('hoodie');
        },

        clickShirt() {
            this.CHANGE_FILTER('shirt');
        },

    },

    computed: {
        countElem() {            
            return this.$store.state.cart.length;
        }
    }
}

</script>

<style lang="sass" scoped>

@import ../style/pages/header

</style>