import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { apiClient, endpoints } from '@/lib/api';

export const ApiTest: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const testApiConnection = async () => {
    setStatus('testing');
    setError('');
    setResult(null);

    try {
      // Test basic API connection
      const response = await fetch('http://localhost:8000/api/home', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
        setStatus('success');
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setStatus('error');
    }
  };

  const testLaravelHealth = async () => {
    setStatus('testing');
    setError('');
    setResult(null);

    try {
      // Test Laravel health endpoint
      const response = await fetch('http://localhost:8000', {
        method: 'GET',
      });

      if (response.ok) {
        const text = await response.text();
        setResult({ 
          message: 'Laravel backend is running', 
          status: response.status,
          content: text.substring(0, 200) + '...'
        });
        setStatus('success');
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setStatus('error');
    }
  };

  const testServicesEndpoint = async () => {
    setStatus('testing');
    setError('');
    setResult(null);

    try {
      // Test services API endpoint
      const response = await fetch('http://localhost:8000/api/services', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
        setStatus('success');
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setStatus('error');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🔗 API Connection Test
          <Badge variant={status === 'success' ? 'default' : status === 'error' ? 'destructive' : 'secondary'}>
            {status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
                 <div className="space-y-2">
           <Button 
             onClick={testApiConnection} 
             disabled={status === 'testing'}
             className="w-full"
           >
             Test API Home Endpoint
           </Button>
           <Button 
             onClick={testLaravelHealth} 
             disabled={status === 'testing'}
             variant="outline"
             className="w-full"
           >
             Test Laravel Health
           </Button>
           <Button 
             onClick={testServicesEndpoint} 
             disabled={status === 'testing'}
             variant="outline"
             className="w-full"
           >
             Test Services Endpoint
           </Button>
         </div>

        {status === 'testing' && (
          <div className="text-center text-sm text-muted-foreground">
            Testing connection...
          </div>
        )}

        {status === 'success' && result && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <h4 className="font-medium text-green-800">✅ Success!</h4>
            <pre className="text-xs text-green-700 mt-1 overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

        {status === 'error' && error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <h4 className="font-medium text-red-800">❌ Error</h4>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
        )}

        <div className="text-xs text-muted-foreground space-y-1">
          <div>Frontend: http://localhost:8081</div>
          <div>Backend: http://localhost:8000</div>
          <div>API: http://localhost:8000/api</div>
        </div>
      </CardContent>
    </Card>
  );
};
