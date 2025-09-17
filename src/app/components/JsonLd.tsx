type props = {
  data: Record<string, unknown>;
};

export default function JsonLd({ data }: props) {
  return (
    <script
      type="application/ld+json"
      // Per sicurezza, usiamo JSON.stringify per evitare problemi di XSS
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}