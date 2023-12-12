export default function createParagraphs(text) {
    const newText = text.split('\n').map((item, i) => <p key={i}>{item}</p>);
    return newText;
  }