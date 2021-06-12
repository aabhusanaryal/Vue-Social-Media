const app = {
    data(){
        return{
            posts: [
                {
                    title:"This is a demo post",
                    description:"Hello, there! This is the first post of this brand new social media site name The Social Media, pretty unique eh? This site supports comments as well, do try them out ;)",
                    author:"Aabhusan Aryal",
                    comments:[
                        {
                            author:"elen",
                            description:"Hait, Kada!"
                        }
                    ]
                },
            ],
            newPost: {
                title: '',
                description: '',
                author: '',
                comments: []
            },
            newComment: ''
        }
    },
    methods:{
        pushNewPost(){
            //Push the post
            this.posts.push(this.newPost)
            //Empty the newPost object
            this.newPost = {
                title: '',
                description: '',
                author: '',
                comments: []
            }
        },
        addComment(post){
            post.comments.push({
                author:'unknown',
                description:this.newComment
            })
            this.newComment=''
        }
    }
}

Vue.createApp(app).mount('#app');