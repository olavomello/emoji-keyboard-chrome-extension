// Emojis JSON
import emojis from "../../json/emojis.json";
// CSS
import "./style.css";

// Generate emoji keyboard 
export default function EmojiKeyboard() {
  // Reading JSON file
  const emojisJson = JSON.parse(JSON.stringify(emojis));
  // Return JSX Keyboard
  return (
    <div className="keyboard">
      {emojisJson.data.map((emoji, i) => {
        return (
          <button
            key={i}
            className="key"
            onClick={() => navigator.clipboard.writeText(emoji.emoji)}
            title={`Click to copy : ${emoji.name}`}
          >
            {emoji.emoji}
          </button>
        );
      })}
    </div>
  );
}