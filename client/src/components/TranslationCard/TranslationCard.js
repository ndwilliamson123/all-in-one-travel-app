export default function TranslationCard({ translation }) {
  return (
    <li>
      <p>English: {translation.phrase}</p>
      <p>Translation: {translation.translatedText}</p>
    </li>
  );
}
