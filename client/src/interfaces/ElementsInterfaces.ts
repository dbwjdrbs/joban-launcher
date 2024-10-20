export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    borderBottom?: string;
    borderLeft?: string;
    backgroundImage?: any;
    backgroundColor?: string;
    backgroundColor_hover?: string;
    fontSize?: string;
    fontWeight?: string;
    marginBottom?: string;
    height?: string;
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    hoverColor?: string;
    activeColor?: string;
    marginRight?: string;
    marginLeft?: string;
    marginTop?: string;
    backgroundColor?: string;
    backgroundColor_hover?: string;
    backgroundColor_active?: string;
    width?: string;
};