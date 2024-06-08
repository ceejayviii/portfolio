<template>
    <header>
        <div class="rounded-4 px-5">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <RouterLink to="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
                    <font-awesome-icon icon="fa-solid fa-code" size="3x" class="text-dark" />
                </RouterLink>

                <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li>
                        <RouterLink to="/" active-class="active" class="nav-link text-secondary">
                            <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                                <use xlink:to="#home"></use>
                            </svg>
                            Home
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contacts" class="nav-link text-secondary">
                            <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                                <use xlink:to="#table"></use>
                            </svg>
                            Contacts
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/pricing" class="nav-link text-secondary">
                            <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                                <use xlink:to="#grid"></use>
                            </svg>
                            Pricing
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {};
    },
    props: {},

    components: {},

    created() { },

    mounted() { },

    beforeDestroy() { },

    methods: {},

    computed: {},

    watch: {},

    directives: {},

    filters: {}
};
</script>

<style scoped>
header {
    box-shadow: rgb(180 180 180) 6px 6px 10px;
}

.active {
    color: black;
}
</style>