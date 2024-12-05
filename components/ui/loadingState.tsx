import { Loader2 } from "lucide-react";





interface Props{
    loadingText: string;
    hiddenLoaderIcon?: boolean
}

export const LoadingState = ({loadingText, hiddenLoaderIcon}: Props) => {

    return (
        <>
        {!hiddenLoaderIcon && <Loader2 className="mr-2 h-4 2-4 animate-spin"/>}
        <p>
            {loadingText}
        </p>
        </>
    )
}