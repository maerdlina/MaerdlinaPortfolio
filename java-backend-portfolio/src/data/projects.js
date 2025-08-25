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
    description: "Приложение для ухода за комнатными растениями с отслеживанием информации о последнем поливе.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/maerdlina/PlantCare",
    // liveUrl: "https://plantcare-app.com",
    image: "/images/plant_care.png", // БЕЗ ТЕКСТА
    features: [
      "База данных растений с рекомендациями",
      "Мобильный-фриендли интерфейс"
    ]
  },
  {
    id: 3,
    type: "file",
    description: "Высокопроизводительная система распределенного хранения и обмена файлами с надежной архитектурой.",
    technologies: ["Java 21", "PostgreSQL", "H2", "Distributed Systems"],
    githubUrl: "https://github.com/maerdlina/FileDistributor",
    // liveUrl: "https://filedistributor.com",
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
    description: "3D-приложение для пробежки дома. Работает по принципу Nintendo Wii Sport, но вместо нунчака - смарт часы на Wear OS. Пользователь бежит по заранее продуманному маршруту и видит на экране передвижение своего персонажа.",
    technologies: ["Java", "Spring Boot", "Godot Engine", "JPA", "PostgreSQL"],
    githubUrl: "https://github.com/maerdlina/RunningApp",
    youtubeUrl: "https://www.youtube.com/embed/GPVNgnkwhf4", // ДЛЯ ВИДЕО
    // liveUrl: "https://runningapp-3d.com",
    // image: "https://via.placeholder.com/400x250/3182ce/ffffff", // БЕЗ ТЕКСТА
    features: [
      "3D визуализация маршрутов и рельефа",
      "Интеграция с WearOS смарт часами",
      "Подсчет кол-во метров"
    ]
  }
];