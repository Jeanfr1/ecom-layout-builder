import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Newsletter = () => {
  return (
    <div className="bg-secondary/50 backdrop-blur-xl rounded-2xl p-12 max-w-md">
      <div className="space-y-6">
        <h3 className="text-2xl text-white font-mono">
          Sign up to receive updates on new products and special offers
        </h3>
        
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        />
        
        <div className="flex items-center space-x-2">
          <Checkbox id="subscribe" />
          <label htmlFor="subscribe" className="text-sm text-white/80">
            Yes, subscribe me to your newsletter.
          </label>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;