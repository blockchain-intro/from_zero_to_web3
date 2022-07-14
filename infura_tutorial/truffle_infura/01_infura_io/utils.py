from configparser import ConfigParser


def read_params(file, section):
    config = ConfigParser()
    config.read(file, encoding='UTF-8')
    conf = config.items(section)
    return dict(conf)


