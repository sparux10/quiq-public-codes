from datetime import date

class Person:

    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def __str__(self):
        return f'Person name is {self.__name} and Person age is {self.__age}'

    def get_name(self):
        return print(self.__name)
    
    def set_name(self, new_name):
        self.__name = new_name

    @classmethod 
    def info(cls, name, birthday):
        return cls(name, date.today().year - birthday)
    
    @staticmethod
    def add(num):
        return num + 5




new_studen1 = Person('master', 100)
new_studen2 = Person('black', 30)

new_studen3 = Person.info('karl', 2006)




