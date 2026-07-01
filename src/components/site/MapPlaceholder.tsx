import { MapPin } from "lucide-react";

export function MapPlaceholder() {
  return (
    <div className="map">
      <div className="map-badge">
        <MapPin size={30} />
      </div>
    </div>
  );
}
