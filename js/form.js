export default {
    data(){
        return {
            appTitle: "Github Repos",
            formTitle: "Repos Search",
            username: "anonymous",
            repoName: "vuejs",
            save: false
        }
    },
    methods: {
        onSubmit(){
            let inquiryData = {
                username: this.username,
                repoName: this.repoName
            }
            // console.log(inquiryData);
            this.$emit('inquiry-submitted', inquiryData)

            this.username = this.repoName = ""
        }
    },
    template: `<div id="container">
                    <h2 class="myHeader">Repos Search</h2>
                    <form name="user_form" @submit.prevent="onSubmitSearch">
                        
                        <label for="username">Username</label>
                        <input type="text" v-model="username" name="username" id="username" placeholder="benjaminsanga" required="">
                        <span id="username_error" style="font-size: 12px;">Required field</span>

                        <label for="email">Repo Name</label>
                        <input type="text" name="email" id="email" placeholder="vue.js">
                        <span id="email_error" style="font-size: 12px;">Required field</span>
                        
                        <label>Save Search</label>
                        <div style="display: flex;justify-content: space-between;flex-direction: row;">
                            <label for="female" style="float: left;">Yes&nbsp;
                                <input type="radio" name="gender" id="female" value="female">
                            </label>
                            <label for="male">No&nbsp;
                                <input type="radio" name="gender" id="male" value="male">
                            </label>
                        </div>

                        <button type="submit" id="check_user" class="custom-button submit-button">Find</button>

                    </form>
                </div>`    
};

// var app = new Vue({
//     el: "#app"
// });

