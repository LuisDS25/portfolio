---
slug: "sistema-inteligente-de-gestion-de-citas-medicas-con-sincronizacion-en-tiempo-real"
title: "Sistema inteligente de gestión de citas médicas con sincronización en tiempo real"
hook: "Sistema que automatiza completamente la gestión de citas médicas, eliminando conflictos de agenda mediante sincronización bidireccional con Google Calendar y notificaciones automatizadas por WhatsApp."
description: "Desarrollé una solución web integral para la gestión de citas en un consultorio dental, enfocada en automatizar procesos manuales mediante integración con servicios externos. El sistema permite administrar disponibilidad, agendar, reagendar y cancelar citas, manteniendo sincronización en tiempo real entre el sistema interno, Google Calendar y la comunicación con pacientes vía WhatsApp."
context: "El proceso de agendamiento se realizaba manualmente vía WhatsApp y se registraba en el calendario personal del doctor, generando dependencia operativa del doctor o su asistente y limitando la capacidad de respuesta en momentos de alta demanda."
role: "Fullstack Developer"

challenges:
  - "Sincronización bidireccional entre sistema interno y Google Calendar (crear, actualizar y eliminar eventos en ambos sentidos)."
  - "Implementación y gestión de webhooks con manejo de expiración y renovación automática."
  - "Integración con Twilio API y configuración de Meta Business para mensajería automatizada."
  - "Diseño de lógica de disponibilidad con estados (LIBRE, OCUPADO, APARTADO) para evitar condiciones de carrera"
  - "Prevención de solapamiento de horarios mediante validaciones estrictas en backend."
  - "Orquestación del flujo de agendamiento (paciente → cita → horario) entre frontend y backend."
  - "Manejo centralizado de errores para respuestas consistentes en API."
decisions:
  - "Uso de Spring Boot para acelerar el desarrollo con buenas prácticas enterprise y un ecosistema robusto."
  - "Implementación de arquitectura REST por su estandarización y facilidad de integración."
  - "Uso de webhooks sobre polling para mantener sincronización en tiempo real y reducir latencia."
  - "Contenerización con Docker para asegurar consistencia entre entornos y facilitar despliegue."
  - "Separación frontend/backend para desacoplamiento, escalabilidad y seguridad."
  - "Uso de NGINX como reverse proxy para manejo de tráfico y HTTPS."
actions:
  - "Diseñé e implementé endpoints REST para la gestión completa de citas."
  - "Construí una arquitectura en capas con principios de arquitectura hexagonal."
  - "Implementé validaciones backend para garantizar consistencia ante múltiples fuentes de datos."
  - "Desarrollé formularios reactivos en Angular para validación en cliente."
  - "Integré Google Calendar API y Twilio API mediante webhooks."
  - "Implementé control de concurrencia para evitar conflictos de horarios."
  - "Configuré entorno productivo en VPS con NGINX y HTTPS."
  - "Estandaricé el despliegue con Docker y Docker Compose."
  - "Implementé pruebas unitarias con JUnit y Mockito para lógica crítica."

result: "El sistema permite gestionar completamente el ciclo de vida de las citas:definición de disponibilidad, agendamiento, reagendamiento y cancelación, sincronizado en tiempo real con Google Calendar y con notificaciones automatizadas vía WhatsApp para pacientes y doctor."

impact:
  - "Eliminación de conflictos y sobreposición de citas."
  - "Reducción significativa de tiempos de espera para pacientes."
  - "Automatización del proceso de comunicación (antes manual)."
  - "Mejora en la experiencia del usuario al eliminar incertidumbre en el agendamiento."
  - "Unificación de múltiples herramientas en un flujo consistente y confiable."
stack:
  - "Java"
  - "Spring Boot"
  - "Angular"
  - "MySQL"
  - "Hibernate"
  - "Docker"
  - "Virtual Private Server"
learnings:
  - "Diseño de sistemas distribuidos con múltiples fuentes de verdad."
  - "Integración robusta de APIs externas en entornos productivos."
  - "Manejo de concurrencia y consistencia de datos."
  - "Construcción de APIs REST escalables."
  - "Despliegue y configuración de infraestructura en VPS."
  - "Testing de lógica crítica en backend."

image: "sistema_citas.png"


---
