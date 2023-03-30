const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                {
                    text:"Quarterly Newsletter",
                    done: false
                },
                {
                    text:"Fare i compiti",
                    done: true
                }
            ],
            newTodo: "",
            done: false
        };
    },
    methods: {
        addTodo() {
            if(this.newTodo.length > 0) {
                this.done = false;

                this.newTodo = this.newTodo[0].toUpperCase() + this.newTodo.substring(1);

                this.todos.unshift(this.newTodo); 
                
                this.newTodo = "";
            } else {
                this.done = true;

                setTimeout(() => {
                    this.done = true;
                }, 3000)
            }
        },
    
        removeTodo(indexToRemove) {
            this.todos.splice(indexToRemove, 1)
        }
    }
}).mount("#app");