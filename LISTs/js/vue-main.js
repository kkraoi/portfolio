(function(){
  'use strict';

  new Vue({
    el: "#app",
    data: {
      titleAddMode: 1,
      title: 'title',
      newTitle: '',
      newItem: '',
      items: [],
    },

    watch: {
      items: {
        handler: function(){
          localStorage.setItem('items', JSON.stringify(this.items)) || [];
        },
        deep: true
      },
      title: {
        handler: function(){
          localStorage.setItem('title', JSON.stringify(this.title)) || [];
        },
        deep: true
      },
      titleAddMode: function(){
        localStorage.setItem('titleAddMode', JSON.stringify(this.titleAddMode));
      }
    },

    mounted: function(){
      this.items = JSON.parse(localStorage.getItem('items'));
      this.title = JSON.parse(localStorage.getItem('title'));
      this.titleAddMode = JSON.parse(localStorage.getItem('titleAddMode'));
    },

    methods: {
      saveTitel: function(){
        this.title = this.newTitle;
        this.newTitle = '';
        // this.state.replace('titleAddMode','itemAddMode');
        this.titleAddMode = 0;
      },
      saveItem: function(){
        let item = {
          title: this.newItem,
          isDone: false,
        }
        this.items.push(item);
        this.newItem = '';
      },
      deleteItem: function(index){
        if(confirm('Are you sure?')){
          this.items.splice(index, 1);
        }
      },
      purge: function(){
        if(!confirm('Delete finished?')){
          return;
        }
        this.items = this.remaining;
      },
      changeTitle: function(){
        this.titleAddMode = 1;
      }
    },

    computed: {
      remaining: function(){
        return this.items.filter(function(item){
          return !item.isDone;
        });
      }
    },

  });



})();
