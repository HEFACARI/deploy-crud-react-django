#Todo este codigo esta generando las rutas GET, POST, PUT Y DELETE, no tenemos que hacerlo manualmente

from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import TaskView

#Api version
router = routers.DefaultRouter()
router.register(r'tasks', TaskView, 'tasks') #La r es una forma de garantizar que los caracteres en la cadena sean interpretados literalmente.

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Task API"))
]

