from flask import Flask, render_template, request, redirect, url_for
from tasks import Task
app = Flask(__name__, template_folder="templates")

todos = []
xpLimit = 0
xpLevel = 1
todos.append(Task("Make a Paper Plane.", "Making a plane."))
todos.append(Task("Take Vitamins.", "Take my multivitamins in the morning."))



@app.route("/")
def index():
    return render_template("index.html", todos=todos, xpLevel = xpLevel)

@app.route("/complete/<name>", methods=['GET'])
def complete_task(name):
    global xpLimit
    global xpLevel
    for todo in todos:
        if todo.getTaskName() == name:
            todo.setTaskStatus()
            xpLimit = xpLimit + 20
            print(xpLimit)
            if xpLimit == 40:
                xpLevel = xpLevel + 1
                xpLimit = 0
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