# Projects System

This directory contains the academic-style project pages system for the Ciampitti Lab website.

## Structure

```
src/app/projects/
├── README.md              # This documentation
├── types.ts              # TypeScript interfaces for project data
├── data.ts               # Centralized project data
├── page.tsx              # Projects listing page
├── [slug]/
│   └── page.tsx          # Individual project router
└── components/
    ├── MaizeEarSensing.tsx     # Maize ear sensing project layout
    └── DefaultProject.tsx      # Default project template
```

## How to Add a New Project

### 1. Add Project Data

Edit `data.ts` and add your project to the `projects` array:

```typescript
{
    slug: "your-project-slug",           // URL: /projects/your-project-slug
    title: "Your Project Title",
    authors: [
        { name: "Your Name", affiliation: "Your University", sup: "1" },
        // ... more authors
    ],
    affiliations: [
        { id: "1", name: "Your University" },
        // ... more affiliations
    ],
    abstract: "Brief description of your project...",
    links: [
        { type: "Paper", icon: "📄", url: "https://your-paper-url" },
        { type: "Code", icon: "💻", url: "https://github.com/..." },
        // ... more links
    ],
    heroImage: "/projects/your-project-slug/hero.jpg",        // Optional
    heroVideo: "/projects/your-project-slug/demo.mp4",       // Optional
}
```

### 2. Create Custom Component (Optional)

If you want a custom layout, create a new component in `components/`:

```bash
touch src/app/projects/components/YourProject.tsx
```

```typescript
import Link from "next/link";
import { ProjectProps } from "../types";

export default function YourProject({ project }: ProjectProps) {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Back to Lab Button */}
            <div className="fixed top-6 left-6 z-10">
                <Link href="/" className="...">
                    Back to Lab
                </Link>
            </div>

            {/* Your custom layout here */}
            <div className="max-w-4xl mx-auto px-8 py-16">
                <h1>{project.title}</h1>
                {/* ... your custom content ... */}
            </div>
        </div>
    );
}
```

### 3. Add to Router

Edit `[slug]/page.tsx` and add your project to the switch statement:

```typescript
// Import your component
import YourProject from "../components/YourProject";

// Add to the switch statement
switch (project.slug) {
    case "your-project-slug":
        return <YourProject project={project} />;
    // ... other cases
}
```

### 4. Add Assets

Create a folder for your project and add your assets:

```
public/projects/your-project-slug/
├── hero.jpg              # Hero image
├── visual-abstract.png   # Visual abstract
├── pipeline.png          # Method diagram
├── results/              # Results images/videos
│   ├── result1.mp4
│   └── result2.jpg
└── supplementary/        # Additional materials
    ├── demo.mp4
    └── figure1.png
```

**Asset paths in your component:**
```typescript
// Reference assets like this:
<Image src="/projects/your-project-slug/hero.jpg" ... />
<Image src="/projects/your-project-slug/visual-abstract.png" ... />
<Image src="/projects/your-project-slug/results/result1.jpg" ... />
```

## Features

- ✅ **No header/footer** on individual project pages
- ✅ **Slug-based URLs** (e.g., `/projects/maize-ear-sensing`)
- ✅ **TypeScript support** with proper type checking
- ✅ **Completely customizable** layouts per project
- ✅ **Academic paper styling** with clean typography
- ✅ **Responsive design** for all screen sizes
- ✅ **Static generation** for optimal performance

## Example Projects

- `/projects/maize-ear-sensing` - Maize ear sensing project with agricultural theming

## Notes

- If you don't create a custom component, the project will use `DefaultProject.tsx`
- All projects automatically appear on the `/projects` listing page
- The system supports unlimited projects with unique layouts
- Each project page is completely isolated and can have its own styling
- **Asset Organization**: Each project gets its own folder in `public/projects/project-slug/` to keep assets organized and prevent naming conflicts 