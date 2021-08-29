
Vue.component('repo-component', {
    data(){
        return {
            username: "",
            repoName: "",
            handle: "@yourfavben",
            imageLink: "https://pbs.twimg.com/profile_images/1425117984582946822/PzcUNUWj_400x400.jpg",
            aboutStyle: "about",
            saveSearch: "save-search"
        }
    },
    methods: {
        onSubmitSearch(){
            let inquiryData = {
                username: this.username,
                repoName: this.repoName
            }
            console.log(inquiryData);
            this.$emit('inquiry-submitted', inquiryData)

            this.username = this.repoName = ""
        }
    },
    template: `
        <div>
            <div class="container">
                <h2 class="header">Repos Search</h2>
                <form name="user_form" @submit.prevent="onSubmitSearch">
                    
                    <label for="email">Repo Name</label>
                    <input type="text" name="email" id="email" placeholder="vue.js" autocomplete="off">
                    <span id="email_error" style="font-size: 12px;">Required field</span>
                
                    <label for="username">Username</label>
                    <input type="text" v-model="username" name="username" id="username" placeholder="benjaminsanga"  autocomplete="off">

                    <!--label>Save Search</label>
                    <div :class="saveSearch">
                        <label for="save" style="float: left;">Yes&nbsp;
                            <input type="radio" name="save-or-not" id="save" value="save">
                        </label>
                        <label for="nosave">No&nbsp;
                            <input type="radio" name="save-or-not" id="nosave" value="nosave">
                        </label>
                    </div-->

                    <button type="submit" id="check_user" class="custom-button submit-button">Find</button>

                </form>
            </div>
            <div class="container">
                <h3 class="header">Result</h3>
                {{ staticGithubSearch }}
            </div>
            <div :class="aboutStyle">  
                <img :src="imageLink" alt="My Image">
                <h3><a :href="twitterLink">{{ handle }}</a></h3>
            </div>
        </div>
    `,
    computed: {
        twitterLink() {
            return "https://www.twitter.com/" + this.handle
        },
        async staticGithubSearch(){
            const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
            const uri = 'https://api.github.com/search/repositories';
            return await fetch(uri, {
                headers: {
                    "Accept" : "application/vnd.github.v3+json",
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data)
                return data;
            })
            .catch((err) => {
                console.log('Error:', err)
                return err;
            })
        }
    }
});

new Vue({
    el: "#app"
});
