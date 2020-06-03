# media query建议

    Use percentages instead of fixed widths. When that’s not possible, 
    use viewport-relative units ( vw , vh , vmin , vmax ), 
    which resolve to a fraction of the viewport width or height.
    
    When you want a fixed width for larger resolutions, use max-width , not
    width , so it can still adapt to smaller ones without media queries.
    
    Don’t forget to set a max-width of 100% for replaced elements such as
    img , object , video , and iframe .
    
    In cases when a background image needs to cover an entire container,
    background-size: cover can help maintain that regardless of said
    container’s size. However, bear in mind that bandwidth is not unlimited, and
    it’s not always wise to include large images that are going to be scaled down
    via CSS in mobile designs.
    
    When laying out images (or other elements) in a grid of rows and columns,
    let the number of columns be dictated by the viewport width. Flexible Box
    Layout (a.k.a. Flexbox) or display: inline-block and regular text
    wrapping can help with that.
    
    When using multi-column text, specify column-width instead of
    column-count , so that you get one column only in small resolutions.
 