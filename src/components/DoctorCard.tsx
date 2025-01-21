import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  location: string;
  nextAvailable: string;
  image: string;
  rating: number;
}

export function DoctorCard({ id, name, specialty, location, nextAvailable, image, rating }: DoctorCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row gap-4 items-start">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-muted"
        />
        <div className="flex-1">
          <CardTitle className="text-xl mb-1">{name}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <Badge variant="secondary">{specialty}</Badge>
            <span className="text-yellow-500">{"★".repeat(rating)}</span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Next Available: {nextAvailable}</span>
          </div>
        </div>
        <Button 
          className="w-full" 
          onClick={() => navigate(`/doctor/${id}`)}
        >
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
}