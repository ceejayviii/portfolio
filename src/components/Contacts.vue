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
                        <form @submit.prevent="sendEmailAsync()" ref="send_email_form" autocomplete="off">
                            <div class="mb-3">
                                <label for="from" class="form-label">Email</label>
                                <input type="email" class="form-control" id="from" placeholder="Enter your e-mail"
                                    autocomplete="off">
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="3"
                                    placeholder="Enter your message..."></textarea>
                            </div>
                            <button class="btn btn-outline-success" ref="send_email_btn" type="submit">
                                <span>Send Message</span>
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


const loadingEffect = function (btn, text, apply) {
    if (apply) {
        btn.disabled = apply;
        btn.innerHTML = text;
    } else {
        btn.disabled = apply;
        btn.innerHTML = text;
    }
}


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
        async sendEmailAsync() {
            const btn = this.$refs.send_email_btn;
            const prevHTMLValue = btn.innerHTML;
            try {
                this.$refs.send_email_form.querySelectorAll('.form-control').forEach(element => { element.disabled = true });
                loadingEffect(btn, 'Loading...', true);
                const response = await axios.post('/send/email', this.formData);
                if (response.data.error) {
                    console.log('error: ' + response.data.error);
                } else {
                    console.log('Email sent successfully!');
                }
            } catch (error) {
                this.$refs.send_email_form.querySelectorAll('.form-control').forEach(element => { element.disabled = false });
                loadingEffect(btn, prevHTMLValue, false);
                console.log('Error: ' + error.message);
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
