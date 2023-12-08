export default {
    root: ({ props }) => ({
        class: [
            "inline-block relative",
            "w-10 h-4",
            {
                "opacity-40 select-none pointer-events-none cursor-default":
                    props.disabled,
            },
        ],
    }),
    slider: ({ instance, props, state }) => ({
        class: [
            // Position
            "absolute top-0 left-0 right-0 bottom-0 before:transform",
            { "before:translate-x-5": props.modelValue },
            { "before:-translate-x-1": !props.modelValue },

            // Shape
            "rounded-2xl",

            // Before:
            "before:absolute before:top-1/2",
            "before:-mt-3",
            "before:h-6 before:w-6",
            "before:rounded-full",
            "before:duration-200",
            "before:flex before:justify-center before:items-center",
            "before:[text-shadow:0px_0px_WHITE] before:text-transparent",
            { "before:ring-4": state.focused },
            {
                "before:bg-surface-500 before:dark:bg-surface-500 before:content-['➖']":
                    !props.modelValue,
                "before:content-['✔️']": props.modelValue,
                "before:bg-violet-500 before:ring-violet-300":
                    !instance.$attrs.type & props.modelValue,
                "before:bg-amber-500 before:ring-amber-300":
                    instance.$attrs.type === "accent" && props.modelValue,
            },

            // Colors
            "border border-transparent",
            {
                "bg-surface-200 dark:bg-surface-400 before:ring-surface-200 dark:before:ring-surface-400":
                    !props.modelValue,
                "bg-violet-300": !instance.$attrs.type & props.modelValue,
                "bg-amber-300":
                    instance.$attrs.type === "accent" && props.modelValue,
            },

            // States
            {
                "hover:before:bg-surface-400 hover:dark:before:bg-surface-600":
                    !props.modelValue,
                "hover:before:bg-violet-600":
                    !instance.$attrs.type & props.modelValue,
                "hover:before:bg-amber-600":
                    instance.$attrs.type === "accent" && props.modelValue,
            },

            // Transition
            "transition-colors duration-200",

            // Misc
            "cursor-pointer",
        ],
    }),
};
