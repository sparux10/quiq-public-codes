import tkinter as tk


class Player():

    def __init__(self):
        self.name =  ''

    def set_name(self, name):
        self.name = name

    def getname(self):
        return self.name


class Ui():
    
    def __init__(self, root):
        self.root = root
        self.player = Player()
        
        self.input = tk.Entry(self.root)
        self.input.pack()

        self.button = tk.Button(root, text="إرسال", command=self.on_button_click)
        self.button.pack()

        

    def on_button_click(self):
        
        value = self.input.get()
        self.player.set_name(value)
        nom = self.player.getname()
        self.text = tk.Label(self.root, text=nom)
        self.text.pack()




    def comand():
        pass


    def Main(self):
        self.root.geometry("300x500")
        self.root.title("Application")
        self.root.mainloop()


if __name__ == "__main__":
    root = tk.Tk()
    ui = Ui(root)
    ui.Main()





