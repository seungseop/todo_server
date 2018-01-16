// routes.js

module.exports = (app, Todo) => {
    // GET ToDoList
    app.get('/api/todolist', (req, res) => {
        Todo.find((err, todolist) => {
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(todolist);
        });
    });

    // CREATE Todo
    app.post('/api/todolist', (req, res) => {
        const todo = new Todo();
        todo.grade = req.body.grade;
        todo.contents = req.body.contents;
        todo.registration_date = (req.body.registration_date)? new Date(req.body.registration_date) : new Date();
        todo.update_date = (req.body.update_date)? new Date(req.body.update_date) : new Date();
        todo.isComplete = false;

        todo.save((err) => {
            if(err) {
                console.error(err);
                res.json({result: 0});
                return;
            }

            res.json({result: 1});
        });
    });
}