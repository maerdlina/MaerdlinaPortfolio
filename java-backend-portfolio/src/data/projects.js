export const projects = [
  {
    id: 1,
    type: "obsydian",
    description: "Real-time система синхронизации для совместной работы с заметками. Разработана с нуля серверная часть и клиентские модули.",
    technologies: ["Java", "Spring Boot", "WebSocket", "PostgreSQL", "Docker", "JPA"],
    githubUrl: "https://github.com/maerdlina/ObsidianSync",
    // liveUrl: "https://obsydiansync.com",
    youtubeUrl: "https://www.youtube.com/embed/1tYYSNAkiyE", // ДЛЯ ВИДЕО
    features: [
      "Двусторонняя синхронизация в реальном времени",
      "WebSocket + STOMP для мгновенных обновлений",
      "Механизм версионирования и разрешения конфликтов",
      "Масштабируемая микросервисная архитектура"
    ]
  },
  {
    id: 2,
    type: "plant",
    description: "Приложение для ухода за комнатными растениями с интеллектуальными напоминаниями и отслеживанием состояния.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/maerdlina/PlantCare",
    // liveUrl: "https://plantcare-app.com",
    image: "https://via.placeholder.com/400x250/38a169/ffffff", // БЕЗ ТЕКСТА
    features: [
      "Система уведомлений о поливе и уходе",
      "База данных растений с рекомендациями",
      "Визуализация графиков роста",
      "Мобильный-фриендли интерфейс"
    ]
  },
  {
    id: 3,
    type: "file",
    description: "Высокопроизводительная система распределенного хранения и обмена файлами с надежной архитектурой.",
    technologies: ["Java 21", "PostgreSQL", "H2", "Microservices", "Distributed Systems"],
    githubUrl: "https://github.com/maerdlina/FileDistributor",
    liveUrl: "https://filedistributor.com",
    image: "https://via.placeholder.com/400x250/805ad5/ffffff", // БЕЗ ТЕКСТА
    features: [
      "Распределенное хранение и репликация",
      "Высокая доступность и отказоустойчивость",
      "Оптимизированные алгоритмы передачи",
      "Модульная и расширяемая архитектура"
    ]
  },
  {
    id: 4,
    type: "running",
    description: "3D-приложение для анализа беговых тренировок с продвинутой статистикой и визуализацией маршрутов.",
    technologies: ["Java", "Spring Boot", "Godot Engine", "JPA", "PostgreSQL"],
    githubUrl: "https://github.com/maerdlina/RunningApp",
    // liveUrl: "https://runningapp-3d.com",
    image: "https://via.placeholder.com/400x250/3182ce/ffffff", // БЕЗ ТЕКСТА
    features: [
      "3D визуализация маршрутов и рельефа",
      "Анализ темпа и прогресса тренировок",
      "Интеграция с GPS и фитнес-трекерами",
      "Социальные функции и челленджи"
    ]
  }
];