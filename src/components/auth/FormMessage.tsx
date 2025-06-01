type Props = {
    message: string;
};

export default function FormMessage({ message }: Props) {
    return <p className={'text-sm text-rose-600 ml-1 mt-1'}>{message}</p>;
}
