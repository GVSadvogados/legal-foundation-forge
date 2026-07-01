import { Play } from "lucide-react";

type Props = {
  title: string;
  description?: string;
  duration?: string;
};

export function VideoCard({ title, description, duration }: Props) {
  return (
    <article className="video-card">
      <div className="video-thumb">
        <div className="play-badge">
          <div className="play-circle">
            <Play size={28} fill="currentColor" />
          </div>
        </div>
        {duration ? <div className="duration-pill">{duration}</div> : null}
      </div>
      <h3 className="video-title">{title}</h3>
      {description ? <p className="video-copy">{description}</p> : null}
    </article>
  );
}
