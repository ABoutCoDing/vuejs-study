<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput></TodoInput>
        <!-- <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
        <TodoFooter v-on:removeAll="clearAll"></TodoFooter> -->
        <TodoList></TodoList>
        <TodoFooter></TodoFooter>
    </div>
</template>

<script>
    import TodoHeader from "./components/TodoHeader";
    import TodoInput from "./components/TodoInput";
    import TodoList from "./components/TodoList";
    import TodoFooter from "./components/TodoFooter";

    export default {
        // data() {
        //     return {
        //         todoItems: [],
        //     }
        // },
        // methods: {
        //     addTodo(todoItem) {
        //         // localStorage.setItem(todoItem, todoItem);
        //         // this.todoItems.push(todoItem);
        //         // this.$store.state.todoItem(todoItem);
        //     }, clearAll() {
        //         // localStorage.clear();
        //         // this.todoItems = [];
        //         // this.$store.state.todoItems = [];
        //     }, removeTodo(todoItem, index) {
        //         // localStorage.removeItem(todoItem);
        //         // this.todoItems.splice(index, 1);
        //         // this.$store.state.todoItems.splice(index, 1);
        //     }
        // },
        components: {
            'TodoHeader': TodoHeader,
            'TodoInput': TodoInput,
            'TodoList': TodoList,
            'TodoFooter': TodoFooter,
        },
        created() {
            if (localStorage.length > 0) {
                for (let i=0; i<localStorage.length; i++) {
                    // this.todoItems.push(localStorage.key(i));
                    this.$store.state.todoItems.push(localStorage.key(i));
                }
            }
        },
    }
</script>

<style>
    body {
        text-align: center;
        background-color: #f6f6f8;
    }
    input {
        border-style: groove;
        width: 200px;
    }
    button {
        border-style: groove;
    }
    .shadow {
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
    } 
</style>
