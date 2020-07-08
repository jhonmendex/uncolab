from inginious.frontend.plugins.utils.admin_api import AdminApi


class ConnectChatApi(AdminApi):
    def API_GET(self):
        return 200, {'data': 'respuesta desde el server'}
