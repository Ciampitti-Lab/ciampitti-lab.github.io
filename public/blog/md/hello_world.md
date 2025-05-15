# Markdown Formatting Guide

This document serves as a reference for all available formatting options. Use this as a template for creating your own content.

## Text Formatting

Basic text appears like this in a paragraph.

**Bold text** is created with double asterisks or __double underscores__.

*Italic text* is created with single asterisks or _single underscores_.

***Bold and italic*** text combines both with triple asterisks.

~~Strikethrough~~ text uses double tildes.

[Links to external websites](https://www.purdue.edu/) are created with brackets and parentheses.

Inline code like `npm run dev` is wrapped in backticks.

## Headings

# H1 - Main Heading (use sparingly)
## H2 - Section Heading
### H3 - Subsection Heading
#### H4 - Minor Heading
##### H5 - Small Heading
###### H6 - Smallest Heading

## Lists

### Unordered Lists
- Item one
- Item two
  - Nested item 2.1
  - Nested item 2.2
- Item three

### Ordered Lists
1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task Lists
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

## Blockquotes

> This is a blockquote with a gold left border.  
> You can have multiple lines in a blockquote.
>
> And even multiple paragraphs by adding a blank line with a '>'.
>
> — Attribution line

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
| Long text that might wrap | Another cell | And another |

## Horizontal Rule

Three or more hyphens, asterisks, or underscores:

---

## Code Blocks

```javascript
// JavaScript example
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Purdue'));
```

```python
# Python example
def calculate_area(radius):
    """Calculate the area of a circle."""
    import math
    return math.pi * radius ** 2

print(f"Area: {calculate_area(5):.2f}")
```

```r
# R example
library(ggplot2)

# Create a simple scatter plot
ggplot(mtcars, aes(x = wt, y = mpg)) +
  geom_point() +
  labs(title = "Scatter plot of MPG vs Weight",
       x = "Weight (1000 lbs)",
       y = "Miles per Gallon (MPG)")
```

## Images

### Basic Image
![Basic image caption](/blog/img/hello_word.png)

### Image with Width Control
![Image with 500px width|width=500px](/blog/img/hello_word.png)

### Image with Left Alignment
![Left-aligned image|width=400px|align=left](/blog/img/hello_word.png)

*Text next to a left-aligned image will flow around it. This demonstrates how the content looks when you have a left-aligned image with text following it. You might need several lines of text to see the wrapping effect.*

### Image with Right Alignment
![Right-aligned image|width=400px|align=right](/blog/img/hello_word.png)

*Text next to a right-aligned image will flow around it. This demonstrates how the content looks when you have a right-aligned image with text following it. You might need several lines of text to see the wrapping effect.*

### Image with Height Control
![Image with controlled dimensions|width=400px|height=300px](/blog/img/hello_word.png)

### Image with Center Alignment (Default)
![Center-aligned image|width=600px](/blog/img/hello_word.png)

### External URL Image
![External URL image with right alignment|width=500px|align=right](https://www.purdue.edu/home/wp-content/uploads/2025/05/JU12530-1-scaled.jpg)

*This is an example of an image loaded directly from an external URL (Purdue website) rather than from the local files. Notice how it's right-aligned with text wrapping around it, just like local images.*

## Advanced Layout with HTML

For more complex layouts, you can use HTML directly in your markdown. Here are some examples:

### Simple Side-by-Side Image and Text

<div style="display: flex; align-items: center; gap: 20px; margin: 20px 0;">
  <div style="flex: 1;">
    <img src="/blog/img/hello_word.png" alt="Sample image" style="width: 100%; border-radius: 5px;" />
  </div>
  <div style="flex: 1;">
    <h3 style="font-weight: bold; margin-bottom: 10px;">Side-by-side Layout</h3>
    <p>This is a sample text that appears side by side with the image using HTML with inline styles instead of Tailwind classes. This should work more reliably across different environments.</p>
  </div>
</div>

### Two Column Layout with Border

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
  <div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px;">
    <h4 style="font-weight: bold; margin-bottom: 10px;">Column 1</h4>
    <p>This is the content for column 1, styled with basic HTML and inline CSS.</p>
  </div>
  <div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px;">
    <h4 style="font-weight: bold; margin-bottom: 10px;">Column 2</h4>
    <p>This is the content for column 2, styled with basic HTML and inline CSS.</p>
  </div>
</div>

### Card Layout 

<div style="max-width: 500px; margin: 30px auto; border: 1px solid #ccc; border-radius: 8px; overflow: hidden;">
  <img src="/lab-logo.png" alt="Card image" style="width: 100%; height: auto; display: block; margin: 0;" />
  <div style="padding: 20px;">
    <h3 style="font-weight: bold; font-size: 1.25rem; margin-bottom: 10px;">Card Title</h3>
    <p style="color: #555;">
      This is a card layout with an image at the top and text below it. Cards are useful for presenting content in a compact, readable format.
    </p>
  </div>
</div>

## Mathematical Equations

Math equations are rendered using KaTeX. Here are some examples:

### Inline Math

The famous formula $E = mc^2$ by Einstein relates energy and mass.

The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

### Block Math

The Gaussian integral:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

Maxwell's equations in differential form:

$$
\begin{align}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial \vec{E}}{\partial t}
\end{align}
$$

## YouTube Video Embedding

Embed a YouTube video with standard HTML iframe:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 30px 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
</div>

## Abbreviations

HTML is a markup language.

*[HTML]: HyperText Markup Language

---

## Tips for Best Results

1. Keep your markdown clean and well-structured
2. Use headings to create a logical document hierarchy
3. For complex layouts, use HTML with inline styles for better compatibility
4. Test your content on various screen sizes
5. Use images with appropriate dimensions for web


---

## Tips for Best Results

1. Keep your markdown clean and well-structured
2. Use headings to create a logical document hierarchy
3. For complex layouts, use HTML with inline styles for better compatibility
4. Test your content on various screen sizes
5. Use images with appropriate dimensions for web
