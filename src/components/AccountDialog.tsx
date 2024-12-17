import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User } from "lucide-react";
import { useSession } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const AccountDialog = () => {
  const session = useSession();

  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select(`
          *,
          order_items (*)
        `)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!session,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-primary transition-all duration-300 group relative">
          <User className="w-6 h-6 transition-transform group-hover:scale-110" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>My Account</DialogTitle>
        </DialogHeader>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#a855f7',
                    brandAccent: '#9333ea',
                  }
                }
              }
            }}
            providers={[]}
          />
        ) : (
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                {orders?.length === 0 ? (
                  <p className="text-center text-muted-foreground">No orders yet</p>
                ) : (
                  <div className="space-y-4">
                    {orders?.map((order) => (
                      <div key={order.id} className="rounded-lg border p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">
                            {format(new Date(order.created_at), "PPP")}
                          </span>
                          <span className="capitalize px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                            {order.status}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Order #{order.id.slice(0, 8)}</p>
                          <p className="text-sm text-muted-foreground">
                            Total: ${order.total_amount}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Items: {order.order_items.length}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="profile">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{session.user.email}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AccountDialog;