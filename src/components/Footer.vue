<template>
    <div class="container component-shadow my-5 rounded-4">
        <footer class="d-flex flex-wrap justify-content-between align-items-center p-3 px-5 border-top">
            <div class="col-md-4 d-flex align-items-center d-none d-lg-block">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <font-awesome-icon icon="fa-solid fa-code" size="1x" />
                </a>
                <span class="mb-3 mb-md-0 text-muted">© {{ new Date().getFullYear() }} SoftwareHub, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="mx-2 social-icon">
                    <a href="https://www.github.com/ceejayviii" target="_blank" class="text-muted">
                        <font-awesome-icon icon="fa-brands fa-github" size="1x" beat />
                    </a>
                </li>
                <li class="mx-2 social-icon">
                    <a class="text-muted" href="https://www.linkedin.com/in/ceejayviii/" target="_blank"
                        title="LinkedIn">
                        <font-awesome-icon icon="fa-brands fa-linkedin" size="1x" beat />
                    </a>
                </li>
                <li class="mx-2 social-icon">
                    <a class="text-muted" href="https://www.tiktok.com/@ceejayviii" target="_blank" title="Tiktok">
                        <font-awesome-icon icon="fa-brands fa-tiktok" size="1x" beat />
                    </a>
                </li>
                <li class="mx-2 social-icon">
                    <a class="text-muted" href="https://www.facebook.com/profile.php?id=61556097299731" target="_blank"
                        title="Facebook">
                        <font-awesome-icon icon="fa-brands fa-facebook" size="1x" beat />
                    </a>
                </li>
                <li class="mx-2 social-icon">
                    <a class="text-muted" href="https://www.youtube.com/@ceejayviii" title="Youtube">
                        <font-awesome-icon icon="fa-brands fa-youtube" size="1x" beat />
                    </a>
                </li>
            </ul>
        </footer>
        <div class="scroll-top component-shadow" id="scroll-top-btn" @click="scrollToTop">
            <font-awesome-icon icon="fa-solid fa-arrow-up" size="1x" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        lastScrollTop: 0
    },
    props: {},

    components: {},

    created() { },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            const scrollTopButton = document.getElementById('scroll-top-btn');
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > this.lastScrollTop) {
                // Scrolling down
                scrollTopButton.style.display = 'none';
            } else {
                // Scrolling up
                if (scrollTop > 100) { // Show button after scrolling down 100px
                    scrollTopButton.style.display = 'block';
                } else {
                    scrollTopButton.style.display = 'none';
                }
            }
            this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },

    computed: {},

    watch: {},

    directives: {},

    filters: {}
};
</script>

<style scoped>
li.social-icon:hover a svg {
    transform: scale(1.3) rotate(20deg);
    transition: 200ms ease-in-out;
}

li.social-icon:hover a svg.fa-github {
    color: #333;
}

li.social-icon:hover a svg.fa-linkedin {
    color: #0077b5;
}

li.social-icon:hover a svg.fa-tiktok {
    color: #000000;
}

li.social-icon:hover a svg.fa-facebook {
    color: #1877f2;
}

li.social-icon:hover a svg.fa-youtube {
    color: #ff0000;
}

@media (max-width: 992px) {
    footer {
        justify-content: center !important;
    }
}

@media (max-width: 768px) {
    .scroll-top {
        display: none;
    }
}

.scroll-top {
    position: fixed;
    right: 1%;
    bottom: 4%;
    display: none;
    /* Initially hidden */
    cursor: pointer;
    z-index: 1000;
    /* Ensure it's above other elements */
    background-color: #dde1e7;
    /* Example background color */
    padding: 10px;
    /* Example padding */
    border-radius: 100%;
    /* Example border radius */
}

.scroll-top:hover {
    background-color: #999999;
    /* Example hover background color */
}
</style>
