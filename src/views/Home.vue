<template>
    <div class="container component-shadow my-5 rounded-4">
        <div class="rounded-4">
            <div class="col-sm-8 py-5 p-4 mx-auto">
                <h1 class="display-5 fw-normal">Chagi Siyavuya</h1>
                <p class="fs-5 typed-element-container rounded-2">
                    <span class="typed-element" ref="typedElement"></span>
                </p>
                <p>
                    Welcome to my portfolio. I am Chagi Siyavuya, a Software Developer specializing in C# and I am also
                    proficient in a wide range of other programming languages and Technologies.
                </p>
                <p>
                    <a href="src/assets/uploads/Resume.pdf" class="btn btn-secondary resume" download>
                        Download CV
                        <font-awesome-icon icon="fa-solid fa-download" shake size="1x" />
                    </a>
                </p>
            </div>
        </div>
        <!-- Skills -->
        <div class="divider my-4"></div>
        <Skills />
        <!-- Project -->
        <div class="divider my-4"></div>
        <Projects />
        <!-- Contacts -->
        <div class="divider my-4"></div>
        <Contacts />
    </div>
    <Footer />
</template>

<script>
import Typed from 'typed.js';
// Components
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contacts from '../components/Contacts.vue';
import Footer from "../components/Footer.vue";

export default {
    name: 'Home',
    data() {
        return {};
    },
    props: {},

    components: {
        Skills,
        Projects,
        Contacts,
        Footer,
    },

    created() { },

    mounted() {
        const typedOptions = {
            strings: [
                'I am a Software Developer,',
                'I am a Web Developer,',
                'I am a Mobile Developer,'
            ],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        };

        this.typed = new Typed(this.$refs.typedElement, typedOptions);
    },

    beforeDestroy() {
        if (this.typed) {
            this.typed.destroy();
        }
    },

    methods: {},

    computed: {},

    watch: {},

    directives: {},

    filters: {}
};
</script>

<style scoped>
.typed-element-container {
    padding-inline: 10px;
}

.resume {
    padding-inline: 20px;
    box-shadow: gray 5px 5px 8px, ghostwhite -5px -5px 8px;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid transparent;
    color: black;
}

.resume:hover {
    box-shadow: gray 4px 4px 4px, ghostwhite -4px -4px 4px;
}
</style>
