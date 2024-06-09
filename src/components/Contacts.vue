<template>
    <div class="rounded-4">
        <div class="col-sm py-5 mx-auto">
            <h1 class="display-6 fw-normal d-flex justify-content-center">Contacts</h1>
            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 rounded-3">
                        <h2>Change the background</h2>
                        <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron
                            look. Then, mix and match with additional component themes and more.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 p-5 border rounded-3">
                        <form @submit.prevent="SendEmailAsync" autocomplete="off">
                            <div class="mb-3">
                                <label for="from" class="form-label">Email</label>
                                <input type="email" class="form-control" id="from" placeholder="Enter your e-mail"
                                    aria-autocomplete="off" autocomplete="off">
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="3"
                                    placeholder="Enter your message..."></textarea>
                            </div>
                            <button class="btn btn-outline-success" type="submit">
                                Send Message
                                <font-awesome-icon icon="fa-solid fa-paper-plane" beat size="1x" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
    name: 'Contacts',
    data() {
        return {};
    },

    props: {},

    emits: {},

    components: {},

    created() { },

    mounted() { },

    methods: {
        async SendEmailAsync() {
            try {
                const response = await axios.post('http://localhost:3000/send/email', this.formData);
                if (response.data.error) {
                    alert('error: ' + response.data.error);
                } else {
                    alert('Email sent successfully!');
                }
            } catch (error) {
                alert('Error: ' + error.message);
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
button.btn {
    padding-inline: 20px;
    box-shadow: gray 5px 5px 8px, ghostwhite -5px -5px 8px;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid transparent;
    color: black;
}

button.btn:hover {
    box-shadow: gray 4px 4px 4px, ghostwhite -4px -4px 4px;
}

input,
textarea {
    padding: 15px;
    box-shadow: gray 5px 5px 8px, ghostwhite -5px -5px 8px;
    background: none;
}

input:focus,
textarea:focus {
    border-color: transparent;
    background-color: transparent;
    box-shadow: gray 5px 5px 8px,
        ghostwhite -5px -5px 8px;
}
</style>
