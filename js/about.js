export default {
    data(){
        return {
            handle: "@yourfavben",
            imageLink: "/home/bily_taiba/Desktop/vue-tutorial/vue-todo/images/my_youtube.jpeg"
        }
    },
    template: `
        <div>
            <div>  
                <h3>Creator: <a :href="twitterLink">{{ handle }}</a>!</h3>
                <img :src="imageLink" alt="My Image">
            </div>
        </div>
    `,
    computed: {
        twitterLink() {
            return "https://www.twitter.com/" + this.handle
        }
    }
};