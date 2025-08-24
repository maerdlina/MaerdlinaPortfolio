export const projects = [
  {
    id: 1,
    title: "ObsydianSync - Сервис синхронизации заметок",
    description: "Real-time система синхронизации для совместной работы с заметками. Разработана с нуля серверная часть и клиентские модули.",
    technologies: ["Java", "Spring Boot", "WebSocket", "PostgreSQL", "Docker", "JPA"],
    githubUrl: "https://github.com/maerdlina/ObsidianSync",
    // liveUrl: "https://obsydiansync.com",
    image: "https://via.placeholder.com/400x250/2c5282/white?text=ObsydianSync",
    features: [
      "Двусторонняя синхронизация в реальном времени",
      "WebSocket + STOMP для мгновенных обновлений",
      "Механизм версионирования и разрешения конфликтов",
      "Масштабируемая микросервисная архитектура"
    ]
  },
  {
    id: 2,
    title: "PlantCare - Мониторинг здоровья растений",
    description: "Приложение для ухода за комнатными растениями с интеллектуальными напоминаниями и отслеживанием состояния.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/maerdlina/PlantCare",
    // liveUrl: "https://plantcare-app.com",
    image: "https://via.placeholder.com/400x250/38a169/white?text=PlantCare",
    features: [
      "Система уведомлений о поливе и уходе",
      "База данных растений с рекомендациями",
      "Визуализация графиков роста",
      "Мобильный-фриендли интерфейс"
    ]
  },
    {
    id: 3,
    title: "FileDistributor - Распределенная файловая система",
    description: "Высокопроизводительная система распределенного хранения и обмена файлами с надежной архитектурой.",
    technologies: ["Java 21", "PostgreSQL", "H2", "Microservices", "Distributed Systems"],
    githubUrl: "https://github.com/maerdlina/FileDistributor",
    liveUrl: "https://filedistributor.com",
    image: "https://via.placeholder.com/400x250/805ad5/white?text=FileDistributor",
    features: [
      "Распределенное хранение и репликация",
      "Высокая доступность и отказоустойчивость",
      "Оптимизированные алгоритмы передачи",
      "Модульная и расширяемая архитектура"
    ]
  },
  {
    id: 4,
    title: "RunningApp - Трекер беговых тренировок",
    description: "3D-приложение для анализа беговых тренировок с продвинутой статистикой и визуализацией маршрутов.",
    technologies: ["Java", "Spring Boot", "Godot Engine", "JPA", "PostgreSQL"],
    githubUrl: "https://github.com/maerdlina/RunningApp",
    // liveUrl: "https://runningapp-3d.com",
    image: "https://via.placeholder.com/400x250/3182ce/white?text=RunningApp",
    features: [
      "3D визуализация маршрутов и рельефа",
      "Анализ темпа и прогресса тренировок",
      "Интеграция с GPS и фитнес-трекерами",
      "Социальные функции и челленджи"
    ]
  }
];