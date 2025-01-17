async function getColorDefinition() {
  const storage = await browser.storage.local.get(["waifuThemes", "currentThemeId"]);
  const themes = storage.waifuThemes.themes;

  const currentTheme = themes[storage.currentThemeId];

  const {colors} = currentTheme.definition;

  return colors;
}

async function applyTextSelection() {
  const {accentColor, selectionForeground, selectionBackground} = await getColorDefinition();
  const style = `:root{
  caret-color: ${accentColor} !important; 
}
::selection{
  color: ${selectionForeground} !important;
  background-color: ${selectionBackground} !important;
}
`;
  /*Add style to HTML document*/
  const styleText = document.createTextNode(style);
  const styleTag = document.createElement('style');
  styleTag.id = 'doki_selection';
  styleTag.append(styleText);
  document.head.append(styleTag);
}

applyTextSelection();