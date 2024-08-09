class Player():

    def __init__(self):
        self.name = ''
        self.symbol = ''


    def choose_name(self):
        while True:
            name = input('enter your name')
            if name.isalpha():
                self.name = name
                break
            print('not valid name')

    def choose_symbol(self):
        while True:
            symbol = input(f'{self.name}enter your symbol')
            if symbol.isalpha() and len(symbol) == 1:
                self.symbol = symbol.upper()
                break
            print('not valid symbol')

class Menu():

    def __init__(self):
        pass

    def main_menu(self):
        print('Welcome')
        print('1 : start game')
        print('2 : quit')
        choice = input('choose 1 or 2')
        return choice
    
    def end_menu():
        menu_text = """
        Game over!
        1 -  restart
        2 - quit game
    """
        input(menu_text)

class Board():

    def __init__(self):
        self.bord = [str(i) for i in range(1,10)]
        
    def display_bord(self):
        for i in range(0, 9, 3):
            print("|".join(self.bord[i:i+3]))
            if i == 6:
                print("-"*5)

    def update(self, choice, symbol):
        if self.is_valid_move()(choice):
            self.bord[choice-1] = symbol
        return self
    

    def is_valid_move(self, choice):
        return self.bord[choice-1].isdigit()
    
    def reset_bord(self):
        self.bord = [str(i) for i in range(1,10)]

class Game():

    def __init__(self):
        self.player = [Player(),Player()]
        self.bord = Board()
        self.menu = Menu()
        self.curent_palyer_index = 0

    def start(self):
        choice = self.menu.main_menu()
        if choice == "1":
            self.setup_players()
            self.play_game()
        else:
            self.quit_game()

    def setup_players(self):
        for player in self.player:
            player.choose_name()
            player.choose_symbol()


    def play_game():
        pass

    def quite_game():
        pass

game = Game()
game.start()