export function Spinner() {
    return (
        <div className="mt-6 w-full flex items-center justify-center flex-col gap-2">
            <div className="h-16 w-16 border-4 border-zinc-300 border-t-zinc-600 rounded-full animate-spin"/>
            <span>Carregando...</span>
        </div>
    );
};
