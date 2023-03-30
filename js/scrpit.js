const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: ["Quarterly Newsletter", "Fare i compiti", "Fare la spesa", "Portare a spasso il cane"],
            newTodo: "",
            error: false
        };
    },
    methods: {
        addTodo() {
            if(this.newTodo.length > 0) {
                this.error = false;

                this.newTodo = this.newTodo[0].toUpperCase() + this.newTodo.substring(1);

                this.todos.unshift(this.newTodo);
                this.newTodo = "";
            } else {
                this.error = true;

                setTimeout(() => {
                    this.error = false;
                }, 3000)
            }
        },
    
        removeTodo(indexToRemove) {
            this.todos.splice(indexToRemove, 1)
        }
    }
}).mount("#app");