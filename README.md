# UNColab

[![License](https://img.shields.io/github/license/JuezUN/INGInious?style=plastic)][license_url]
[![Contributors](https://img.shields.io/github/contributors/JuezUN/INGInious?style=plastic)](https://github.com/jhonmendex/un_colab/graphs/contributors)

UNColab es un prototipo de herramienta computacional que permite apoyar la resolución de ejercicios de programación de computadores de manera colaborativa. Esta herramienta se desarrolló conforme a un guión de aprendizaje colaborativo que permitipe realizar actividades de evaluación formativa entre pares.

UNColab fue desarrollado como un componente (Plugin) de la plataforma educativa [UNCode](https://juezun.github.io/). UNCode es una plataforma en línea para la práctica frecuente y la evaluación automática de ejercicios de programación de computadores, Jupyter Notebooks y lenguaje de descripción de hardware (VHDL / Verilog). UNCode está basado en la plataforma [INGInious](https://docs.inginious.org/) que ha sido desarrollada para la calificación automática de tareas de programación. UNCode actualmente apoya la enseñanza-aprendizaje de los cursos de programación de computadores en la Universidad Nacional de Colombia sede Bogotá.

## La herramienta está desarrolladada con las siguientes tecnologías

- [Python (with pip) 3.5+][python_url]
- [MongoDB][mongo_url]
- [ReactJs](https://es.reactjs.org/)
- [Firebase](https://firebase.google.com/)

### Instalación local de UNColab

Para implementar UNColab debe seguir los siguientes pasos:

1. Instalar el sistema INGinious: Dependiendo del sistema operativo que utilice, siga las instrucciones dadas [aquí][https://docs.inginious.org/en/v0.5/install_doc/installation.html]

2. Implementar la plataforma UNCode: para implementar UNCode en un servidor y comenzar a usarlo en sus cursos, consulte el repositorio de Implementación en el siguiente enlace: [Instalación UNCode](https://github.com/JuezUN/Deployment)

3. Dentro del la carpeta `inginious/frontend/plugins` Clonar el plugin UNColab: `git clone https://github.com/jhonmendex/un_colab.git`

4. Ubicar el archivo `configuration.yaml` dentro de la carpeta `/var/www/INGinious` y activar el plugin de la siguiente manera:

```
- plugin_module: inginious.frontend.plugins.un_colab
```

5. Reiniciar el servidor local.

Una vez realizados los pasos anteriores UNCode debe mostrar una interfaz como la siguiente:

<img src="https://firebasestorage.googleapis.com/v0/b/un-colab-chat.appspot.com/o/UNColabimage1.png?alt=media&token=9602dbbd-8e75-4972-9cad-070e7391c934" alt="captura de pantalla UNColab" width="250" \>

<img src="https://firebasestorage.googleapis.com/v0/b/un-colab-chat.appspot.com/o/UNColabimage2.png?alt=media&token=3c860c6d-191f-4b0a-829d-898158250494" alt="captura de pantalla UNColab" width="250" \>

## Licencia

Distribuido bajo la licencia AGPL-3.0. Ver [licencia][license_url] para más información.

## Contacto

En caso de preguntas técnicas, por favor envíe un correo a <jmendezl@unal.edu.co>

[license_url]:
