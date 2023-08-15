from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, template_folder="templates")

todos = [{"task_name": "Sample", "done": False}]

@app.route("/")
def index():
    return render_template("index.html", todos=todos)

@app.route("/update/<name>", methods=['GET'])
def update_array(name):
    for todo in todos:
        if todo['task_name'] == name:
            todo["done"] = True
            break  # Assuming each task name is unique

    return redirect(url_for('index'))
if __name__ == '__main__':
    app.run(debug=True)