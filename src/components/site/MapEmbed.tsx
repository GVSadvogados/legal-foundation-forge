import { siteAddress } from "@/data";

export function MapEmbed() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(siteAddress)}&z=16&output=embed`;

  return (
    <div className="map">
      <iframe
        className="map-frame"
        src={src}
        title="Localização do escritório no mapa"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
