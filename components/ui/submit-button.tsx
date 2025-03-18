'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export function SubmitButton({ children, className }: { children: React.ReactNode, className?: string }) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn("mt-4 w-full", className)}
      type="submit"
      disabled={pending}
    >
      {pending ? '处理中...' : children}
    </Button>
  );
}