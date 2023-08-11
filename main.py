from task import Task
from checklist import Checklist
import tkinter as tk
from tkinter import *

root = Tk()
root.title('To Do List ZYN')
root.geometry("400x400")
my_cl = Checklist(root)
root.mainloop()