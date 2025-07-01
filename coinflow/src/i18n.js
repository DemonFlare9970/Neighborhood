// src/i18n.js
// Simple i18n utility for CoinFlow

const translations = {
  en: {
    settings: {
      notifications: "Notifications:",
      emailUpdates: "Email Updates:",
      currency: "Currency:",
      language: "Language:",
      privacy: "Privacy:",
      theme: "Theme:",
      fontSize: "Font Size:",
      accessibility: "Accessibility:",
      save: "Save Settings",
      saved: "Settings saved!",
      failed: "Failed to save settings.",
      settings: "Settings"
    }
  },
  es: {
    settings: {
      notifications: "Notificaciones:",
      emailUpdates: "Actualizaciones por correo:",
      currency: "Moneda:",
      language: "Idioma:",
      privacy: "Privacidad:",
      theme: "Tema:",
      fontSize: "Tamaño de fuente:",
      accessibility: "Accesibilidad:",
      save: "Guardar configuración",
      saved: "¡Configuración guardada!",
      failed: "Error al guardar configuración.",
      settings: "Configuración"
    }
  },
  fr: {
    settings: {
      notifications: "Notifications:",
      emailUpdates: "Mises à jour par e-mail:",
      currency: "Devise:",
      language: "Langue:",
      privacy: "Confidentialité:",
      theme: "Thème:",
      fontSize: "Taille de police:",
      accessibility: "Accessibilité:",
      save: "Enregistrer les paramètres",
      saved: "Paramètres enregistrés!",
      failed: "Échec de l'enregistrement des paramètres.",
      settings: "Paramètres"
    }
  },
  de: {
    settings: {
      notifications: "Benachrichtigungen:",
      emailUpdates: "E-Mail-Updates:",
      currency: "Währung:",
      language: "Sprache:",
      privacy: "Datenschutz:",
      theme: "Thema:",
      fontSize: "Schriftgröße:",
      accessibility: "Barrierefreiheit:",
      save: "Einstellungen speichern",
      saved: "Einstellungen gespeichert!",
      failed: "Einstellungen konnten nicht gespeichert werden.",
      settings: "Einstellungen"
    }
  },
  hi: {
    settings: {
      notifications: "सूचनाएं:",
      emailUpdates: "ईमेल अपडेट्स:",
      currency: "मुद्रा:",
      language: "भाषा:",
      privacy: "गोपनीयता:",
      theme: "थीम:",
      fontSize: "फ़ॉन्ट आकार:",
      accessibility: "सुलभता:",
      save: "सेटिंग्स सहेजें",
      saved: "सेटिंग्स सहेजी गई!",
      failed: "सेटिंग्स सहेजने में विफल.",
      settings: "सेटिंग्स"
    }
  }
};

export function t(lang, key) {
  const [section, item] = key.split('.');
  return (
    translations[lang]?.[section]?.[item] ||
    translations['en']?.[section]?.[item] ||
    key
  );
}
