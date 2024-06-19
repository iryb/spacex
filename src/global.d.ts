declare namespace JSX {
  interface IntrinsicElements {
    "swiper-container": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      React.ReactNode,
      HTMLElement
    > & {
      navigation: string;
      // Add more properties
    };
    "swiper-slide": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      React.ReactNode,
      HTMLElement
    > & {
      lazy: string;
      // Add more properties
    };
  }
}
