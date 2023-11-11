// Handful common types
declare type Nullable<T> = T | null;
declare type Optional<T> = T | undefined;
declare type Result<T> = T | Error;
declare type EmptyObject = Record<string, never>;

// Add some common React props fields to T
declare type BaseProps = {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};
declare type Props<T> = BaseProps & T;
