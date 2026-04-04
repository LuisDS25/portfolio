---
slug: "medical-appointment-management-system-with-real-time-synchronization"
title: "Medical appointment management system with real-time synchronization"
hook: "A system that fully automates the management of medical appointments, eliminating scheduling conflicts through bidirectional synchronization with Google Calendar and automated notifications via WhatsApp."
description: "I developed a comprehensive web-based appointment management solution for a dental practice, focused on automating manual processes through integration with external services. The system allows for managing availability, scheduling, rescheduling, and canceling appointments, while maintaining real-time synchronization between the internal system, Google Calendar, and communication with patients via WhatsApp."
context: "The scheduling process was done manually via WhatsApp and recorded in the doctor's personal calendar, creating operational dependence on the doctor or his assistant and limiting the ability to respond during times of high demand."
role: "Fullstack Developer"

challenges:
  - "Bidirectional synchronization between the internal system and Google Calendar (creating, updating, and deleting events in both directions)"
  - "Implementation and management of webhooks with expiration and automatic renewal handling"
  - "Integration with the Twilio API and configuration of Meta Business for automated messaging"
  - "Design of availability logic with states (FREE, BOOKED, RESERVED) to prevent race conditions"
  - "Prevention of schedule overlaps through strict backend validations"
  - "Orchestration of the scheduling flow (patient → appointment → time) between the frontend and backend"
  - "Centralized error handling for consistent API responses"
decisions:
  - "Use of Spring Boot to accelerate development with enterprise best practices and a robust ecosystem"
  - "Implementation of REST architecture for its standardization and ease of integration"
  - "Use of webhooks over polling to maintain real-time synchronization and reduce latency"
  - "Containerization with Docker to ensure consistency across environments and facilitate deployment"
  - "Frontend/backend separation for decoupling, scalability, and security"
  - "Use of NGINX as a reverse proxy for traffic handling and HTTPS"
actions:
  - "I designed and implemented REST endpoints for complete appointment management"
  - "I built a layered architecture using hexagonal architecture principles"
  - "I implemented backend validations to ensure consistency across multiple data sources"
  - "I developed reactive forms in Angular for client-side validation"
  - "I integrated the Google Calendar API and Twilio API using webhooks"
  - "I implemented concurrency control to prevent scheduling conflicts"
  - "I set up a production environment on a VPS with NGINX and HTTPS"
  - "I standardized the deployment using Docker and Docker Compose"
  - "I implemented unit tests with JUnit and Mockito for critical logic"

result: "The system allows complete management of the appointment lifecycle: defining availability, scheduling, rescheduling and cancellation, synchronized in real time with Google Calendar and with automated notifications via WhatsApp for patients and doctor."

impact:
  - "Elimination of appointment conflicts and overlaps"
  - "Significant reduction in patient wait times"
  - "Automation of the communication process (previously manual)"
  - "Improved user experience by eliminating scheduling uncertainty"
  - "Unification of multiple tools into a consistent and reliable workflow"
stack:
  - "Java"
  - "Spring Boot"
  - "Angular"
  - "MySQL"
  - "Hibernate"
  - "Docker"
  - "Virtual Private Server"
learnings:
  - "Design of distributed systems with multiple sources of truth"
  - "Robust integration of external APIs in production environments"
  - "Handling concurrency and data consistency"
  - "Building scalable REST APIs"
  - "Deployment and configuration of infrastructure on VPS"
  - "Testing of critical backend logic"

image: "sistema_citas.png"


---
