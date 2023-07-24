interface IconsCollection {
    toolTipIcons: {
        [key: string]: ({ className }: {
            className?: string | undefined;
        }) => JSX.Element
    },
    timeLineIcons: {
        [key: string]: ({ className }: {
            className?: string | undefined;
        }) => JSX.Element
    }
}         

