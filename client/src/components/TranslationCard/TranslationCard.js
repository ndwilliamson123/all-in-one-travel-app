export default function TranslationCard({ translation }) {
  return (
    <li>
      <p>{translation.phrase}</p>
      <p>{translation.translatedText}</p>
    </li>
  );
}
