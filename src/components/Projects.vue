<template>
    <div class="projects-container rounded-4">
        <div class="mx-3">
            <h1 class="display-6 fw-normal d-flex justify-content-center mb-5">Projects</h1>
            <div class="d-flex justify-content-center">
                <div class="row mb-2">
                    <div v-for="(project, index) in Projects" :key="project.id"
                        :class="['col-md-6', 'project', index % 2 === 0 ? 'left' : 'right']">
                        <div
                            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 component-shadow h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success">{{ project.category }}</strong>
                                <h4 class="mb-0">{{ project.name }}</h4>
                                <div class="mb-1 text-muted">
                                    {{ project.dateCreated.toLocaleDateString('en-za', {
                                        month: 'short', year: 'numeric'
                                    }) }}
                                </div>
                                <p class="card-text mb-auto" :class="[index % 2 === 0 ? 'ltr' : '']">
                                    {{ project.shortDescription }}
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div :class="['btn-group', index % 2 === 0 ? 'ltr' : '']">
                                        <router-link :to="`project/details/${project.id}`"
                                            class="btn btn-sm btn-outline-secondary">Details
                                        </router-link>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                    </div>
                                </div>
                                <a :href="project.previewLink" target="_blank"
                                    :class="['d-flex align-items-center', index % 2 === 0 ? 'ltr' : '']">
                                    <font-awesome-icon icon="fa-solid fa-link" size="1x" />
                                    Preview Link
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block w-50" :style="setBackgroundImage(project.image)">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Projects',
    data() {
        return {
            Projects: [
                {
                    id: 1,
                    name: "TicTacToe",
                    category: "Website",
                    shortDescription: "This is a basic XOXOXO web game I used to learn javascript.",
                    description: "This is a wider card with supporting text below as a natural",
                    dateCreated: new Date(2022, 10),
                    image: "/src/assets/images/xoxoxo.png",
                    previewLink: "https://65a2986685c506c5be36defe--playful-cupcake-01e992.netlify.app/",
                },
                {
                    id: 2,
                    name: "Static template",
                    category: "Website",
                    shortDescription: "This is a static bootstrap template.",
                    description: "This is a wider card with supporting text below as a natural",
                    dateCreated: new Date(2023, 8, 25),
                    image: "/src/assets/images/template.png",
                    previewLink: "https://aquamarine-phoenix-f0273c.netlify.app/",
                },
            ],
        };
    },

    props: {},

    emits: {},

    components: {},

    created() { },

    mounted() { },

    methods: {
        setBackgroundImage(url) {
            return {
                background: `url(${url})`,
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
            }
        }
    },

    computed: {},

    watch: {},

    filters: {},

    directives: {}
});
</script>

<style scoped>
div.project.left {
    direction: rtl;
}

div.project.left * .ltr {
    direction: ltr;
    display: flex;
    justify-content: end;
}

@media (max-width: 992px) {
    div.project.left {
        direction: ltr;
    }

    div.project.left * .ltr {
        direction: ltr;
        display: flex;
        justify-content: start;
    }
}

.card-text.ltr{
    display: contents !important;
}
</style>
