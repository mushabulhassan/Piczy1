import React from "react";
import '../styles/languageSelector.css';

function LanguageSelector() {
  return (
    <select className="language-selector">
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="zh">中文</option>
      <option value="ar">العربية</option>
      <option value="ru">Русский</option>
      <option value="hi">हिन्दी</option>
      <option value="pt">Português</option>
    </select>
  );
}

export default LanguageSelector;