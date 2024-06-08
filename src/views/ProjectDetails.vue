<template>
    <div class="container component-shadow my-5 rounded-4">
        <div class="p-5 rounded-4">
            <div class="col-sm-8 py-5 mx-auto">
                <h1 class="display-5 fw-normal">Project details</h1>
                <p class="fs-5">This example shows how responsive offcanvas menus work within the navbar. For
                    positioning of
                    navbars, checkout the <RouterLink to="#">top</RouterLink> and <RouterLink to="#">fixed top
                    </RouterLink> examples.</p>
                <p>From the top down, you'll see a dark navbar, light navbar and a responsive navbar—each with
                    offcanvases
                    built in. Resize your browser window to the large breakpoint to see the toggle for the offcanvas.
                </p>
                <p>
                    <RouterLink class="btn btn-primary" to="#" role="button">Learn more about
                        offcanvas
                        navbars »</RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectDetails',
    data() {
        return {};
    },

    props: {},

    emits: {},

    components: {},

    created() {},

    mounted() {},

    methods: {},

    computed: {},

    watch: {},

    filters: {},

    directives: {}
});
</script>

<style lang="scss" scoped></style>
