class DemoPage(object):
    """ A simple demo page showing how to add a new page """

    def GET(self):
        """ GET request """
        return "This is a simple demo plugin"


def init(plugin_manager, course_factory, client, plugin_config):
    """ Plugin colaborativo """
    plugin_manager.add_page("/uncolab", DemoPage)