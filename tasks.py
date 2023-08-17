class Task():
    def __init__(self,task_name):
        self.task_name = task_name
        self.status = False

    def getTaskName(self):
        return self.task_name       
    def getTaskStatus(self):
        return self.status    
     
    def setTaskName(self, new_name):
        self.task_name = new_name  
    def setTaskStatus(self):
        self.status = True     