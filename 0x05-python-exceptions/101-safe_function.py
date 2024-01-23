mport sys


def safe_function(fct, *args):
    try:
        integer = fct(*args)
        return (integer)
    except Exception as error:
        print("Exception: {}".format(error), file=sys.stderr)
        return (None)
