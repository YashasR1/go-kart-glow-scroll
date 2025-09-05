import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              GRIPS <span className="text-primary"> GOKARTING</span>
            </h3>
            <p className="text-muted-foreground">
              The ultimate destination for high-speed racing excitement.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Corporate Contact:</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <p className="text-sm">
                    Shabeer: <a href="tel:+919845011007" className="text-primary ">+91 9845011007</a>
                  </p>
                  <p className="text-sm">
                    Javad: <a href="tel:+918861011007" className="text-primary ">+91 8861011007</a>
                  </p>
                  <p className="text-sm">
                    Azeem: <a href="tel:+919902675091" className="text-primary ">+91 9902675091</a>
                  </p>
                  <p className="text-sm font-semibold mt-2">Track Details:</p>
                  <p className="text-sm">
                    Murthy: <a href="tel:+919845589835" className="text-primary ">+91 9845589835</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm font-medium">
                  <p className="text-foreground">
                    Sy.No:68, Anchepalya,<br/>
                    Mysore Road, Bangalore 560 074,<br/>
                    Karnataka, INDIA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="font-semibold text-foreground">Weekdays :</span>
                <span>10:30 AM To 6:30 PM</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-foreground">Weekends :</span>
                <span>10:30 AM To 9:30 PM</span>
              </div>
              <p className="text-foreground text-sm mt-4 italic font-medium">Please contact between 10:30 AM to 7:00 PM</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Tag us in your racing photos for a chance to be featured!
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Grips Gokarting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;