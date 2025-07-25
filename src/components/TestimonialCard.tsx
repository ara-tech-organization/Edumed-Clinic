import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover-lift border-border/50">
      <CardContent className="p-12">
        {/* Rating Stars */}
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-muted-foreground mb-6 leading-relaxed">
          "{content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center space-x-3">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-8 h-8 rounded-full object-cover border-2 border-border"
            />
          )}
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;