import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Star, Award, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const DoctorDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedSlot, setSelectedSlot] = useState("");

  // In a real app, we would fetch this data based on the ID
  const doctor = {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
    rating: 5,
    education: "Harvard Medical School",
    experience: "15+ years",
    phone: "(555) 123-4567",
  };

  const handleBooking = () => {
    if (!selectedSlot) {
      toast({
        title: "Please select a time slot",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Appointment Booked!",
      description: `Your appointment with ${doctor.name} is confirmed for ${selectedSlot}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="flex flex-row gap-6 items-start">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-muted"
            />
            <div>
              <CardTitle className="text-2xl mb-2">{doctor.name}</CardTitle>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{doctor.specialty}</Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Star className="w-3 h-3" /> {doctor.rating}.0
                </Badge>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>{doctor.education}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{doctor.phone}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold text-lg mb-4">Available Time Slots</h3>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  variant={selectedSlot === slot ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </Button>
              ))}
            </div>
            <Button 
              className="w-full" 
              size="lg"
              onClick={handleBooking}
            >
              Book Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDetails;