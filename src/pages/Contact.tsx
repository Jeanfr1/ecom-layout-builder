import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gradient"
        >
          Contact Us
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-secondary/50 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="bg-background/50" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="bg-background/50" />
                  </div>
                  <div>
                    <Input placeholder="Subject" className="bg-background/50" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" className="bg-background/50" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-secondary/50 backdrop-blur-sm border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 text-primary">
                  <Mail className="h-6 w-6" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm">support@techverse.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-sm border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 text-primary">
                  <Phone className="h-6 w-6" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-sm border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 text-primary">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-sm">123 Tech Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;