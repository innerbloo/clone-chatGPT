import { Button } from '@/components/ui/button';

export default function Submit({
    children,
    ...others
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button type="submit" {...others}>
            {children}
        </Button>
    );
}
