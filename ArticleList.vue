<template>
  <div class="articleList">
      <div v-for="stories in articleList" :key="stories.id">
          <ul>
              <li v-for="item in stories" :key="item.id" @click="changeId(item.id)">
                  <span>{{item.title}}</span>
                  <img :src="item.images[0]">
              </li>
          </ul>
      </div>
      
  </div>
</template>
<script>
export default {
    data() {
        return{
            articleList: [],
            todayDate: '',
            startLoading: true
        }
    },
    created() {
        this.$axios.get('/api/4/news/latest').then((res) => {
            this.articleList.push(res.data['stories'])
            this.todayDate = res.data['date']
        }).catch((error) => {
            console.log(error)
        })
    },
    mounted() {
        window.addEventListener('scroll',this.scrollBottom)
    },
    methods: {
        changeId(id) {
            this.$router.push({
					path:'article',
					query:{
						id
					}
				})
            this.$store.commit('setId',id)
        },
        scrollBottom() {
            if(this.startLoading && (document.documentElement.scrollTop + document.documentElement.clientHeight === document.documentElement.scrollHeight)) {
                this.startLoading = false
                console.log('bottom')
                this.$axios.get('/api/4/news/before/' + this.todayDate).then((res) => {
                    this.articleList.push(res.data['stories'])
                    this.todayDate = res.data['date']
                this.startLoading = true
                })
            }
        }
    },

    
}
</script>
