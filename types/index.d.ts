declare module "*.module.css";
declare module "*.module.scss";

interface LayoutProps<T extends string = string> {
  children: React.ReactNode;
}
