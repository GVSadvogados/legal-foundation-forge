import { Quote } from "lucide-react";

type Props = {
  quote: string;
  name: string;
  area: string;
};

export function TestimonialCard({ quote, name, area }: Props) {
  return (
    <figure className="testimonial">
      <Quote className="quote-mark" size={28} strokeWidth={1.25} />
      <blockquote>“{quote}”</blockquote>
      <figcaption className="testimonial-meta">
        <div className="testimonial-name">{name}</div>
        <div className="testimonial-area">{area}</div>
      </figcaption>
    </figure>
  );
}
