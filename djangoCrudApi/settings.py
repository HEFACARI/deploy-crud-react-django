"""
Django settings for djangoCrudApi project.

Generated by 'django-admin startproject' using Django 5.1.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.1/ref/settings/
"""

from pathlib import Path
import os #Esta importacion crea la carpeta para importar los archivos estaticos de nuestro pryecto
import dj_database_url #Esta importacion ayuda a sacar todos los datos de la base de datos automaticamente

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-48)8doh4l5b79ea-@9rs+_m$uk^mdwru0%11*gw168@e-f@f_3'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
    "localhost",
    "web-production-4e19.up.railway.app",
]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders', #Sirve para comunicarnos con otro backend o frontend
    'rest_framework', #Vamos a poder crear APIS al instante, CRUDS, seguridad y todo lo que necesita nuestro API por defecto
    'coreapi',
    'tasks',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    "whitenoise.middleware.WhiteNoiseMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'djangoCrudApi.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'djangoCrudApi.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases


DATABASES = {
    #En produccion se utilizara postgresql y en desarrollo sqlite, osea se utilizaran las dos bases de datos dependiendo del contexto
    "DATABASE_PUBLIC_URL": "postgresql://postgres:zjGEaUhKWdEdbLPhocBfLVHyqtyObzDS@junction.proxy.rlwy.net:18620/railway",
    "DATABASE_URL": "postgresql://postgres:zjGEaUhKWdEdbLPhocBfLVHyqtyObzDS@postgres.railway.internal:5432/railway",
    "PGDATA": "/var/lib/postgresql/data/pgdata",
    "PGDATABASE": "railway",
    "PGHOST": "postgres.railway.internal",
    "PGPASSWORD": "zjGEaUhKWdEdbLPhocBfLVHyqtyObzDS",
    "PGUSER": "postgres",
    "POSTGRES_DB": "railway",
    "POSTGRES_PASSWORD": "zjGEaUhKWdEdbLPhocBfLVHyqtyObzDS",
    "POSTGRES_USER": "postgres",
    "SSL_CERT_DAYS": "820"
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles') #Crea la carpeta staticfiles y la une al projecto para poder hacer el deploy

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

#LISTA PARA DARLE LA AUTORIZACION DE CUALES SERVIDORES PUEDEN CONECTARSE CON DJANGO

CORS_ALLOWED_ORIGINS = ["http://localhost:5174"]
# CORS_ALLOWED_ORIGINS = ["http://localhost:5174"]

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
}

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage" #Guardar en memoria cache los servicios que ya se sirvieron

