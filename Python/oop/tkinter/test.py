import tkinter as tk

def main():
    """Initializes the GUI and handles button clicks."""
    root = tk.Tk()
    root.title("Click Counter")

    # Initialize counter variable outside functions to persist
    counter = tk.IntVar(value=10)

    def increment_counter():
        """Increments the counter and updates the label."""
        counter.set(counter.get() + 1)
        update_label()

    def update_label():
        """Updates the label with the current counter value."""
        value_label.config(text=f"Clicks: {counter.get()}")

    def refresh_label():
        """Refreshes the label every 5 seconds."""
        update_label()
        root.after(5000, refresh_label)

    button = tk.Button(root, text="+", command=increment_counter)
    value_label = tk.Label(root, text=f"Clicks: {counter.get()}")

    button.pack(pady=20)
    value_label.pack(pady=10)

    # Start the automatic refresh cycle
    root.after(5000, refresh_label)

    root.mainloop()


main()