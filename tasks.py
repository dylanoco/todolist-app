class Task():
    def __init__(self,task_name, description):
        self.task_name = task_name
        self.status = False
        self.description = description

    def getTaskName(self):
        return self.task_name       
    def getTaskStatus(self):
        return self.status  
    def getDescStatus(self):
        return self.description      
     
    def setTaskName(self, new_name):
        self.task_name = new_name  
    def setTaskStatus(self):
        self.status = True     