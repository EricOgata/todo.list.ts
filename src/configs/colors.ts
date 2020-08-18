const colors = {
    black: '#000000',
    blue: '#3179ba',
    prussianBlue: '#091e42',
    gray: '#ebecf0',
    green: '#5aac44',
    white: '#ffffff',
};

/**
 * Color name pattern.
 * <name><% of tranparency>
 * ex.
 * white24: #ffffff + 3d transparency.
 */
const transparencyColors = {
    prussianBlue25: `${colors.prussianBlue}40`,
    white25: `${colors.white}40`,
    white35: `${colors.white}59`,
};

export { colors, transparencyColors };
