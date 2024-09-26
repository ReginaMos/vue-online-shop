<template>
    <div>
        <div class="item">
            <div class="image-part">
                <img :src="elem.image" alt="item-img">
                <h3 class="mt-2">{{ elem.title }}</h3>
            </div>
            
            <div class="description-item">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quam magnam, nulla maiores deleniti culpa eum ducimus odio facere sapiente adipisci, 
                    libero doloribus sunt aliquam fugiat doloremque voluptatibus minus vero consequatur?</p>
            </div>

            <div class="price-item">  
                <h3>{{ $t('item.count') }}</h3>
                <div class="price-btn">
                    <button class="btn btn-primary" @click="addLess">-</button>
                    <h3>{{ elem.count }}</h3>
                    <button class="btn btn-primary" @click="addMore" :disabled="!isAvail">+</button>
                </div>
                <h3>{{ $t('item.total') }}: {{ priceChange(elem.price) }}</h3>
                <h4 v-if="!isAvail">Sorry, we have only {{ elem.count }} </h4>
            </div>
            
            <div class="btn-part">
                <button class="btn btn-danger" @click="deleteElem">{{ $t('item.delete') }}</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
    props: {
        elem: Object
    },

    data() {
        return {
            isAvail: true,
        }
    },

    methods: {
        ...mapActions([
            'UPDATE_COUNT',
            'DELETE_ELEM'
        ]),

        priceChange(amount) {
            amount *= this.elem.count;
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

        addMore() {

            if(this.elem.count +1 <= this.elem.available ) this.UPDATE_COUNT({id: this.elem.id, count: 1});
            else this.isAvail = false;
        },

        addLess() {
            if(this.elem.count === 1) this.deleteElem()
            else this.UPDATE_COUNT({id: this.elem.id, count: -1});
        },

        deleteElem() {
            this.DELETE_ELEM(this.elem.id)
        }
    }
}

</script>

<style lang="sass" scoped>

@import ../style/pages/cart-item

</style>