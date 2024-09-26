<template>
    <div>
            <HeaderComponent/>
        <div class="container">
            <div class="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
    components: {
        HeaderComponent
    }
}

</script>

<style lang="sass">

.content
    margin-top: 130px

</style>