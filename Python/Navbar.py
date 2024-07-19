import tkinter as tk
from tkinter import messagebox

root = tk.Tk()

class Nav():
    def __init__(self, root):
        self.root = root

    def creat_nav_bar(self):
        menubar = tk.Menu(self.root)
        self.root.config(menu=menubar)
        

        # قائمة ملف
        file_menu = tk.Menu(menubar, tearoff=0)
        file_menu.add_command(label="جديد", command=self.new_file)
        file_menu.add_command(label="فتح", command=self.open_file)
        file_menu.add_command(label="حفظ", command=self.save_file)
        file_menu.add_separator()
        file_menu.add_command(label="خروج", command=self.root.quit)
        menubar.add_cascade(label="ملف", menu=file_menu)

        # قائمة مساعدة
        help_menu = tk.Menu(menubar, tearoff=0)
        help_menu.add_command(label="حول", command=self.show_about)
        menubar.add_cascade(label="مساعدة", menu=help_menu)

    def new_file(self):
        messagebox.showinfo("جديد", "تم إنشاء ملف جديد")

    def open_file(self):
        messagebox.showinfo("فتح", "فتح ملف")

    def save_file(self):
        messagebox.showinfo("حفظ", "حفظ ملف")

    def show_about(self):
        messagebox.showinfo("حول", "هذا مثال على شريط التنقل في Tkinter")

Nav(root).creat_nav_bar()
root.mainloop()