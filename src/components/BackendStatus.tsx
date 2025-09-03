import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Loader2, Server } from 'lucide-react';

interface BackendStatusProps {
  className?: string;
}

export const BackendStatus: React.FC<BackendStatusProps> = ({ className }) => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const checkBackend = async () => {
    setStatus('checking');
    setError('');
    setResponse(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/home');
      if (response.ok) {
        const data = await response.json();
        setResponse(data);
        setStatus('connected');
      } else {
        setError(`HTTP ${response.status}: ${response.statusText}`);
        setStatus('disconnected');
      }
    } catch (err: any) {
      setError(err.message || 'Connection failed');
      setStatus('disconnected');
    }
  };

  useEffect(() => {
    checkBackend();
  }, []);

  const getStatusIcon = () => {
    switch (status) {
      case 'checking':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'connected':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'disconnected':
        return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'checking':
        return <Badge variant="secondary">Checking...</Badge>;
      case 'connected':
        return <Badge variant="default" className="bg-green-500">Connected</Badge>;
      case 'disconnected':
        return <Badge variant="destructive">Disconnected</Badge>;
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Server className="h-5 w-5" />
          Backend Status
        </CardTitle>
        <CardDescription>
          Laravel Backend Connection Status
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Status:</span>
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            {getStatusBadge()}
          </div>
        </div>

        {status === 'connected' && response && (
          <div className="rounded-lg bg-green-50 p-3">
            <h4 className="font-medium text-green-800">Backend Response:</h4>
            <pre className="mt-2 text-sm text-green-700">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}

        {status === 'disconnected' && error && (
          <div className="rounded-lg bg-red-50 p-3">
            <h4 className="font-medium text-red-800">Connection Error:</h4>
            <p className="mt-2 text-sm text-red-700">{error}</p>
          </div>
        )}

        <div className="flex gap-2">
          <Button onClick={checkBackend} variant="outline" size="sm">
            Test Connection
          </Button>
          <Button 
            onClick={() => window.open('http://127.0.0.1:8000/api/home', '_blank')} 
            variant="outline" 
            size="sm"
          >
            Open in Browser
          </Button>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>Backend URL: http://127.0.0.1:8000</p>
          <p>API Endpoint: /api/home</p>
        </div>
      </CardContent>
    </Card>
  );
};

