import os

from inginious.frontend.plugins.utils import create_static_resource_page, read_file

_static_folder_path = os.path.join(os.path.dirname(__file__), "static")
_UNCOLAB_HTML_FILE = "user_colab.html"


def init(plugin_manager, course_factory, client, config):
    plugin_manager.add_page(r'/un_colab/static/(.*)', create_static_resource_page(_static_folder_path))

    use_minified = config.get("use_minified", False)
    if use_minified:
        plugin_manager.add_hook("javascript_footer", lambda: "/un_colab/static/js/user_colab.min.js")
        plugin_manager.add_hook("css", lambda: "/un_colab/static/css/user_colab.min.css")
    else:
        plugin_manager.add_hook("javascript_footer", lambda: "/un_colab/static/js/user_colab.js")
        plugin_manager.add_hook("css", lambda: "/un_colab/static/css/user_colab.css")
    plugin_manager.add_hook("additional_body_html",
                            lambda: read_file(_static_folder_path, _UNCOLAB_HTML_FILE))
