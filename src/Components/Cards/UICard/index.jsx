import clsx from "clsx";
import { forwardRef } from "react";

const Card = forwardRef((props, ref) => (
  <div
    ref={ref}
    className={clsx(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      props.className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = forwardRef((props, ref) => (
  <div
    ref={ref}
    className={clsx("flex flex-col space-y-1.5 p-6", props.className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef((props, ref) => (
  <h3
    ref={ref}
    className={clsx(
      "text-2xl font-semibold leading-none tracking-tight",
      props.className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef((props, ref) => (
  <p
    ref={ref}
    className={clsx("text-sm text-muted-foreground", props.className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef((props, ref) => (
  <div ref={ref} className={clsx("p-6 pt-0", props.className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef((props, ref) => (
  <div
    ref={ref}
    className={clsx("flex items-center p-6 pt-0", props.className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
