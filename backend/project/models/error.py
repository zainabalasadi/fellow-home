class SignUpError(Exception):
    def __init__(self, message):
        super().__init__()
        self.message = message

    def __str__(self):
        return "{}".format(self.message)