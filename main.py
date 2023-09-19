from flask import Flask, render_template, request, redirect, url_for
from tasks import Task
app = Flask(__name__, template_folder="templates")

todos = []
todos.append(Task("Make a Paper Plane.", "Making a plane."))
todos.append(Task("Take Vita5mins.", "Take my multivitamins in the morning."))
todos.append(Task("Take Vit4amins.", "Take my multivitamins in the morning."))
todos.append(Task("Take Vit3amins.", "Take my multivitamins in the morning."))
todos.append(Task("Take Vi2tamins.", "Take my multivitamins in the morning."))





@app.route("/")
def index():
    return render_template("index.html", todos=todos)

@app.route("/complete/<name>", methods=['GET'])
def complete_task(name):
    for todo in todos:
        if todo.getTaskName() == name and todo.getTaskStatus() != True :
            todo.setTaskStatus()
            break  # Assuming each task name is unique
    
    return redirect(url_for('index'))

@app.route("/delete", methods=['GET','POST'])
def delete_task():
    name = request.form['name']
    for todo in todos:
        if todo.getTaskName() == name:
            todos.remove(todo)
            break
    return redirect(url_for('index'))

@app.route("/add", methods=['GET','POST'])
def add_task():
    name = request.form['add_name']
    desc = request.form['add_desc']
    new_task = Task(name, desc)
    todos.append(new_task)

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)