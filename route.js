// routes.js

module.exports = (app, Todo) => {
    // GET ToDoList
    app.get('/api/todolist', (req, res) => {
        Todo.find((err, todolist) => {
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(todolist);
        });
    });

    // CREATE ToDo
    app.post('/api/todolist', (req, res) => {
        const todo = new Todo();
        todo.grade = req.body.grade;
        todo.contents = req.body.contents;
        todo.registration_date = new Date();
        todo.update_date = new Date();
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

    // UPDATE ToDo
    app.put('/api/todolist/:todo', (req, res) => {
        Todo.findById(req.params.todo, (err, todo) => {
            if(err) return res.status(500).json({ error: 'database failure' });
            if(!todo) return res.status(404).json({ error: 'todo not found' });

            if(req.body.grade) todo.grade = req.body.grade;
            if(req.body.contents) todo.contents = req.body.contents;
            if(req.body.isComplete) todo.isComplete = req.body.isComplete;
            todo.update_date = new Date();

            todo.save((err) => {
                if(err) res.status(500).json({error: 'failed to update'});
                res.json({ message: 'todo updated' });
            });
        });
    });

    // DELETE ToDo
    app.delete('/api/todolist/:todo', (req, res) => {
        Todo.remove({_id: req.params.todo}, (err, output) => {
            if(err) return res.status(500).json({ error: "database failure" });

            /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
                if(!output.result.n) return res.status(404).json({ error: "todo not found" });
                res.json({ message: "todo deleted" });
            */
            res.status(204).end();
        })
    });
}