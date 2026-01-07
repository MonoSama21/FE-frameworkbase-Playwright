@test @DailyTest @HU-2
Feature: Edicion de Datos Personales por Rol Otro (Personal Administrativo)
    Como personal administrativo del colegio
    Quiero poder visualizar y editar mis datos personales según sea necesario
    Para mantener mi información actualizada en el sistema y facilitar la comunicación con la comunidad educativa

    Background:
        Given estoy en la pagina de login 
        And selecciono el rol "OTRO"

    @Escenario37
    Scenario: ES-037 Validar que el rol Otro (Personal Administrativo) puede visualizar los campos en Editar Perfil
        Then ingreso mi nombre de usuario y contraseña validos
        And accedo al sistema como "OTRO"

    @EscenarioError
    Scenario: Escenario de prueba de error 
        Then ingreso mi nombre de usuario y contraseña validos
        And accedo al sistema como "OTRO" ga