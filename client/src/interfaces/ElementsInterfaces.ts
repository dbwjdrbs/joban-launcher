export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
    backgroundImage?: any;
    backgroundColor?: string;
    backgroundColor_hover?: string;
    fontSize?: string;
    MediafontSize?: string;
    fontWeight?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string
    marginLeft?: string;
    paddingLeft?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    height?: string;
    width?: string;
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
    height?: string;
    fontSize?: string;
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    border?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
    backgroundImage?: any;
    backgroundColor?: string;
    backgroundColor_hover?: string;
    fontSize?: string;
    MediafontSize?: string;
    fontWeight?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string
    marginLeft?: string;
    paddingLeft?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    height?: string;
    width?: string;
    textAlign?: string;
}