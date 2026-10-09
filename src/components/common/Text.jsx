export default function Text({ paragraphs }) {
  return (
    <div className="body-copy">
      {paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}