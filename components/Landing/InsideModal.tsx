import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { UserIcon, LightbulbIcon } from "lucide-react";
import { useSDK } from "@metamask/sdk-react";

interface InsideModalProps {
  onSelectUserType: (type: string) => void;
}

export default function InsideModal({ onSelectUserType }: InsideModalProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [account, setAccount] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { sdk, connected, chainId } = useSDK();

  const connect = async () => {
    setLoading(true);
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("Failed to connect:", err);
    } finally {
      setLoading(false);
    }
  };

  const userTypes = [
    { type: 'Investor', icon: UserIcon },
    { type: 'Developer', icon: LightbulbIcon },
  ];

  const handleSelection = (type: string) => {
    setSelectedType(type);
    onSelectUserType(type);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">You are?</h2>
          {connected && (
            <div className="mb-4">
              {chainId && <div>{`Connected chain: ${chainId}`}</div>}
              {account && <div>{`Connected account: ${account}`}</div>}
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {userTypes.map(({ type, icon: Icon }) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                className={`h-40 text-lg font-semibold flex flex-col items-center justify-center ${
                  selectedType === type ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleSelection(type)}
              >
                <Icon className="w-16 h-16 mb-2" />
                {type}
              </Button>
            ))}
          </div>
          <Button 
            className="w-full" 
            disabled={loading}
            onClick={connect}
          >
            {loading ? "Connecting..." : "Connect Wallet"}
          </Button>
        </CardContent>
      </div>
    </div>
  );
}