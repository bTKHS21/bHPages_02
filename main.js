let bool_01 = true;

let app = new Vue({
    el: "#app",
    data: {
        msg: "welcome",
        msg01:""
    },
    methods: {
        change_function: () => {
            if (bool_01) {
                app.msg01 = "Hello"
                bool_01 = false;
            } else {
                app.msg01 = ""
                bool_01 = true;
            }
        }
    }
})