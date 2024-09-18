from django.shortcuts import render
from rest_framework import viewsets #Me ayuda creando una interfaz para el CRUD 
from .serializer import TaskSerializer #Me dice cuales campos o columnas de la tabla quiero compartir con el frontend u otro servidor

from .models import Task #Que campos vamos a estar obteniendo o cuales van a estar siendo consultados

# Create your views here.

#Esta funcion me dice cuales campos van a estar siendo consultados
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer #Esta variable tiene que ser escrita en camel case
    queryset = Task.objects.all()