import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <h2 className="note-title">{title}</h2>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="note-delete"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
