import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."}
        </div>
         <SubscriptionButton  isPro={isPro}/>
         <a href="https://buy.stripe.com/test_eVag2v7Jg4uVgkU144">
  <button>Answers by Sentry</button>
</a>

      </div>
    </div>
   );
}
 
export default SettingsPage;

// isPro={isPro} 

