from rest_framework import serializers
from accounts.models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=True, write_only=True)
    class Meta:
        model = CustomUser
        fields = '__all__'

        extra_kwargs = {
            "user_id": {
                "read_only": True
            },
            "user_name": {
                "required": True
            },
            "user_email": {
                "required": True
            }
        }
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
