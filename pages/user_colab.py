import os

from inginious.frontend.pages.utils import INGIniousAuthPage
from .constants import base_renderer_path, get_use_minified

from inginious.common.tasks_problems import CodeProblem
from inginious.frontend.task_problems import DisplayableCodeProblem

path_to_plugin = os.path.abspath(os.path.dirname(__file__))


class UserColabPage(INGIniousAuthPage, DisplayableCodeProblem):
    def GET_AUTH(self, course_id):

        if get_use_minified():
            self.template_helper.add_javascript("/statistics/static/js/user_colab.min.js")
            self.template_helper.add_css("/statistics/static/css/user_colab.min.css")
        else:
            self.template_helper.add_javascript("/statistics/static/js/user_colab.js")
            self.template_helper.add_css("/statistics/static/css/user_colab.css")

        return (
            self.template_helper
                .get_custom_renderer(base_renderer_path())
                .user_statistics(course_id)
        )

    _available_languages = {
        "javajavadu": "Javajavadu"}

    @classmethod
    def get_renderer(cls, template_helper):
        """ Get the renderer for this class problem """
        return template_helper.get_custom_renderer(os.path.join(path_to_plugin, "templates"), False)

    @classmethod
    def show_editbox(cls, template_helper, key):
        renderer = UserColabPage.get_renderer(template_helper)
        return renderer.user_colab(key, cls._available_languages)