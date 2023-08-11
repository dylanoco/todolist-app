from task import Task
import tkinter as tk
from tkinter import *
class Checklist():
        def __init__(self, master):
            self.task_list = []

            myFrame = Frame(master)
            myFrame.pack()

            self.buttonsFrame = Frame(master)

            self.displayButton = Button(master = self.buttonsFrame, text="Display", command=self.displayTasks)
            self.createButton = Button(master = self.buttonsFrame, text="Create", command=self.createTask)
            self.updateButton = Button(master = self.buttonsFrame, text="Update", command=self.updateTask)
            self.deleteButton = Button(master = self.buttonsFrame, text="Delete", command=self.deleteTask)
            

            self.displayButton.pack(pady=20,padx=10, side='left')
            self.createButton.pack(pady=20,padx=10, side='left')
            self.updateButton.pack(pady=20,padx=10, side='left')
            self.deleteButton.pack(pady=20,padx=10, side='left')
            self.buttonsFrame.pack()

        def displayTasks(self):
            if (len(self.task_list) == 0):
                 print("You have no pending tasks.")
            else:
                 for obj in self.task_list:
                    print("Task Name: " + obj.task_name + " Task Status: "+ obj.task_status)  
        def createTask(self):
            print("Enter the name of the Task")
            name = input()
            self.task_list.append(Task(name))
            print("The task has been succesfully created. Task Name: " + name)
        def updateTask(self):
            counter = 1
            if (len(self.task_list) == 0):
                 print("You have no pending tasks.")
            else:
                 for obj in self.task_list:
                    print(str(counter) + ": " + obj.task_name)
                    counter += 1
            print("Type the number with the task you wish to update: ")
            number = int(input())
            chosen_task = self.task_list[(number-1)]
            print("Task Name: " + chosen_task.task_name + " Task Status: "+ chosen_task.task_status)
            print("1 To change name, 2 to change status: ")
            choice = int(input())
            if (choice == 1):
                 print("Enter the name you wish to rename it to: ")
                 name_choice = str(input())
                 chosen_task.task_name = name_choice
            else:
                 if(chosen_task.task_status == "Incomplete"):
                      chosen_task.task_status = "Complete"
                 else:
                      chosen_task.task_status = "Incomplete"
            print("Task Name: " + chosen_task.task_name + " Task Status: "+ chosen_task.task_status)
        def deleteTask(self):
            counter = 1
            if (len(self.task_list) == 0):
                 print("You have no pending tasks.")
            else:
                 for obj in self.task_list:
                    print(str(counter) + ": " + obj.task_name)
                    counter += 1


            print("Type the number with the task you wish to delete: ")
            number = int(input())
            chosen_task = self.task_list[(number-1)]
            print("Task Name: " + chosen_task.task_name + " Task Status: "+ chosen_task.task_status)
            print("Would you like to delete this task?")
            print("Enter 1 for yes, 2 for no: ")
            choice = int(input())
            if(choice == 1):
                 self.task_list.remove(chosen_task)
            else:
                 pass

                 



