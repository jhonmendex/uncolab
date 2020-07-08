from ..constants import base_renderer_path
from inginious.frontend.pages.utils import INGIniousAuthPage


class ColabChat(INGIniousAuthPage):
    def GET_AUTH(self, course_id):
        self.template_helper.add_javascript("https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js")
        return (
            self.template_helper
                .get_custom_renderer(base_renderer_path())
                .user_colab(course_id))
