from rest_framework import serializers
from .models import Task

#Convierte tipo de datos de python a JSON
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id', 'title', 'description', 'done')
        fields = '__all__'