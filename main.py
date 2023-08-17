from flask import Flask, render_template, request, redirect, url_for
from tasks import Task
app = Flask(__name__, template_folder="templates")

todos = []
todos.append(Task("Make a Paper Plane."))
todos.append(Task("Take Vitamins."))



@app.route("/")
def index():
    return render_template("index.html", todos=todos)

@app.route("/complete/<name>", methods=['GET'])
def complete_task(name):
    for todo in todos:
        if todo.getTaskName() == name:
            todo.setTaskStatus()
            break  # Assuming each task name is unique
    
    return redirect(url_for('index'))

@app.route("/delete/<name>", methods=['GET'])
def delete_task(name):
    for todo in todos:
        if todo.getTaskName() == name:
            todos.remove(todo)
            break
    return redirect(url_for('index'))

@app.route("/add", methods=['GET','POST'])
def add_task():
    name = request.form['add_name']
    new_task = Task(name)
    todos.append(new_task)

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)